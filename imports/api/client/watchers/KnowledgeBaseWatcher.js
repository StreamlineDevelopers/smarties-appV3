import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import knowledgeBaseService from "../../common/static_codegen/tmq/knowledgeBase_pb";
import { KNOWLEDGEBASE, TOAST_STYLE } from "../../common/const";
import { Mongo } from "meteor/mongo";
import { toast } from "sonner";
import RedisventService from "../redisvent/RedisventService";


const { Adapter, Logger } = core;

Adapter.Meteor = Meteor;
Adapter.Accounts = Accounts;
Adapter.Mongo = Mongo;

class KnowledgeBaseWatcher extends Watcher2 {
    #data;
    #lastBasis;
    #processes = {};
    #listen = null
    constructor(parent) {
        super(parent);
        RedisventService.KnowledgeBase.prepareCollection("KnowledgeBase");
        this.#data = RedisventService.KnowledgeBase.getCollection("KnowledgeBase");
    }

    get DB() {
        return this.#data;
    }

    get KnowledgeBases() {
        return this.DB.find({}, { sort: { createdat: -1 } }).fetch() || [];
    }

    async handlesubmitNewKnowledgeBase(form) {
        const formData = new FormData(form);
        let name = formData.get('knowledge-base-name');
        if (name == "") return this.setValue("kbError", true);
        this.createKnowledgeBase(name);
        this.setValue("kbError", false);
    }

    async createKnowledgeBase(name) { //#[x]: @szyrelle add loading state while creating knowledge base
        try {
            this.setValue(KNOWLEDGEBASE.ISLOADING, true);
            // #[x]: @szyrelle add check if knowledge base request is already in progress
            if (this.#processes["createKnowledgeBase"]) return;
            this.#processes["createKnowledgeBase"] = true;
            const req = new knowledgeBaseService.createKnowledgeBaseRequest();
            req.setUserid(Accounts.userId());
            req.setCollectionname(name);
            return this.Parent.callFunc(0x703f5f0, req).then(({ result }) => {
                const deserialized = knowledgeBaseService.KnowledgeBaseResponse.deserializeBinary(result);
                if (deserialized.getSuccess()) {
                    toast.success('Knowledge base created successfully', {
                        style: TOAST_STYLE.SUCCESS
                    });
                }
            }).finally(() => {
                this.#processes["createKnowledgeBase"] = false;
                this.setValue(KNOWLEDGEBASE.ISLOADING, false);
            });
        } catch (error) {
            toast.error('Failed to create knowledge base', {
                style: TOAST_STYLE.ERROR
            });
        }
    }

    async fetchKnowledgeBase({ isLoadmore = false, searchQuery = null } = {}) { // #[x]: @szyrelle add loading state while fetching knowledge base
        try {
            if (!Accounts.userId()) {
                return [];
            }

            if (!isLoadmore) {
                this.#data.remove({});
                this.#lastBasis = null;
            }

            if (this.#processes["fetchKnowledgeBase"]) return;
            this.#processes["fetchKnowledgeBase"] = true;
            const req = new knowledgeBaseService.FetchKnowledgeBaseRequest();
            req.setUserid(Accounts.userId());

            if (isLoadmore && this.#lastBasis) {
                req.setLastbasis(this.#lastBasis);
            }

            if (searchQuery) {
                req.setSearchquery(searchQuery);
            }

            const { result } = await this.Parent.callFunc(0xc2261c79, req);
            const deserialized = knowledgeBaseService.FetchKnowledgeBaseResponse.deserializeBinary(result);
            const res = deserialized.toObject();
            const data = res.knowledgebasesList;
            const lastBasis = res.lastbasis;

            this.#lastBasis = lastBasis;
            if (data && data.length) {
                data.forEach(item => {
                    this.DB.upsert({ id: item.id }, { $set: item });
                });
            }

            this.setValue(KNOWLEDGEBASE.ISLOADING, false);
            this.#processes["fetchKnowledgeBase"] = false;
            return this.KnowledgeBases;
        } catch (error) {
            this.setValue(KNOWLEDGEBASE.ISLOADING, false);
            this.#processes["fetchKnowledgeBase"] = false;
            toast.error('Failed to fetch knowledge base', {
                style: TOAST_STYLE.ERROR
            });
        }
    }

    async uploadKnowledgeBase(files) {
        try {
            this.setValue("uploadisLoading", true);
            if (this.#processes["uploadKnowledgeBase"]) return;
            this.#processes["uploadKnowledgeBase"] = true;
            const req = new knowledgeBaseService.KnowledgeBaseUploadRequest();
            const selected = this.getValue(KNOWLEDGEBASE.CURRENTSELECTED);
            if (!selected || !selected.collectionid) {
                toast.error("No knowledge base selected", { style: TOAST_STYLE.ERROR });
                return;
            }
            req.setCollectionid(selected.collectionid);
            req.setUserid(Accounts.userId());
            req.setFileidlistList(files);
            return this.Parent.callFunc(0x27971cae, req).then(({ result }) => {
                const deserialized = knowledgeBaseService.KnowledgeBaseResponse.deserializeBinary(result);
                if (deserialized.getSuccess()) {
                    toast.success('Knowledge base uploaded successfully', {
                        style: TOAST_STYLE.SUCCESS
                    });
                }
            }).finally(() => {
                this.setValue("uploadisLoading", false);
                this.#processes["uploadKnowledgeBase"] = false;
                this.setValue(KNOWLEDGEBASE.CURRENTSELECTED, null);
            });
        } catch (error) {
            toast.error('Failed to upload knowledge base', {
                style: TOAST_STYLE.ERROR
            });
        }
    }
    assignknowledgeBasetoAssistant() { }

    listen() {
        if (!this.#listen) {
            this.#listen = RedisventService.KnowledgeBase.listen("KnowledgeBase", Accounts.userId(), ({ event, data }) => {
                switch (event) {
                    case "remove":
                        this.DB.remove({ id: data._id });
                        break;

                    case "update":
                        const updateData = data.data;
                        if (Array.isArray(updateData.knowledgeBaseFiles)) {
                            updateData.knowledgeBaseFiles.forEach(file => {
                                this.DB.update(
                                    { collectionid: updateData.collectionid },
                                    { $push: { filesList: file } }
                                );
                            });
                        }
                        break;
                    case "upsert":
                        const res = data.data;
                        delete res._id;
                        const update = {};
                        for (const key in res) {
                            update[key.toLowerCase()] = res[key];
                        }
                        this.DB.upsert({ id: res.id }, { $set: update });
                        break;
                    default:
                        Logger.showLog("Unknown event", event);
                        break;
                }
                this.activateWatch();
            });
        }
    }

    removeListener() {
        RedisventService.KnowledgeBase.remove(this.#listen);
    }
}

export default new KnowledgeBaseWatcher(Client);