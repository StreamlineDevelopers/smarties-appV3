import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import CustomerEngagement from "../classes/journey/CustomerEngagement";
import { Customer } from "../classes/dbTemplates/Customer";

export default {
    getCustomer: async function ({ request }, callback) {
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const { customerId } = request;

            // find the customer in the database
            const customer = await Customer.findByCustomerId(customerId);

            if (!customer) {
                return callback({
                    code: 404,
                    message: "Customer not found",
                    status: status.NOT_FOUND
                });
            }

            // get the latest customer information from the database
            const customerEngagement = new CustomerEngagement(ServerInstance.config);
            const result = await customerEngagement.getCustomer(customerId);
            const customerInfo = customer.toObjectLowerCase();

            if (!customerInfo) {
                return callback({
                    code: 404,
                    message: "Customer not found",
                    status: status.NOT_FOUND
                });
            }

            // merge the customer information with the latest customer information
            const mergedCustomer = new Customer({ ...customer, ...result });

            // save the merged customer information to the database
            await mergedCustomer.save();


            callback(null, {
                success: true,
                data: result,
                message: "Customer retrieved successfully"
            });
        } catch (error) {
            Logger.error("Error getting customer:", error);
            callback({
                code: 500,
                message: error.message || "Error getting customer",
                status: status.INTERNAL
            });
        }
    },



    /**
     * Get webhook statistics
     * @param {Object} call
     * @param {Object} call.request - Request parameters with hours
     * @param {function} callback 
     */
    getWebhookStats: async function ({ request }, callback) {
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const { hours } = request;
            const customerEngagement = new CustomerEngagement(ServerInstance.config);
            const result = await customerEngagement.getWebhookStats(hours || 24);

            callback(null, {
                success: true,
                data: result,
                message: "Webhook statistics retrieved successfully"
            });
        } catch (error) {
            Logger.error("Error getting webhook stats:", error);
            callback({
                code: 500,
                message: error.message || "Error getting webhook stats",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Get webhook event by ID
     * @param {Object} call
     * @param {Object} call.request - Request with webhook ID
     * @param {function} callback 
     */
    getWebhookEvent: async function ({ request }, callback) {
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const { webhookId } = request;
            if (!webhookId) {
                return callback({
                    code: 400,
                    message: "Webhook ID is required",
                    status: status.INVALID_ARGUMENT
                });
            }

            const customerEngagement = new CustomerEngagement(ServerInstance.config);
            const result = await customerEngagement.getWebhookEvent(webhookId);

            callback(null, {
                success: true,
                data: result,
                message: "Webhook event retrieved successfully"
            });
        } catch (error) {
            Logger.error("Error getting webhook event:", error);
            callback({
                code: 500,
                message: error.message || "Error getting webhook event",
                status: status.INTERNAL
            });
        }
    },

    /**
     * List webhook events with filtering
     * @param {Object} call
     * @param {Object} call.request - Request with filters
     * @param {function} callback 
     */
    listWebhookEvents: async function ({ request }, callback) {
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const filters = request.filters || {};
            const customerEngagement = new CustomerEngagement(ServerInstance.config);
            const result = await customerEngagement.listWebhookEvents(filters);

            callback(null, {
                success: true,
                data: result,
                message: "Webhook events listed successfully"
            });
        } catch (error) {
            Logger.error("Error listing webhook events:", error);
            callback({
                code: 500,
                message: error.message || "Error listing webhook events",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Get webhook analytics
     * @param {Object} call
     * @param {Object} call.request - Request with account ID and days
     * @param {function} callback 
     */
    getWebhookAnalytics: async function ({ request }, callback) {
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const { accountId, days } = request;
            const customerEngagement = new CustomerEngagement(ServerInstance.config);
            const result = await customerEngagement.getWebhookAnalytics(accountId, days || 30);

            callback(null, {
                success: true,
                data: result,
                message: "Webhook analytics retrieved successfully"
            });
        } catch (error) {
            Logger.error("Error getting webhook analytics:", error);
            callback({
                code: 500,
                message: error.message || "Error getting webhook analytics",
                status: status.INTERNAL
            });
        }
    },
};
