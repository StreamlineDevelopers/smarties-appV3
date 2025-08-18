import { WebApp } from 'meteor/webapp';
import bodyParser from 'body-parser';
import connectRoute from 'connect-route';
import { LogLevel, Logger } from "@tmq/logger";

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
            const { inbox, isNew: isNewInbox } = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });

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
            const channel = await InteractionManager.resolveChannel({ businessId: biz._id, type, identifier, provider, metadata: req.body?.meta });

            // Ensure consumer + inbox
            const consumer = await InteractionManager.resolveOrCreateConsumer({ businessId: biz._id, externalId: to });
            const { inbox, isNew: isNewInbox } = await InteractionManager.ensureInbox({ businessId: biz._id, consumerId: consumer._id, channelId: channel._id });

            // Provider handoff (mock)
            const adapter = Providers[provider] || Providers.sms;
            const providerRes = await adapter.send({ channel, to, text, attachments });

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
                status: providerRes?.status || 'queued',
                attributes: providerRes ? [{ key: 'providerMessageId', value: String(providerRes.providerMessageId) }] : [],
            });

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
}));
