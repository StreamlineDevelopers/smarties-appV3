import { Adapter, Core, Logger, Utilities } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import { tmq as knowledge } from "../../common/static_codegen/tmq/knowledgeBase";
import moment from "moment";
import pdf from "pdf-parse";
import Server from "../Server";
import RedisVentService from "../classes/events/RedisVentService";

const { KnowledgeBaseResponse, FetchKnowledgeBaseResponse, AllKnowledgeBase, FetchKbUrlResponse, File } = knowledge;
import { KnowledgeBaseFile } from "../classes/dbTemplates/KnowledgeBase";

export default {
    createKnowledgeBase: async function ({ request }, callback) {
        const response = new KnowledgeBaseResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                return callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            }

            // Validate collection name
            if (!request.collectionName || request.collectionName.trim() === "") {
                return callback({
                    code: 400,
                    message: "Collection name is required and cannot be empty",
                    status: status.INVALID_ARGUMENT || 400
                });
            }

            let collectionName = request.collectionName;
            if (collectionName) {
                collectionName = collectionName.trim();
                collectionName = collectionName.replace(/[^a-zA-Z0-9]/g, '_');
            }

            const knowledgeBase = await Server.KBManager.KBClient.createCollection({ collectionName });

            if (!knowledgeBase) {
                return callback({
                    code: 500,
                    message: "Knowledgebase creation failed",
                    status: status.INTERNAL
                });
            }

            // Create your original data object
            const data = {
                collectionId: knowledgeBase.collection_id,
                collectionName: knowledgeBase.collection_name,
                userId: request.userId,
                createdAt: moment().valueOf(),
                updatedAt: moment().valueOf(),
                index1: knowledgeBase.collection_name.toLowerCase() + moment().valueOf(),
                files: []
            };

            // Insert into DB
            // const db = Core.getDB("knowledgeBase", true);
            // const result = await db.insertOne(data);

            // if (result.insertedId) {
            //     data._id = result.insertedId.toString();
            //     data.id = result.insertedId.toString();
            //     data.createdAt = data.createdAt.toString();
            //     data.updatedAt = data.updatedAt.toString();
            // }
            const kb = new KnowledgeBaseFile(data, true);
            await kb.save();

            // Transform for Redis (convert keys to lowercase, rename 'files' -> 'filesList')
            // const transformedData = {};

            // for (const key in data) {
            //     if (!data.hasOwnProperty(key)) continue;

            //     if (key === 'files') {
            //         transformedData['filesList'] = data[key]; // rename
            //     } else {
            //         transformedData[key.toLowerCase()] = data[key]; // lowercase everything else
            //     }
            // }

            // RedisVentService.KnowledgeBase.triggerUpsert("KnowledgeBase", request.userId, transformedData);
            RedisVentService.KnowledgeBase.triggerInsert("KnowledgeBase", request.userId, kb.toObjectLowerCase());

            response.success = true;
            response.message = "Knowledgebase created successfully";
            callback(null, response);

        } catch (error) {
            callback({
                code: 500,
                message: error.message || "Error creating knowledge base",
                status: status.INTERNAL
            });
        }
    },

    uploadKnowledgeBase: async function ({ request }, callback) {
        const response = new KnowledgeBaseResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            } else {

                let documents = [];

                const documentPromises = request.fileIdList.map(async (file) => {
                    const { data, contentDisposition } = await Server.UploadManager.downloadFile(file);

                    // Extract and decode filename
                    const match = contentDisposition.match(/filename="(.+?)"/);
                    const filename = match ? decodeURIComponent(match[1]) : 'unknown';

                    let text;
                    // Parse based on file extension
                    if (filename.endsWith('.txt')) {
                        text = data.toString(); // Plain text
                    } else if (filename.endsWith('.pdf')) {
                        const pdfData = await pdf(data);
                        text = pdfData.text;
                    } else {
                        throw new Error(`Unsupported file type for file: ${filename}`);
                    }

                    return {
                        id: file,
                        text,
                        metadata: {
                            userId: request.userId,
                            filename,
                        },
                    };
                });

                documents = await Promise.all(documentPromises);
                if (documents.length) {
                    const vector = await Server.KBManager.KBClient.insertDocuments({
                        collectionId: request.collectionId,
                        documents: documents,
                    });
                    if (vector) {
                        let knowledgeBaseFiles = [];

                        documents.forEach((file) => {
                            knowledgeBaseFiles.push({ name: file.metadata.filename, id: file.id });
                        });
                        RedisVentService.KnowledgeBase.triggerUpdate("KnowledgeBase", request.userId, { collectionid: request.collectionId, knowledgeBaseFiles });

                        await Core.getDB("knowledgeBase", true).updateOne({ collectionId: request.collectionId, userId: request.userId }, { $addToSet: { files: { $each: knowledgeBaseFiles } } });
                    }
                }
                response.success = true;
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Error uploading knowledge base",
                status: status.INTERNAL
            });
        }
    },
    fetchKnowledgeBase: async function ({ request }, callback) {
        // #[x]: @szyrelle create template for knowledge base collection to handle validation and sanitization
        const response = new FetchKnowledgeBaseResponse();
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

                const knowledgeBase = await Core.getDB("knowledgeBase", true).aggregate(pipeline).toArray();
                const returnData = {};
                if (knowledgeBase && knowledgeBase.length) {
                    returnData.data = knowledgeBase.map((item) => ({ ...item, _id: item._id.toString() }));

                    returnData.lastBasis = knowledgeBase[knowledgeBase.length - 1][indexBasis];
                }
                if (returnData.data) {
                    returnData.data.forEach(element => {
                        if (element.collectionId) {
                            const kb = new KnowledgeBaseFile(element, true);
                            response.knowledgeBases.push(kb.toProto());
                        }
                    });
                }
                response.lastBasis = returnData.lastBasis || 0;
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Error fetching knowledge base",
                status: status.INTERNAL
            });
        }
    },
    generateUrl: async function ({ request }, callback) {
        const response = new FetchKbUrlResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
            } else {
                const url = await Server.KBManager.generateUrl(request.collectionId);
                response.url = url;
                response.success = true;
            }
            callback(null, response);
        } catch (error) {
            callback({
                code: 500,
                message: "Error generating url",
                status: status.INTERNAL
            });
        }
    }
};