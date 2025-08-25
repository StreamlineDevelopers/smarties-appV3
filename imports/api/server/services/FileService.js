import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { status } from "@grpc/grpc-js";
import { tmq as file } from "../../common/static_codegen/tmq/fileUpload";
import { FileUpload } from "../classes/dbTemplates/FileUpload";

const { FetchFilesResponse, AllFiles } = file;


export default {
    fetchFiles: async function ({ request }, callback) {
        const response = new FetchFilesResponse();
        try {
            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!",
                    status: status.INTERNAL
                });
                return; // prevent further execution
            }

            // Configure pipeline options
            let indexBasis = "createdAt";
            let orderBasis = "$lt"; // pagination direction

            const pipeline = [];
            const match = {};

            // Match by userId
            if (request.userId) {
                match["meta.userId"] = request.userId;
            }

            // Match by createdAt if lastBasis is given
            const lastBasis = Number(request.lastBasis);
            if (lastBasis !== 0) {
                match[`meta.${indexBasis}`] = { [orderBasis]: lastBasis };
            }

            pipeline.push({ $match: match });
            pipeline.push({ $sort: { [`meta.${indexBasis}`]: -1 } });
            pipeline.push({ $limit: 10 });

            const files = await Core.getDB("mediaFiles", true).aggregate(pipeline).toArray();
            const returnData = {};

            if (files && files.length) {
                returnData.data = files.map((item) => ({ ...item, _id: item._id.toString() }));
                returnData.lastBasis = files[files.length - 1].meta[indexBasis];
            }
            if (returnData.data) {
                returnData.data.forEach(element => {
                    const files = new FileUpload(element, true);
                    response.files.push(files.toProto());
                });
            }

            response.lastBasis = returnData.lastBasis || 0;

            callback(null, response);
        } catch (error) {
            console.error("FetchFiles Error:", error);
            callback({
                code: 500,
                message: "Error fetching files",
                status: status.INTERNAL
            });
        }
    }
}