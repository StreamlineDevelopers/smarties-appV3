import { Adapter, Core, Logger, Utilities, MongoId } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as assistant } from "../../../common/static_codegen/tmq/assistant";
const { AllAssistants } = assistant;

export class AssistantData {
    #id = "";
    #userId = "";
    #createdAt = 0;
    #updatedAt = 0;
    #name = "";
    #voiceProvider = "";
    #voice = "";
    #modelProvider = "";
    #model = "";
    #assistantId = "";
    #assistantIdLlm = "";
    #function = [];
    #kbId = "";
    #firstMessage = "";
    #systemPrompt = "";
    #kbCollectionId = "";
    #toolIds = [];
    #raw = false;
    constructor(doc, raw = false) {
        this.#parseDoc(doc);
        this.#raw = raw;
    }
    #parseDoc = (doc) => {
        if (doc) {
            if (doc.userId) this.#userId = doc.userId;
            if (doc._id) this.#id = doc._id;
            if (doc.createdAt) this.#createdAt = parseInt(doc.createdAt);
            if (doc.updatedAt) this.#updatedAt = parseInt(doc.updatedAt);
            if (doc.name) this.#name = doc.name;
            if (doc.voiceProvider) this.#voiceProvider = doc.voiceProvider;
            if (doc.voice) this.#voice = doc.voice;
            if (doc.modelProvider) this.#modelProvider = doc.modelProvider;
            if (doc.model) this.#model = doc.model;
            if (doc.assistantId) this.#assistantId = doc.assistantId;
            if (doc.assistantIdLlm) this.#assistantIdLlm = doc.assistantIdLlm;
            if (doc.function && Array.isArray(doc.function)) this.#function = doc.function;
            if (doc.kbId) this.#kbId = doc.kbId;
            if (doc.firstMessage) this.#firstMessage = doc.firstMessage;
            if (doc.systemPrompt) this.#systemPrompt = doc.systemPrompt;
            if (doc.kbCollectionId) this.#kbCollectionId = doc.kbCollectionId;
            if (doc.toolIds && Array.isArray(doc.toolIds)) this.#toolIds = doc.toolIds;
        }
    };
    toObject() {
        const retval = {
            userId: this.#userId,
            createdAt: this.#createdAt,
            updatedAt: this.#updatedAt,
            name: this.#name,
            voiceProvider: this.#voiceProvider,
            voice: this.#voice,
            modelProvider: this.#modelProvider,
            model: this.#model,
            assistantId: this.#assistantId,
            assistantIdLlm: this.#assistantIdLlm,
            function: this.#function,
            kbId: this.#kbId,
            firstMessage: this.#firstMessage,
            systemPrompt: this.#systemPrompt,
            kbCollectionId: this.#kbCollectionId,
            toolIds: this.#toolIds,
        };
        if (this.#id) retval.id = Utilities.toObjectId(this.#id, this.#raw);
        return retval;
    }
    toProto() {
        const parsed = new AllAssistants();
        if (this.#userId) parsed.userId = this.#userId;
        if (this.#id) parsed.id = Utilities.toObjectId(this.#id, this.#raw);
        if (this.#createdAt) parsed.createdAt = this.#createdAt;
        if (this.#updatedAt) parsed.updatedAt = this.#updatedAt;
        if (this.#name) parsed.name = this.#name;
        if (this.#voiceProvider) parsed.voiceProvider = this.#voiceProvider;
        if (this.#voice) parsed.voice = this.#voice;
        if (this.#modelProvider) parsed.modelProvider = this.#modelProvider;
        if (this.#model) parsed.model = this.#model;
        if (this.#assistantId) parsed.assistantId = this.#assistantId;
        if (this.#assistantIdLlm) parsed.assistantIdLlm = this.#assistantIdLlm;
        if (this.#function && this.#function.length > 0) {
            this.#function.forEach(func => {
                const funcProto = new Function();
                if (func.name) funcProto.name = func.name;
                if (func.description) funcProto.description = func.description;
                if (func.parameters) funcProto.parameters = func.parameters;
                parsed.function.push(funcProto);
            });
        }
        if (this.#kbId) parsed.kbId = this.#kbId;
        if (this.#firstMessage) parsed.firstMessage = this.#firstMessage;
        if (this.#systemPrompt) parsed.systemPrompt = this.#systemPrompt;
        if (this.#kbCollectionId) parsed.kbCollectionId = this.#kbCollectionId;
        if (this.#toolIds && this.#toolIds.length > 0) {
            this.#toolIds.forEach(toolId => {
                parsed.toolIds.push(Utilities.toObjectId(toolId, this.#raw));
            });
        }
        return parsed;
    }

    toObjectLowerCase() {
        const obj = this.toObject();
        const lowerCaseObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let newKey = key.toLowerCase();
                if (Array.isArray(obj[key])) {
                    newKey += 'List';
                }
                lowerCaseObj[newKey] = obj[key];
            }
        }
        return lowerCaseObj;
    }

    check() {
        if (!this.#userId) {
            return Promise.reject(new Error("User ID is required"));
        }
        if (!this.#name) {
            return Promise.reject(new Error("Assistant name is required"));
        }
        if (!this.#voiceProvider) {
            return Promise.reject(new Error("Voice provider is required"));
        }
        if (!this.#modelProvider) {
            return Promise.reject(new Error("Model provider is required"));
        }
        if (!this.#assistantId) {
            return Promise.reject(new Error("Assistant ID is required"));
        }
        if (!this.#assistantIdLlm) {
            return Promise.reject(new Error("Assistant ID for LLM is required"));
        }
        if (!this.#voice) {
            return Promise.reject(new Error("Voice is required"));
        }
        if (!this.#model) {
            return Promise.reject(new Error("Model is required"));
        }
        return Promise.resolve();
    }
    async save() {
        await this.check();
        const db = Core.getDB("assistants", true);
        if (db) {
            const doc = this.toObject();
            if (this.#id)
                return db.updateOne({ _id: Utilities.toObjectId(this.#id, this.#raw) }, { $set: doc }, { upsert: true });
            else {
                delete doc._id;
                return db.insertOne(doc).then((res) => {
                    this.#id = res.insertedId.toString();
                    return res;
                });
            }
        }
        return Promise.reject(new Error("Database not found"));
    }
};