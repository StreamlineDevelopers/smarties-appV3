import { tmq as assistant } from "../../common/static_codegen/tmq/assistant";
import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import moment from "moment";
import RedisVentService from "../classes/events/RedisVentService";
import { AssistantData } from "../classes/dbTemplates/Assistant";

const { AssistantResponse, FetchAssistantResponse, FetchVoicesResponse, AllAssistants, AllVoices, Properties, Parameters, Functions, AssistantRequest, AssistantConfigResponse } = assistant;

export default {
    /**
    * @param {Object} call
    * @param {assistant.AssistantRequest} call.request
    * @param {function} callback 
    */
    createAssistant: async function ({ request }, callback) {
        const response = new AssistantResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            } else {
                /**
                 * @type {import("@assistant/assistant-client").Assistant}
                 */
                try {

                    let data = {
                        name: request.name,
                        voiceProvider: request.voiceProvider,
                        voice: request.voice,
                        modelProvider: request.modelProvider,
                        model: request.model,
                        userId: request.userId,
                        assistantId: request.assistantId,
                        assistantIdLlm: request.assistantIdLlm,
                        createdAt: moment().valueOf(),
                        updatedAt: moment().valueOf()
                    };
                    const ad = new AssistantData(data);
                    await ad.save();

                    RedisVentService.Assistant.triggerInsert("assistant", request.userId, ad.toObjectLowerCase());
                    response.success = true;
                    response.message = "Assistant created successfully";
                } catch (error) {
                    response.success = false;
                    response.message = "Failed to create assistant";
                }
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Server instance not initialized!",
                status: status.INTERNAL
            });
        }
    },
    fetchAssistant: async function ({ request }, callback) {
        const response = new FetchAssistantResponse();
        try {
            const query = request.query; // query: { userId: 'SCB96wEQnHNiGKGBb' }
            const search = {};

            if (request.query.keywords && request.query.keywords.trim()) {
                search.keywords = {
                    $regex: request.query.keywords.trim().toLowerCase(),
                    $options: 'i'  // case-insensitive
                };
            }

            delete request.query.keywords;
            let indexBasis = "createdAt";
            let orderBasis = "$lt";
            let regexValue = "";

            const pipeline = [];
            const match = { ...query, ...search }; // Include query parameters in match
            if (request.query.keywords === "") delete match.keywords;
            const lastBasis = Number(request.lastBasis);
            if (lastBasis !== 0) {
                match[indexBasis] = { [orderBasis]: lastBasis };
            }

            pipeline.push({ $match: match });
            pipeline.push({ $sort: { [indexBasis]: -1 } });
            pipeline.push({ $limit: 15 });

            const assistants = await Core.getDB("assistants", true).aggregate(pipeline, { allowDiskUse: true }).toArray();
            console.log(assistants)
            const returnData = {};
            if (assistants && assistants.length) {
                returnData.data = assistants.map((item) => ({ ...item, _id: item._id.toString() }));
                returnData.lastBasis = assistants[assistants.length - 1][indexBasis];
            }
            if (returnData.data) {
                returnData.data.forEach(element => {
                    const a = new AllAssistants();
                    a.name = element.name || "";
                    a.voiceProvider = element.voiceProvider || "";
                    a.voice = element.voice || "";
                    a.modelProvider = element.modelProvider || "";
                    a.model = element.model || "";
                    a.id = element._id.toString();
                    a.assistantId = element.assistantId || "";
                    a.assistantIdLlm = element.assistantIdLlm || "";

                    if (element.functions) {
                        element.functions.forEach(f => {
                            const fn = new Functions();
                            fn.name = f.name || "";
                            fn.async = f.async || false;
                            fn.description = f.description || "";
                            if (f.parameters) {
                                const params = new Parameters();
                                params.type = f.parameters.type || "";
                                if (f.parameters.required) {
                                    f.parameters.required.forEach(r => {
                                        params.required.push(r);
                                    });
                                }
                                if (f.parameters.properties) {
                                    Object.entries(f.parameters.properties).forEach(([key, def]) => {
                                        const p = new Properties();
                                        p.type = def.type;
                                        params.properties[key] = p;
                                    });
                                }
                                fn.parameters = params;
                            }
                            fn.serverUrl = f.serverUrl || "";
                            a.functions.push(fn);
                        });
                    }

                    a.kbId = element.kbId || "";
                    a.firstMessage = element.firstMessage || "";
                    a.systemPrompt = element.systemPrompt || "";
                    a.kbCollectionId = element.kbCollectionId || "";
                    a.createdAt = element.createdAt || 0;
                    a.updatedAt = element.updatedAt || 0;
                    if (element.toolIds) {
                        element.toolIds.forEach(tool => {
                            a.toolIds.push(tool);
                        });
                    }
                    response.assistants.push(a);
                });
            }
            response.lastBasis = returnData.lastBasis;
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Server instance not initialized!",
                status: status.INTERNAL
            });
        }
    },
    updateAssistant: async function ({ request }, callback) {
        const response = new AssistantResponse();
        const { ServerInstance } = Adapter;

        if (!ServerInstance) {
            return callback({
                code: 500,
                message: "Server instance not initialized!",
                status: status.INTERNAL
            });
        }

        try {
            if (!request.assistantIdLlm || request.assistantIdLlm === "") {
                delete request.assistantIdLlm;
            }

            request.updatedAt = moment().valueOf();

            await Core.getDB("assistants", true).updateOne(
                { assistantId: request.assistantId },
                { $set: request }
            );
            const ad = new AssistantData(request);
            RedisVentService.Assistant.triggerUpdate("assistant", request.userId, ad.toObjectLowerCase());

            response.success = true;
            response.message = "Assistant updated successfully";
            return callback(null, response);
        } catch (error) {
            console.error("updateAssistant error:", error);
            response.success = false;
            response.message = "Failed to update assistant";
            return callback(null, response); // Still return a valid response object to the client
        }
    },
    fetchAssistantConfig: async function ({ request }, callback) {
        const response = new AssistantConfigResponse();
        try {

            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            } else {
                response.apiKey = ServerInstance.Config.assistant.apiKey;
                response.serverUrl = ServerInstance.Config.assistant.serverUrl;
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Server instance not initialized!",
                status: status.INTERNAL
            });
        }
    },
    fetchVoices: async function ({ request }, callback) {
        const response = new FetchVoicesResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            } else {
                const res = await Core.getDB("voices", true).find(
                    { provider: request.voiceProvider }
                ).toArray();

                if (res) {
                    res.forEach(voice => {
                        const v = new AllVoices();
                        v.id = voice._id.toString();
                        v.name = voice.name || "";
                        v.voiceId = voice.voiceId || "";
                        v.provider = voice.provider || "";
                        response.voices.push(v);
                    });
                }
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Server instance not initialized!",
                status: status.INTERNAL
            });
        }
    }
};
