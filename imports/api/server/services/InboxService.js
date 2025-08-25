import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as common } from "@tmq-dev-ph/tmq-dev-core-client/dist/static_codegen/tmq/common";
import { tmq as inbox } from "../../common/static_codegen/tmq/inbox";
import Inbox from "../classes/dbTemplates/Inbox.js";
import { toObjectId } from "../classes/db/helper.js";

const { DefaultResponse } = common;
const { GetInboxRequest, GetInboxResponse, Inbox: InboxMsg, GetMergedInboxRequest, GetMergedInboxResponse, MergedInbox } = inbox;

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
            const inboxEntries = await Inbox.findByBusinessId(request.business_id, {
                sort: {
                    latestAt: -1
                }
            });

            // Convert to protobuf format
            const response = new GetInboxResponse();
            response.success = true;
            response.total_count = inboxEntries.length;
            response.error_message = "";

            if (inboxEntries.length === 0) {
                response.inboxes = [];
            } else {
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
            }
            // ServerInstance.RedisVentServer.triggers.insert('inboxapp', 'inbox', request.business_id, inboxEntries, { uniqueId: 'user12' });

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
    ,
    /**
     * Get merged inbox entries grouped by consumer ID for a business
     * @param {Object} call
     * @param {GetMergedInboxRequest} call.request
     * @param {function} callback 
     */
    GetMergedInbox: async function ({ request }, callback) {
        try {
            Logger.showDebug("InboxService.GetMergedInbox: business_id=%s", request.business_id);

            if (!request.business_id) {
                const response = new GetMergedInboxResponse();
                response.success = false;
                response.error_message = "Business ID is required";
                response.total_count = 0;
                response.inboxes = [];
                callback(null, response);
                return;
            }

            // Fetch all inbox entries for business
            const inboxEntries = await Inbox.findByBusinessId(request.business_id, {
                sort: {
                    latestAt: -1
                }
            });

            // Group by consumerId
            const groups = new Map();
            for (const entry of inboxEntries) {
                const consumerId = entry.consumerId && entry.consumerId._str ? entry.consumerId._str : (entry.consumerId || "");
                if (!consumerId) continue;

                if (!groups.has(consumerId)) {
                    groups.set(consumerId, {
                        consumerId,
                        inboxIds: [],
                        totalUnread: 0,
                        latestEntry: null
                    });
                }
                const g = groups.get(consumerId);
                const idStr = entry._id && entry._id._str ? entry._id._str : String(entry._id || "");
                if (idStr) g.inboxIds.push(idStr);
                g.totalUnread += (typeof entry.unreadForAssignee === 'number' ? entry.unreadForAssignee : 0);

                const entryLatestAt = typeof entry.latestAt === 'number' ? entry.latestAt : (entry.createdAt || 0);
                const currentLatestAt = g.latestEntry ? (typeof g.latestEntry.latestAt === 'number' ? g.latestEntry.latestAt : (g.latestEntry.createdAt || 0)) : -Infinity;
                if (!g.latestEntry || entryLatestAt > currentLatestAt) {
                    g.latestEntry = entry;
                }
            }

            // Build response
            const response = new GetMergedInboxResponse();
            response.success = true;
            response.error_message = "";
            response.total_count = groups.size;
            response.inboxes = Array.from(groups.values()).map(g => {
                const latest = g.latestEntry || {};
                const merged = new MergedInbox();
                merged.consumer_id = g.consumerId;
                merged.inbox_ids = g.inboxIds;
                merged.representative_inbox_id = latest._id && latest._id._str ? latest._id._str : (latest._id ? String(latest._id) : "");
                merged.latest_interaction_id = latest.latestInteractionId && latest.latestInteractionId._str ? latest.latestInteractionId._str : (latest.latestInteractionId || "");
                merged.latest_snippet = latest.latestSnippet || "";
                merged.latest_at = typeof latest.latestAt === 'number' ? latest.latestAt : (latest.createdAt || 0);
                merged.latest_direction = latest.latestDirection || "";
                merged.total_unread_for_assignee = g.totalUnread;
                return merged;
            });

            Logger.showDebug("InboxService.GetMergedInbox: Groups %d", groups.size);
            callback(null, response);

        } catch (error) {
            Logger.showError("InboxService.GetMergedInbox: Error - %s", error.message);
            const response = new GetMergedInboxResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            response.total_count = 0;
            response.inboxes = [];
            callback(null, response);
        }
    }
};
