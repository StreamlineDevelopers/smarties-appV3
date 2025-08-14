import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as common } from "@tmq-dev-ph/tmq-dev-core-client/dist/static_codegen/tmq/common";
import { tmq as inbox } from "../../common/static_codegen/tmq/inbox";
import Inbox from "../classes/dbTemplates/Inbox.js";
import { toObjectId } from "../classes/db/helper.js";

const { DefaultResponse } = common;
const { GetInboxRequest, GetInboxResponse, Inbox: InboxMsg } = inbox;

export default {
    /**
     * Get inbox entries by business ID
     * @param {Object} call
     * @param {GetInboxRequest} call.request
     * @param {function} callback 
     */
    GetInbox: async function ({ request }, callback) {
        try {
            Logger.showDebug("InboxService.GetInbox: business_id=%s", request.business_id);

            // Validate business ID
            if (!request.business_id) {
                const response = new GetInboxResponse();
                response.success = false;
                response.error_message = "Business ID is required";
                response.total_count = 0;
                callback(null, response);
                return;
            }

            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            // Query inbox entries by business ID
            const inboxEntries = await Inbox.findByBusinessId(request.business_id);

            // Convert to protobuf format
            const response = new GetInboxResponse();
            response.success = true;
            response.total_count = inboxEntries.length;
            response.error_message = "";

            // Transform each inbox entry to protobuf message
            response.inboxes = inboxEntries.map(entry => {
                const inboxMsg = new InboxMsg();
                inboxMsg.id = entry._id._str;
                inboxMsg.business_id = entry.businessId ? entry.businessId._str : "";
                inboxMsg.consumer_id = entry.consumerId ? entry.consumerId._str : "";
                inboxMsg.channel_id = entry.channelId ? entry.channelId._str : "";
                inboxMsg.status = entry.status || "";
                inboxMsg.assignee_id = entry.assigneeId ? entry.assigneeId._str : "";
                inboxMsg.locked_at = entry.lockedAt || 0;
                inboxMsg.unread_for_assignee = entry.unreadForAssignee || 0;
                inboxMsg.latest_interaction_id = entry.latestInteractionId ? entry.latestInteractionId._str : "";
                inboxMsg.latest_snippet = entry.latestSnippet || "";
                inboxMsg.latest_at = entry.latestAt || 0;
                inboxMsg.latest_direction = entry.latestDirection || "";
                inboxMsg.created_at = entry.createdAt || 0;
                return inboxMsg;
            });

            ServerInstance.RedisVentServer.triggers.insert('inboxapp', 'inbox', request.business_id, inboxEntries, { uniqueId: 'user12' });

            Logger.showDebug("InboxService.GetInbox: Found %d entries", inboxEntries.length);
            callback(null, response);

        } catch (error) {
            Logger.showError("InboxService.GetInbox: Error - %s", error.message);

            const response = new GetInboxResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            response.total_count = 0;
            callback(null, response);
        }
    }
};
