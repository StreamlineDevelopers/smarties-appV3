import { Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { KBClient } from "@tmq-shawn/kb-client";

export class KBManager {
    #kbClient;
    #host;
    constructor(config = {}, host = "http://localhost:3000") {
        this.#kbClient = new KBClient(config);
        this.#host = host;
    }
    /**
     * @returns {KBClient}
     */
    get KBClient() {
        return this.#kbClient;
    }
    generateUrl(collectionId) {
        return `${this.#host}/api/v2/search?collectionId=${collectionId}`;
    }
    // generateUrl(collectionId) {
    //     return `${this.#host}/api/v1/search?collectionId=${collectionId}`;
    // }
    parseVectorResponse(results = []) {
        if (!Array.isArray(results)) {
            return { documents: [], };
        }
        const retval = { documents: [], };
        if (results && results.length > 0) {
            const documents = results.map(result => {
                let similarity = parseFloat(result.score?.toFixed(2) || 1);
                if (isNaN(similarity)) {
                    similarity = 1;
                }
                return { content: result.text, similarity };
            });
            if (documents.length > 0) {
                retval.documents = documents;
            }
        }
        return retval;
    }
    parseMessage(request) {
        const message = request.body.message;
        const query = request.query;
        const parsed = {
            timestamp: message?.timestamp,
            type: message?.type,
            messages: message?.messages,
            messagesOpenAIFormatted: message?.messagesOpenAIFormatted,
            artifact: message?.artifact,
            call: message?.call,
            assistant: message?.assistant,
            collectionId: query?.collectionId || ""
        };
        const userMessages = parsed.messages.filter(message => message.role === "user");
        // combine last 2 user messages
        const lastUserMessage = userMessages[userMessages.length - 1]?.message || "";
        const secondLastUserMessage = userMessages[userMessages.length - 2]?.message || "";
        const question = [secondLastUserMessage, lastUserMessage].join(" ");
        return {
            knowledgeBaseId: parsed?.assistant?.model?.knowledgeBaseId || "",
            question: lastUserMessage,
            collectionId: parsed?.collectionId || ""
        };
    }
    async parseKbRequest(req, res, next) {
        try {
            const { knowledgeBaseId, question, collectionId } = this.parseMessage(req);
            Logger.showDebug("Knowledge base id: %s, question: %s, collectionId: %s", knowledgeBaseId, question, collectionId);
            let kbr = await this.KBClient.searchWithPolling({
                collectionId: collectionId,
                query: question,
                topK: 3,
                pollingDelay: 3000,
                searchType: "hybrid"
            });
            if (kbr.data) kbr = kbr.data;
            const response = this.parseVectorResponse(kbr || []);
            Logger.showDebug("Response: %s", response);
            res.status(200).json(response);
        } catch (error) {
            Logger.showError("Error processing request: %s", error.message || error);
            res.status(500).send("Error processing request");
        }
    }
    parseMessageV2(request) {
        const message = request.body.message;
        const query = request.query;

        // Extract the query and toolCallId from tool calls
        let question = "";
        let toolCallId = "";

        if (message?.toolCalls && Array.isArray(message.toolCalls)) {
            const firstToolCall = message.toolCalls[0];
            if (firstToolCall?.function?.arguments?.query) {
                question = firstToolCall.function.arguments.query;
                toolCallId = firstToolCall.id;
            }
        }

        // If no query found in toolCalls, try toolCallList
        if (!question && message?.toolCallList && Array.isArray(message.toolCallList)) {
            const firstToolCall = message.toolCallList[0];
            if (firstToolCall?.function?.arguments?.query) {
                question = firstToolCall.function.arguments.query;
                toolCallId = firstToolCall.id;
            }
        }

        // If still no query found, try toolWithToolCallList
        if (!question && message?.toolWithToolCallList && Array.isArray(message.toolWithToolCallList)) {
            const firstToolCall = message.toolWithToolCallList[0];
            if (firstToolCall?.toolCall?.function?.arguments?.query) {
                question = firstToolCall.toolCall.function.arguments.query;
                toolCallId = firstToolCall.toolCall.id;
            }
        }

        return {
            knowledgeBaseId: message?.assistant?.model?.knowledgeBaseId || "",
            question: question,
            collectionId: query?.collectionId || "",
            toolCallId: toolCallId
        };
    }

    async parseKbRequestV2(req, res, next) {
        try {
            const { knowledgeBaseId, question, collectionId, toolCallId } = this.parseMessageV2(req);
            Logger.showDebug("V2 - Knowledge base id: %s, question: %s, collectionId: %s, toolCallId: %s", knowledgeBaseId, question, collectionId, toolCallId);

            if (!question) {
                Logger.showError("No query found in request");
                res.status(400).json({
                    results: [{
                        toolCallId: toolCallId || "",
                        result: { error: "No query found in request", documents: [] }
                    }]
                });
                return;
            }

            if (!collectionId) {
                Logger.showError("No collectionId found in request");
                res.status(400).json({
                    results: [{
                        toolCallId: toolCallId || "",
                        result: { error: "No collectionId found in request", documents: [] }
                    }]
                });
                return;
            }

            let kbr = await this.KBClient.searchWithPolling({
                collectionId: collectionId,
                query: question,
                topK: 3,
                pollingDelay: 3000,
                searchType: "hybrid"
            });

            if (kbr.data) kbr = kbr.data;
            const vectorResponse = this.parseVectorResponse(kbr || []);
            Logger.showDebug("V2 Response: %s", JSON.stringify(vectorResponse));

            const response = {
                results: [{
                    toolCallId: toolCallId || "",
                    result: vectorResponse
                }]
            };

            res.status(200).json(response);
        } catch (error) {
            Logger.showError("Error processing V2 request: %s", error.message || error);
            res.status(500).json({
                results: [{
                    toolCallId: toolCallId || "",
                    result: { error: "Error processing request", documents: [] }
                }]
            });
        }
    }
}
