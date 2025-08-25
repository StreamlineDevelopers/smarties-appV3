import core from "@tmq-dev-ph/tmq-dev-core-client";
import Client from "../../Client";
import { UploadManager } from "@tmq-justin/uploadmanager-client";
import fileService from "../../../common/static_codegen/tmq/fileUpload_pb";
import { Watcher2 } from "../../Watcher2";
import RedisventService from "../../redisvent/RedisventService";
const { Adapter, Logger } = core;

Adapter.Meteor = Meteor;
Adapter.Accounts = Accounts;

class FileUploadWatcher extends Watcher2 {
    #data;
    #lastBasis;
    #processes = {};
    constructor(parent) {
        super(parent);
        this.uploadManager = new UploadManager(
            Client.Settings.uploadConfig
        );
        RedisventService.Files.prepareCollection("files");
        this.#data = RedisventService.Files.getCollection("files");
    }

    get UserId() {
        return Accounts.userId();
    }

    get Config() {
        return this.config;
    }
    /**
     * @returns {Mongo.Collection}
     */
    get DB() {
        return this.#data;
    }

    get Files() {
        return this.DB.find({}).fetch() || [];
    }


    async upload(files) {
        await this.uploadManager.uploadFile(files, {
            description: "File description",
            isPublic: true,
            userId: "sampleUserId",
        }).then((response) => {
            console.log("File uploaded successfully", response);
        });
    }

    async download(file) {
        const { data, contentDisposition } = await this.uploadManager.downloadFile(file._id);
        const newFiles = new Blob([data], { type: contentDisposition });
    }

    delete(fileId) {
        this.uploadManager.deleteFile(fileId);
    }

    async fetchFiles({ isLoadmore = false } = {}) {
        try {
            if (!Accounts.userId()) {
                return [];
            }

            if (!isLoadmore) {
                this.#data.remove({});
                this.#lastBasis = null;
            }
            if (this.#processes["fetchUploadFiles"]) return;
            this.#processes["fetchUploadFiles"] = true;
            const req = new fileService.FetchFilesRequest();
            req.setUserid(Accounts.userId());
            if (this.#lastBasis) {
                req.setLastbasis(this.#lastBasis);
            }
            return this.Parent.callFunc(0xadb13723, req).then(({ result }) => {
                const deserialized = fileService.FetchFilesResponse.deserializeBinary(result);
                const res = deserialized.toObject();
                const data = res.filesList;
                const lastBasis = res.lastbasis;
                this.#lastBasis = lastBasis;
                if (data && data.length) {
                    data.forEach(item => {
                        this.DB.upsert({ id: item.id }, { $set: item });
                    });
                }
                this.setValue("isLoadingFiles", false);
                this.#processes["fetchUploadFiles"] = false;
            });
        } catch (error) {
            toast.error('Failed to fetch files', {
                style: TOAST_STYLE.ERROR
            });
        }
    }

}

export default new FileUploadWatcher(Client);