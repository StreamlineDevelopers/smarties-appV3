import { WebApp } from 'meteor/webapp';
import bodyParser from 'body-parser';
import connectRoute from 'connect-route';
import { LogLevel, Logger } from "@tmq/logger";
import { fetch } from "meteor/fetch";

import SchemaErrorHandler from '../../../server/utils/schemaErrorHandler.js';
import InteractionManager from '../../../server/classes/interactions/InteractionManager.js';
import Server from '../../../server/Server.js';

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
        async send({ channel, to, text, ...rest }) {
            if (channel.type === "chat" && channel.identifier.includes("smarty-chat-main")) {
                return { providerMessageId: rest.messageId || `chat-${Date.now()}`, status: 'sent' };
            }
            const username = 'tmq';
            const password = 'P@ssword1';
            const auth = Buffer.from(`${username}:${password}`).toString('base64');
            const testUrl = "https://n8n.ph01.us/webhook-test/2522bf0c-4e08-44ec-86bc-721b42a1716d";
            const productionUrl = "https://n8n.ph01.us/webhook/2522bf0c-4e08-44ec-86bc-721b42a1716d";
            const response = await fetch(testUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Basic " + auth,
                },
                body: JSON.stringify({ query: text, ...rest, }),
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
            const inbox = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });
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

            console.log({ provider, type, identifier, to, text, attachments });
            const channel = await InteractionManager.resolveChannel({ businessId: biz._id, type, identifier, provider, metadata: req.body?.meta });

            // Ensure consumer + inbox
            const consumer = await InteractionManager.resolveOrCreateConsumer({ businessId: biz._id, externalId: to });
            const { inbox, isNew: isNewInbox } = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });



            // Persist interaction as outbound
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
                attributes: [],
            });

            // Provider handoff (mock)
            const adapter = Providers[type] || Providers.sms;
            const providerRes = await adapter.send({ channel, to, text, attachments, ...req.body, interactionId: interaction._id._str, slug: biz.slug });
            if (providerRes?.code !== 200) {
                await InteractionManager.updateInteraction({ interactionId: interaction._id, status: 'failed' });
            }

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
