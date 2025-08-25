import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import { tmq as widget } from "../../common/static_codegen/tmq/widgetConfig";
import moment from "moment";
import RedisVentService from "../classes/events/RedisVentService";
const { WidgetConfigResponse, FetchWidgetConfigResponse, AllWidgetConfig } = widget;
import { WidgetConfig } from "../classes/dbTemplates/WidgetConfig";
import Server from "../Server";

export default {
    /**
    * @param {Object} call
    * @param {widget.WidgetConfigRequest} call.request
    * @param {function} callback 
    */
    createWidgetConfig: async function ({ request }, callback) {
        const response = new WidgetConfigResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            // Validate `name` field
            if (!request.name || request.name.trim() === "") {
                return callback({
                    code: 400,
                    message: "Name is required and cannot be empty",
                    status: status.INVALID_ARGUMENT || 400
                });
            }

            const user = await Core.getDB("users", true).findOne({ _id: request.userId });
            if (!user) {
                return callback({
                    code: 401,
                    message: "User not found",
                    status: status.UNAUTHENTICATED
                });
            }

            if (user.widgetAccount === true) {
                await Server.WidgetManager.loginUser({
                    email: user.emails[0].address,
                    password: user._id
                });
            } else {
                await Server.WidgetManager.registerUser({
                    email: user.emails[0].address,
                    password: user._id,
                    firstName: user.username,
                    lastName: "Smarties"
                });
                Core.getDB("users", true).updateOne({ _id: user._id }, { $set: { widgetAccount: true } });
            }
            // (Optional) Log or store configData as needed
            const res = await Server.WidgetManager.createWidgetConfig({
                ...request,
                domains: request.domains || request.domain,
                assistantIdLlm: request.assistantidllm || "assistantIdLlm",
                assistantIdCall: request.assistantId || "assistantIdCall",
            });

            if (res.status === "success") {
                const { siteId, widgetUrl } = res.config;
                if (!siteId) {
                    return callback({
                        code: 500,
                        message: "Site ID not found in response",
                        status: status.INTERNAL
                    });
                }
                const temp = ServerInstance?.Config?.widgetConfig?.serverUrl;
                let url = widgetUrl;
                if (!url) {
                    url = temp;
                }
                const cleanedUrl = new URL(url);
                cleanedUrl.pathname = "/widget/js";
                cleanedUrl.searchParams.set("siteId", siteId);
                const formattedWidgetUrl = cleanedUrl.toString();

                const data = {
                    userId: request.userId,
                    name: request.name,
                    widgetUrl: formattedWidgetUrl,
                    siteId: res.config.siteId,
                    secret: "*********************",
                    domains: request.domains || request.domain,
                    assistantIdLlm: request.assistantidllm || "assistantIdLlm",
                    assistantIdCall: request.assistantId || "assistantIdCall",
                    createdAt: moment().valueOf(),
                    updatedAt: moment().valueOf(),
                    index1: request.name.toLowerCase() + moment().valueOf(),
                };

                const wc = new WidgetConfig(data, true);
                await wc.save();

                RedisVentService.WidgetConfig.triggerInsert("widgetConfig", request.userId, wc.toObjectLowerCase());
                response.success = true;
                response.message = 'Widget configuration created successfully';
                callback(null, response);
            } else {
                response.success = false;
                response.message = res.message;
                callback(null, response);
            }
        } catch (error) {
            callback({
                code: 500,
                message: error.message || "Error retrieving widget configuration",
                status: status.INTERNAL
            });
        }
    },
    fetchWidgetConfig: async function ({ request }, callback) {
        const response = new FetchWidgetConfigResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });

            } else {
                let indexBasis = "createdAt";
                let orderBasis = "$lt";
                let regexValue = request.searchQuery;

                const pipeline = [];
                const match = {};

                // Add userId filter
                if (request.userId) {
                    match.userId = request.userId;
                }

                if (regexValue) {
                    match.index1 = { $regex: regexValue, $options: "i" }
                }

                const lastBasis = Number(request.lastBasis);
                if (lastBasis !== 0) {
                    match[indexBasis] = { [orderBasis]: lastBasis };
                }

                pipeline.push({ $match: match });
                pipeline.push({ $sort: { [indexBasis]: -1 } });
                pipeline.push({ $limit: 15 });

                const widgetConfig = await Core.getDB("widgetConfig", true).aggregate(pipeline).toArray();
                const returnData = {};
                if (widgetConfig && widgetConfig.length) {
                    returnData.data = widgetConfig.map((item) => ({ ...item, _id: item._id.toString() }));
                    returnData.lastBasis = widgetConfig[widgetConfig.length - 1][indexBasis];
                }
                if (returnData.data) {
                    returnData.data.forEach(element => {
                        const wc = new WidgetConfig(element, true);
                        response.WidgetConfigs.push(wc.toProto());
                    });
                }
                response.lastBasis = returnData.lastBasis || 0;
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Error fetching Widget Config",
                status: status.INTERNAL
            });
        }
    },
    updateWidgetConfig: async function ({ request }, callback) {
        const response = new WidgetConfigResponse();
        try {
            const { ServerInstance } = Adapter;

            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            const user = await Core.getDB("users", true).findOne({ _id: request.userId });
            if (!user) {
                return callback({
                    code: 401,
                    message: "User not found",
                    status: status.UNAUTHENTICATED
                });
            }

            if (user.widgetAccount === true) {
                await Server.WidgetManager.loginUser({
                    email: user.emails[0].address,
                    password: user._id
                })
            }

            const res = await Server.WidgetManager.updateWidgetConfig({
                siteId: request.siteId,
                name: request.name,
                domains: request.domains,
                assistantIdCall: request.assistantId,
                assistantIdLlm: request.assistantidllm
            });
            if (res.status === "success") {
                const data = {
                    _id: request.id,
                    name: request.name,
                    domains: request.domains,
                    widgetUrl: request.widgetUrl,
                    userId: request.userId,
                    siteId: res.config.siteId,
                    assistantIdCall: request.assistantIdCall,
                    assistantIdLlm: request.assistantIdLlm,
                    updatedAt: moment().valueOf(),
                }

                const wc = new WidgetConfig(data, true)
                const existDoc = await wc.validateDoc()
                if (existDoc) {
                    await wc.save();
                    const transformedData = wc.toObjectLowerCase();
                    RedisVentService.WidgetConfig.triggerUpdate("widgetConfig", request.userId, { ...transformedData, createdat: existDoc.createdAt });
                    response.success = true;
                    response.message = 'Widget configuration updated successfully';
                    callback(null, response);
                } else {
                    response.success = false;
                    response.message = 'Widget configuration validation failed';
                    callback(null, response);
                }



            } else {
                response.success = false;
                response.message = res.message || 'Failed to update widget configuration';
                callback(null, response);
            }
        } catch (error) {
            callback({
                code: 500,
                message: error.message || "Error updating widget configuration",
                status: status.INTERNAL
            });
        }
    }
};
