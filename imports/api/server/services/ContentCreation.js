import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import { tmq as content } from "../../common/static_codegen/tmq/ContentCreation";
import moment from "moment";
import RedisVentService from "../classes/events/RedisVentService";
import ContentGeneration from "../classes/journey/ContentGeneration";
import Server from "../Server";

const { 
    ContentResponse, 
    FetchContentResponse, 
    ImageSearchResponse,
    ContentAnalysisResponse,
    BatchGenerationResponse,
    HealthCheckResponse,
    GenerateResponseRequest,
    GenerateResponseResponse
} = content;

export default {
    /**
     * Generate single content
     * @param {Object} call
     * @param {content.ContentRequest} call.request
     * @param {function} callback 
     */
    generateContent: async function ({ request }, callback) {
        const response = new ContentResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            // Validate required fields
            if (!request.format || !request.topic) {
                return callback({
                    code: 400,
                    message: "Format and topic are required",
                    status: status.INVALID_ARGUMENT
                });
            }

            const config = {
                baseURL: "http://localhost:3003",
                timeout: 30000,
                ...ServerInstance.Config.contentCreation
            }

            // Initialize ContentGeneration class
            const contentGen = new ContentGeneration(config);
            
            const contentData = {
                format: request.format,
                topic: request.topic,
                currentTrends: request.currentTrends || [],
                options: {
                    tone: request.options.tone,
                    targetAudience: request.options.targetAudience,
                    length: request.options.length
                },
                userId: request.userId
            };

            const result = await contentGen.generateContent(contentData);
            console.log(result);

            if (result.status === "success") {
                response.success = true;
                response.message = "Content generated successfully";
                // Convert content and metadata to Uint8Array (bytes) as expected by protobuf
                response.content = new TextEncoder().encode(JSON.stringify(result.content));
                response.metadata = new TextEncoder().encode(JSON.stringify(result.metadata));
                response.id = result.id;
            } else {
                response.success = false;
                response.message = "Failed to generate content";
            }

            callback(null, response);
        } catch (error) {
            console.log(error);
            callback({
                code: 500,
                message: error.message || "Error generating content",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Search for images
     * @param {Object} call
     * @param {content.ImageSearchRequest} call.request
     * @param {function} callback 
     */
    searchImages: async function ({ request }, callback) {
        const response = new ImageSearchResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            if (!request.query) {
                return callback({
                    code: 400,
                    message: "Search query is required",
                    status: status.INVALID_ARGUMENT
                });
            }

            const config = {
                baseURL: "http://localhost:3003",
                ...ServerInstance.Config.contentCreation
            }

            const contentGen = new ContentGeneration(config);
            
            // if (request.apiKey) {
            //     contentGen.setApiKey(request.apiKey);
            // }

            const searchData = {
                query: request.query,
                options: {
                    perPage: request.options.perPage || 10,
                    orientation: request.options.orientation,
                    size: request.options.size,
                    color: request.options.color
                },
                userId: request.userId
            };

            console.log(searchData);

            const result = await contentGen.searchImages(searchData);

            if (result.status === "success") {
                response.success = true;
                response.message = "Image search completed";
                // Convert JSON data to Uint8Array (bytes) as expected by protobuf
                const jsonString = JSON.stringify(result.data.photos);
                response.data = new TextEncoder().encode(jsonString);
                response.totalResults = result.totalResults;
            } else {
                response.success = false;
                response.message = "Failed to search images";
            }

            callback(null, response);
        } catch (error) {
            console.log(error);
            callback({
                code: 500,
                message: error.message || "Error searching images",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Analyze content
     * @param {Object} call
     * @param {content.ContentAnalysisRequest} call.request
     * @param {function} callback 
     */
    analyzeContent: async function ({ request }, callback) {
        const response = new ContentAnalysisResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            if (!request.content || !request.criteria) {
                return callback({
                    code: 400,
                    message: "Content and criteria are required",
                    status: status.INVALID_ARGUMENT
                });
            }

            const config = {
                baseURL: "http://localhost:3003",
                timeout: 60000,
                ...ServerInstance.Config.contentCreation
            }

            const contentGen = new ContentGeneration(config);
            
            const analysisData = {
                content: request.content,
                criteria: request.criteria,
                targetAudience: request.targetAudience,
                contentType: request.contentType,
                keywords: request.keywords || [],
                model: request.model,
                userId: request.userId
            };

            const result = await contentGen.analyzeContent(analysisData);

            console.log(result);
            
            if (result.status === "success") {
                response.success = true;
                response.message = "Content analysis completed";
                // Convert analysis to Uint8Array (bytes) as expected by protobuf
                response.analysis = new TextEncoder().encode(JSON.stringify(result.analysis));
                response.id = result.id;
            } else {
                response.success = false;
                response.message = "Failed to analyze content";
            }

            callback(null, response);
        } catch (error) {
            console.log(error);
            callback({
                code: 500,
                message: error.message || "Error analyzing content",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Perform quick analysis
     * @param {Object} call
     * @param {content.QuickAnalysisRequest} call.request
     * @param {function} callback 
     */
    quickAnalysis: async function ({ request }, callback) {
        const response = new ContentAnalysisResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            if (!request.content) {
                return callback({
                    code: 400,
                    message: "Content is required",
                    status: status.INVALID_ARGUMENT
                });
            }

            const contentGen = new ContentGeneration(ServerInstance.Config);
            
            if (request.apiKey) {
                contentGen.setApiKey(request.apiKey);
            }

            const quickData = {
                content: request.content,
                targetAudience: request.targetAudience,
                contentType: request.contentType,
                userId: request.userId
            };

            const result = await contentGen.quickAnalysis(quickData);
            
            if (result.status === "success") {
                response.success = true;
                response.message = "Quick analysis completed";
                // Convert analysis to Uint8Array (bytes) as expected by protobuf
                response.analysis = new TextEncoder().encode(JSON.stringify(result.analysis));
                response.analysisType = result.analysisType;
                response.criteriaUsed = result.criteriaUsed;
                response.id = result.id;
            } else {
                response.success = false;
                response.message = "Failed to perform quick analysis";
            }

            callback(null, response);
        } catch (error) {
            Logger.error("Error performing quick analysis:", error);
            callback({
                code: 500,
                message: error.message || "Error performing quick analysis",
                status: status.INTERNAL
            });
        }
    },

    /**
     * Generate response using webhooks
     * @param {Object} call
     * @param {content.GenerateResponseRequest} call.request
     * @param {function} callback 
     */
    generateResponse: async function ({ request }, callback) {
        const response = new GenerateResponseResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            // Validate required fields
            if (!request.accountId || !request.customerId) {
                return callback({
                    code: 400,
                    message: "Account ID and Customer ID are required",
                    status: status.INVALID_ARGUMENT
                });
            }

            // Initialize ContentGeneration class
            const contentGen = new ContentGeneration(ServerInstance.Config);
            
            // Set API key if provided
            if (request.apiKey) {
                contentGen.setApiKey(request.apiKey);
            }

            const result = await contentGen.generateResponse(request.accountId, request.customerId);
            
            if (result.status === "success") {
                response.success = true;
                response.message = "Response generated successfully";
                // Convert response and analysis to Uint8Array (bytes) as expected by protobuf
                response.response = new TextEncoder().encode(JSON.stringify(result.response));
                response.analysis = new TextEncoder().encode(JSON.stringify(result.analysis));
            } else {
                response.success = false;
                response.message = "Failed to generate response";
            }

            callback(null, response);
        } catch (error) {
            Logger.error("Error generating response:", error);
            callback({
                code: 500,
                message: error.message || "Error generating response",
                status: status.INTERNAL
            });
        }
    },
};
