import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as common } from "@tmq-dev-ph/tmq-dev-core-client/dist/static_codegen/tmq/common";
import { tmq as interaction } from "../../common/static_codegen/tmq/interaction";
import Interactions from "../classes/dbTemplates/Interactions.js";
import { toObjectId } from "../classes/db/helper.js";

const { DefaultResponse } = common;
const { GetInteractionsRequest, GetInteractionsResponse, Interaction, InteractionPayload, InteractionAttribute } = interaction;

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

                        // Handle different value types using oneof
                        const valueType = typeof attr.value;
                        if (valueType === 'string') {
                            attrMsg.string_value = attr.value;
                        } else if (valueType === 'number') {
                            if (Number.isInteger(attr.value)) {
                                attrMsg.int_value = attr.value;
                            } else {
                                attrMsg.double_value = attr.value;
                            }
                        } else if (valueType === 'boolean') {
                            attrMsg.bool_value = attr.value;
                        }

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
};
