import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as common } from "@tmq-dev-ph/tmq-dev-core-client/dist/static_codegen/tmq/common";
import { tmq as interaction } from "../../common/static_codegen/tmq/interaction";
import Interactions, { InteractionsCollection } from "../classes/dbTemplates/Interactions.js";
import { toObjectId, toObjectIdArray } from "../classes/db/helper.js";
import { google as gp } from "../../common/static_codegen/google/protobuf/any";
const { DefaultResponse } = common;
const { GetInteractionsRequest, GetInteractionsResponse, Interaction, InteractionPayload, InteractionAttribute, GetInteractionsByInboxIdsRequest, GetInteractionsByConsumerRequest } = interaction;

export default {
    /**
     * Get interactions by inbox ID
     * @param {Object} call
     * @param {GetInteractionsRequest} call.request
     * @param {function} callback 
     */
    GetInteractions: async function ({ request }, callback) {
        try {
            Logger.showDebug("InteractionService.GetInteractions: inbox_id=%s", request.inbox_id);

            // Validate inbox ID
            if (!request.inbox_id) {
                const response = new GetInteractionsResponse();
                response.success = false;
                response.error_message = "Inbox ID is required";
                response.total_count = 0;
                callback(null, response);
                return;
            }

            // Query interactions by inbox ID
            const interactions = await Interactions.findByInboxId(request.inbox_id);

            // Convert to protobuf format
            const response = new GetInteractionsResponse();
            response.success = true;
            response.total_count = interactions.length;
            response.error_message = "";

            // Transform each interaction to protobuf message
            response.interactions = interactions.map(entry => {
                const interactionMsg = new Interaction();
                interactionMsg.id = entry._id.toString();
                interactionMsg.business_id = entry.businessId ? entry.businessId.toString() : "";
                interactionMsg.inbox_id = entry.inboxId ? entry.inboxId.toString() : "";
                interactionMsg.channel_id = entry.channelId ? entry.channelId.toString() : "";
                interactionMsg.consumer_id = entry.consumerId ? entry.consumerId.toString() : "";
                interactionMsg.user_id = entry.userId ? entry.userId.toString() : "";
                interactionMsg.medium = entry.medium || "";
                interactionMsg.direction = entry.direction || "";
                interactionMsg.status = entry.status || "";
                interactionMsg.timestamp = entry.timestamp || 0;

                // Handle payload
                const payloadMsg = new InteractionPayload();
                if (entry.payload) {
                    payloadMsg.text = entry.payload.text || "";
                    payloadMsg.attachments = entry.payload.attachments || [];
                }
                interactionMsg.payload = payloadMsg;

                // Handle attributes
                if (entry.attributes && Array.isArray(entry.attributes)) {
                    interactionMsg.attributes = entry.attributes.map(attr => {
                        const attrMsg = new InteractionAttribute();
                        attrMsg.key = attr.key || "";
                        const any = new gp.protobuf.Any();
                        // choose a convention; here we mark it as a string-encoded value
                        any.type_url = "type.googleapis.com/string";
                        any.value = Buffer.from(String(attr.value ?? ""), "utf8"); // Uint8Array is fine too
                        attrMsg.value = any;
                        return attrMsg;
                    });
                } else {
                    interactionMsg.attributes = [];
                }

                return interactionMsg;
            });

            Logger.showDebug("InteractionService.GetInteractions: Found %d interactions", interactions.length);
            callback(null, response);

        } catch (error) {
            Logger.showError("InteractionService.GetInteractions: Error - %s", error.message);

            const response = new GetInteractionsResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            response.total_count = 0;
            callback(null, response);
        }
    }
    ,
    /**
     * Get interactions by multiple inbox IDs
     * @param {Object} call
     * @param {GetInteractionsByInboxIdsRequest} call.request
     * @param {function} callback 
     */
    GetInteractionsByInboxIds: async function ({ request }, callback) {
        try {
            Logger.showDebug("InteractionService.GetInteractionsByInboxIds");

            if (!request.inbox_ids || !Array.isArray(request.inbox_ids) || request.inbox_ids.length === 0) {
                const response = new GetInteractionsResponse();
                response.success = false;
                response.error_message = "inbox_ids is required";
                response.total_count = 0;
                response.interactions = [];
                callback(null, response);
                return;
            }

            const docs = await InteractionsCollection.find(
                { inboxId: { $in: toObjectIdArray(request.inbox_ids) } },
                { sort: { timestamp: 1 } }
            ).fetchAsync();

            const response = new GetInteractionsResponse();
            response.success = true;
            response.total_count = docs.length;
            response.error_message = "";
            response.interactions = docs.map(entry => {
                const interactionMsg = new Interaction();
                interactionMsg.id = entry._id.toString();
                interactionMsg.business_id = entry.businessId ? entry.businessId.toString() : "";
                interactionMsg.inbox_id = entry.inboxId ? entry.inboxId.toString() : "";
                interactionMsg.channel_id = entry.channelId ? entry.channelId.toString() : "";
                interactionMsg.consumer_id = entry.consumerId ? entry.consumerId.toString() : "";
                interactionMsg.user_id = entry.userId ? entry.userId.toString() : "";
                interactionMsg.medium = entry.medium || "";
                interactionMsg.direction = entry.direction || "";
                interactionMsg.status = entry.status || "";
                interactionMsg.timestamp = entry.timestamp || 0;

                const payloadMsg = new InteractionPayload();
                if (entry.payload) {
                    payloadMsg.text = entry.payload.text || "";
                    payloadMsg.attachments = entry.payload.attachments || [];
                }
                interactionMsg.payload = payloadMsg;

                if (entry.attributes && Array.isArray(entry.attributes)) {
                    interactionMsg.attributes = entry.attributes.map(attr => {
                        const attrMsg = new InteractionAttribute();
                        attrMsg.key = attr.key || "";
                        const any = new gp.protobuf.Any();
                        any.type_url = "type.googleapis.com/string";
                        any.value = Buffer.from(String(attr.value ?? ""), "utf8");
                        attrMsg.value = any;
                        return attrMsg;
                    });
                } else {
                    interactionMsg.attributes = [];
                }

                return interactionMsg;
            });

            Logger.showDebug("InteractionService.GetInteractionsByInboxIds: Found %d interactions", docs.length);
            callback(null, response);
        } catch (error) {
            Logger.showError("InteractionService.GetInteractionsByInboxIds: Error - %s", error.message);
            const response = new GetInteractionsResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            response.total_count = 0;
            response.interactions = [];
            callback(null, response);
        }
    }
    ,
    /**
     * Get interactions by consumer ID within a business
     * @param {Object} call
     * @param {GetInteractionsByConsumerRequest} call.request
     * @param {function} callback 
     */
    GetInteractionsByConsumer: async function ({ request }, callback) {
        try {
            Logger.showDebug("InteractionService.GetInteractionsByConsumer: business_id=%s consumer_id=%s", request.business_id, request.consumer_id);

            if (!request.business_id || !request.consumer_id) {
                const response = new GetInteractionsResponse();
                response.success = false;
                response.error_message = "business_id and consumer_id are required";
                response.total_count = 0;
                response.interactions = [];
                callback(null, response);
                return;
            }

            const docs = await InteractionsCollection.find(
                { businessId: toObjectId(request.business_id), consumerId: toObjectId(request.consumer_id) },
                { sort: { timestamp: 1 } }
            ).fetchAsync();

            const response = new GetInteractionsResponse();
            response.success = true;
            response.total_count = docs.length;
            response.error_message = "";
            response.interactions = docs.map(entry => {
                const interactionMsg = new Interaction();
                interactionMsg.id = entry._id.toString();
                interactionMsg.business_id = entry.businessId ? entry.businessId.toString() : "";
                interactionMsg.inbox_id = entry.inboxId ? entry.inboxId.toString() : "";
                interactionMsg.channel_id = entry.channelId ? entry.channelId.toString() : "";
                interactionMsg.consumer_id = entry.consumerId ? entry.consumerId.toString() : "";
                interactionMsg.user_id = entry.userId ? entry.userId.toString() : "";
                interactionMsg.medium = entry.medium || "";
                interactionMsg.direction = entry.direction || "";
                interactionMsg.status = entry.status || "";
                interactionMsg.timestamp = entry.timestamp || 0;

                const payloadMsg = new InteractionPayload();
                if (entry.payload) {
                    payloadMsg.text = entry.payload.text || "";
                    payloadMsg.attachments = entry.payload.attachments || [];
                }
                interactionMsg.payload = payloadMsg;

                if (entry.attributes && Array.isArray(entry.attributes)) {
                    interactionMsg.attributes = entry.attributes.map(attr => {
                        const attrMsg = new InteractionAttribute();
                        attrMsg.key = attr.key || "";
                        const any = new gp.protobuf.Any();
                        any.type_url = "type.googleapis.com/string";
                        any.value = Buffer.from(String(attr.value ?? ""), "utf8");
                        attrMsg.value = any;
                        return attrMsg;
                    });
                } else {
                    interactionMsg.attributes = [];
                }

                return interactionMsg;
            });

            Logger.showDebug("InteractionService.GetInteractionsByConsumer: Found %d interactions", docs.length);
            callback(null, response);
        } catch (error) {
            Logger.showError("InteractionService.GetInteractionsByConsumer: Error - %s", error.message);
            const response = new GetInteractionsResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            response.total_count = 0;
            response.interactions = [];
            callback(null, response);
        }
    }
};
