import { Adapter, Core, Logger, Utilities, MongoId } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as knowledge } from "../../../common/static_codegen/tmq/knowledgeBase";
const { AllKnowledgeBase, File } = knowledge;

export class KnowledgeBaseFile {
    #collectionId = "";
    #userId = "";
    #collectionName = "";
    #id = "";
    #createdAt = 0;
    #updatedAt = 0;
    #files = [];
    #raw = false;
    constructor(doc, raw = false) {
        this.#parseDoc(doc);
        this.#raw = raw;
    }
    #parseDoc = (doc) => {
        if (doc) {
            if (doc.collectionId) this.#collectionId = doc.collectionId;
            if (doc.userId) this.#userId = doc.userId;
            if (doc.collectionName) this.#collectionName = doc.collectionName;
            if (doc._id) this.#id = doc._id;
            if (doc.createdAt) this.#createdAt = parseInt(doc.createdAt);
            if (doc.updatedAt) this.#updatedAt = parseInt(doc.updatedAt);
            if (doc.files) this.#files = doc.files;
        }
    };
    toObject() {
        const retval = {
            collectionId: this.#collectionId,
            userId: this.#userId,
            collectionName: this.#collectionName,
            createdAt: this.#createdAt,
            updatedAt: this.#updatedAt,
            files: this.#files,
        };
        if (this.#id) retval.id = Utilities.toObjectId(this.#id, this.#raw);
        return retval;
    }
    toProto() {
        const parsed = new AllKnowledgeBase();
        if (this.#collectionId) parsed.collectionId = this.#collectionId;
        if (this.#userId) parsed.userId = this.#userId;
        if (this.#collectionName) parsed.collectionName = this.#collectionName;
        if (this.#id) parsed.id = Utilities.toObjectId(this.#id, this.#raw);
        if (this.#createdAt) parsed.createdAt = this.#createdAt;
        if (this.#updatedAt) parsed.updatedAt = this.#updatedAt;
        if (this.#files && this.#files.length > 0) {
            this.#files.forEach(file => {
                const fileProto = new File();
                if (file.id) fileProto.id = file.id;
                if (file.name) fileProto.name = file.name;
                parsed.files.push(fileProto);
            });
        }
        return parsed;
    }
    check() {
        if (!this.#collectionId) {
            return Promise.reject(new Error("Collection ID is required"));
        }
        if (!this.#userId) {
            return Promise.reject(new Error("User ID is required"));
        }
        if (!this.#collectionName) {
            return Promise.reject(new Error("Collection name is required"));
        }
        return Promise.resolve();
    }
    async save() {
        await this.check();
        const db = Core.getDB("knowledgeBase", this.#raw);
        console.log(doc);
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