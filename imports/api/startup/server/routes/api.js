import { WebApp } from 'meteor/webapp';
import bodyParser from 'body-parser';
import connectRoute from 'connect-route';
import { LogLevel, Logger } from "@tmq/logger";
import { fetch } from "meteor/fetch";

import SchemaErrorHandler from '../../../server/utils/schemaErrorHandler.js';
import InteractionManager from '../../../server/classes/interactions/InteractionManager.js';
import Server from '../../../server/Server.js';
import Interactions from '../../../server/classes/dbTemplates/Interactions.js';
import { IdentityResolution } from '../../../server/classes/identity/IdentityResolution.js';
import { rankPersonsForConsumer } from '../../../server/classes/identity/IdentityRanker.js';

Logger.setLogLevel(LogLevel.DEBUG);

// ---- Provider adapter stubs ----
// Replace these with real integrations (e.g., Twilio, WhatsApp, Telegram, etc.)
const Providers = {
    // key = provider string stored on Channels.provider
    sms: {
        async send({ channel, to, text }) {
            // TODO: handoff to SMS gateway
            return { providerMessageId: `mock-sms-${Date.now()}`, status: 'queued' };
        },
    },
    whatsapp: {
        async send({ channel, to, text }) {
            // TODO: handoff to WhatsApp BSP
            return { providerMessageId: `mock-wa-${Date.now()}`, status: 'sent' };
        },
    },
    chat: {
        async send({ channel, to, text, sessionId, ...rest }) {
            if (channel.type === "chat" && rest.meta?.agentId === "bot") {
                return { providerMessageId: rest.messageId || `chat-${Date.now()}`, status: 'sent' };
            }

            const username = Server.Config.auth.username || 'tmq';
            const password = Server.Config.auth.password || 'P@ssword1';
            const auth = Buffer.from(`${username}:${password}`).toString('base64');
            const testUrl = Server.Config.server.smartiesAssistant.testUrl;
            const productionUrl = Server.Config.server.smartiesAssistant.productionUrl;
            const response = await fetch(productionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Basic " + auth,
                },
                body: JSON.stringify({ query: text, sessionId, ...rest }),
            });
            return await response.json();
        },
    }
};
// ---- HTTP Wiring ----
WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use(bodyParser.urlencoded({ extended: false }));

WebApp.connectHandlers.use('/api/b', connectRoute((router) => {
    // Inbound webhook --> persist + update inbox
    router.post('/:slug/channels/messages/inbound', async (req, res) => {
        const { slug } = req.params;
        Logger.debug(`Received inbound webhook for business [${slug}]`, req.body);
        try {
            const biz = await InteractionManager.resolveBusinessBySlug(slug);

            const { provider, type, identifier, externalId, text, attachments } = InteractionManager.normalizeInbound(req.body || {});

            const channel = await InteractionManager.resolveChannel({ businessId: biz._id, type, identifier, provider, metadata: req.body?.meta });
            const consumer = await InteractionManager.resolveOrCreateConsumer({ businessId: biz._id, externalId });
            const metaRaw = req.body?.meta || {};
            const meta = {
                deviceId: metaRaw.dev || metaRaw.deviceId || null,
                cookieId: metaRaw.smrtid || metaRaw.urid || metaRaw.cookieId || null, // prefer stable first-party cookie if available
                ipAsn: metaRaw.asn || metaRaw.ipAsn || null,
                email: metaRaw.email || null,
                phone: metaRaw.phone || null,
                timeProximitySec: metaRaw.timeProximitySec // optional
            };
            const person = await IdentityResolution.resolveOrCreatePersonFromSignals({ businessId: biz._id, meta });

            await IdentityResolution.writeSoftLink({
                businessId: biz._id,
                personId: person._id,
                consumerId: consumer._id,
                signals: meta
            });
            const { inbox, isNew: isNewInbox } = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });
            const attributes = [];
            if (req.body.meta) {
                for (const key in req.body.meta) {
                    attributes.push({ key, value: req.body.meta[key] });
                }
            }

            const interaction = await InteractionManager.recordInteraction({
                businessId: biz._id,
                inboxId: inbox._id,
                channelId: channel._id,
                consumerId: consumer._id,
                medium: type,
                direction: 'inbound',
                text,
                attachments,
                status: 'received',
                attributes,
            });

            const updatedInbox = await InteractionManager.updateInboxLatest({ inboxId: inbox._id, interaction, incrementUnread: true });
            let businessId = biz._id._str || biz._id.toString();
            const inboxid = (updatedInbox?._id?._str || updatedInbox?._id?.toString()) || (inbox._id._str || inbox._id.toString());
            const interactionid = interaction._id._str || interaction._id.toString();
            if (isNewInbox) {
                Server.RedisVentServer.triggers.insert('inboxapp', 'inbox', businessId, inboxid, updatedInbox || inbox);
            } else {
                Server.RedisVentServer.triggers.update('inboxapp', 'inbox', businessId, inboxid, updatedInbox || inbox);
            }
            Server.RedisVentServer.triggers.insert('interactionapp', 'interaction', inboxid, interactionid, interaction);

            // #NOTES: FOR FUTURE USE
            // const rankedPersons = await rankPersonsForConsumer({ businessId: biz._id, consumerId: consumer._id, meta });
            // console.log("rankedPersons =>>", rankedPersons);

            InteractionManager.ok(res, {
                businessId: biz._id,
                channelId: channel._id,
                consumerId: consumer._id,
                inboxId: inbox._id,
                interactionId: interaction._id,
                // isNewInbox: isNewInbox,
            });
        } catch (err) {
            // Enhanced error handling with schema validation details
            if (SchemaErrorHandler.isValidationError(err)) {
                const errorResponse = SchemaErrorHandler.createErrorResponse(err, {
                    operation: 'inbound_webhook',
                    businessSlug: slug,
                    requestData: req.body
                });

                SchemaErrorHandler.logValidationError(err, 'inbound webhook processing', req.body);

                res.setHeader('Content-Type', 'application/json');
                res.writeHead(400);
                res.end(JSON.stringify(errorResponse));
            } else {
                InteractionManager.bad(res, 405, err.stack || err.message || 'inbound_failed');
            }
        }
    });

    // Outbound send --> provider send + persist + update inbox
    router.post('/:slug/channels/messages/outbound', async (req, res) => {
        const { slug } = req.params;
        try {
            Logger.debug(`Received outbound webhook for business ${slug}`, req.body);
            const biz = await InteractionManager.resolveBusinessBySlug(slug);
            const { provider, type, identifier, to, text, attachments } = InteractionManager.normalizeOutbound(req.body || {});
            const channel = await InteractionManager.resolveChannel({ businessId: biz._id, type, identifier, provider, metadata: req.body?.meta });

            // Ensure consumer + inbox
            const consumer = await InteractionManager.resolveOrCreateConsumer({ businessId: biz._id, externalId: to });
            const { inbox, isNew: isNewInbox } = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });
            const attributes = [];
            if (req.body.meta) {
                for (const key in req.body.meta) {
                    attributes.push({ key, value: req.body.meta[key] });
                }
            }
            const latestInteraction = inbox.latestInteractionId ? await Interactions.findById(inbox.latestInteractionId) : null;
            const sessionId = latestInteraction?.attributes?.find(attr => attr.key === "sessionId")?.value;
            if (sessionId) {
                attributes.push({ key: "sessionId", value: sessionId });
            }
            const interaction = await InteractionManager.recordInteraction({
                businessId: biz._id,
                inboxId: inbox._id,
                channelId: channel._id,
                consumerId: consumer._id,
                medium: type,
                direction: 'outbound',
                text,
                attachments,
                status: 'queued',
                attributes,
            });

            // Provider handoff (mock)
            const adapter = Providers[type] || Providers.sms;
            const providerRes = await adapter.send({ channel, to, text, attachments, ...req.body, interactionId: interaction._id._str, slug: biz.slug, sessionId });
            // providerRes { providerMessageId: 'chat-1755541948233', status: 'sent' }
            // if (providerRes?.code !== 200) {
            //     await InteractionManager.updateInteraction({ interactionId: interaction._id, status: 'failed' });
            // }

            const updatedInbox = await InteractionManager.updateInboxLatest({ inboxId: inbox._id, interaction, incrementUnread: false });
            let businessId = biz._id._str || biz._id.toString();
            const inboxid = (updatedInbox?._id?._str || updatedInbox?._id?.toString()) || (inbox._id._str || inbox._id.toString());
            const interactionid = interaction._id._str || interaction._id.toString();
            if (isNewInbox) {
                Server.RedisVentServer.triggers.insert('inboxapp', 'inbox', businessId, inboxid, updatedInbox || inbox);
            } else {
                Server.RedisVentServer.triggers.update('inboxapp', 'inbox', businessId, inboxid, updatedInbox || inbox);
            }
            Server.RedisVentServer.triggers.insert('interactionapp', 'interaction', inboxid, interactionid, interaction);

            InteractionManager.ok(res, {
                businessId: biz._id,
                channelId: channel._id,
                consumerId: consumer._id,
                inboxId: inbox._id,
                interactionId: interaction._id,
                provider: provider,
                providerResponse: providerRes,
            });
        } catch (err) {
            // Enhanced error handling with schema validation details
            if (SchemaErrorHandler.isValidationError(err)) {
                const errorResponse = SchemaErrorHandler.createErrorResponse(err, {
                    operation: 'outbound_webhook',
                    businessSlug: slug,
                    requestData: req.body
                });

                SchemaErrorHandler.logValidationError(err, 'outbound webhook processing', req.body);

                res.setHeader('Content-Type', 'application/json');
                res.writeHead(400);
                res.end(JSON.stringify(errorResponse));
            } else {
                InteractionManager.bad(res, 400, err.message || 'outbound_failed');
            }
        }
    });
    router.post('/:slug/receipt', async (req, res) => {
        const { slug } = req.params;
        Logger.debug(`Received receipt webhook for business ${slug}`, req.body);
        try {
            const { provider, type, identifier, to, text, attachments, interactionId, status } = InteractionManager.normalizeReceipt(req.body || {});
            await InteractionManager.updateInteraction({ interactionId, status });
            InteractionManager.ok(res, { slug, message: "Receipt received" });
        } catch (error) {
            if (SchemaErrorHandler.isValidationError(error)) {
                const errorResponse = SchemaErrorHandler.createErrorResponse(error, {
                    operation: 'receipt_webhook',
                    businessSlug: slug,
                    requestData: req.body
                });
                SchemaErrorHandler.logValidationError(error, 'receipt webhook processing', req.body);
                InteractionManager.bad(res, 400, errorResponse);
            } else {
                InteractionManager.bad(res, 400, error.message || 'receipt_failed');
            }
        }

    });
}));
