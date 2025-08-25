import { Mongo } from 'meteor/mongo';
import { toObjectId } from '../db/helper.js';

export const SessionsCollection = new Mongo.Collection('sessions', {
    idGeneration: 'MONGO',
});

export default class Sessions {
    constructor(data = {}) {
        this._id = data._id ?? null;
        this.externalSessionId = data.externalSessionId ?? null;
        this.businessId = data.businessId ?? null;
        this.channelId = data.channelId ?? null;
        this.consumerId = data.consumerId ?? null;
        this.inboxId = data.inboxId ?? null;
        this.status = data.status ?? 'active';
        this.startedAt = data.startedAt ?? Date.now();
        this.lastSeenAt = data.lastSeenAt ?? Date.now();
        this.endedAt = data.endedAt ?? null;
        this.durationMs = data.durationMs ?? null;
        this.pageCount = data.pageCount ?? 0;
        this.utm = data.utm ?? null;
        this.referrer = data.referrer ?? null;
        this.device = data.device ?? null;
        this.userAgent = data.userAgent ?? null;
        this.attributes = Array.isArray(data.attributes) ? data.attributes : [];
        this.createdAt = data.createdAt ?? Date.now();
    }

    async save() {
        const doc = {};

        // always include timestamps
        if (this.startedAt != null) doc.startedAt = this.startedAt;
        if (this.lastSeenAt != null) doc.lastSeenAt = this.lastSeenAt;
        if (this.createdAt != null) doc.createdAt = this.createdAt;

        // strong references
        if (this.externalSessionId != null) doc.externalSessionId = this.externalSessionId;
        if (this.businessId != null) doc.businessId = toObjectId(this.businessId);
        if (this.channelId != null) doc.channelId = toObjectId(this.channelId);
        if (this.consumerId != null) doc.consumerId = toObjectId(this.consumerId);
        if (this.inboxId != null) doc.inboxId = toObjectId(this.inboxId);

        // scalars
        if (this.status != null) doc.status = this.status;
        if (this.endedAt != null) doc.endedAt = this.endedAt;
        if (this.durationMs != null) doc.durationMs = this.durationMs;
        if (this.pageCount != null) doc.pageCount = this.pageCount;
        if (this.referrer != null) doc.referrer = this.referrer;
        if (this.device != null) doc.device = this.device;
        if (this.userAgent != null) doc.userAgent = this.userAgent;

        // objects / arrays
        if (this.utm != null) doc.utm = this.utm;
        if (this.attributes && this.attributes.length > 0) doc.attributes = this.attributes;

        if (this._id) {
            await SessionsCollection.updateAsync(toObjectId(this._id), { $set: doc });
            return this._id;
        } else {
            this._id = await SessionsCollection.insertAsync(doc);
            return this._id;
        }
    }

    static async findOne(filter) {
        const data = await SessionsCollection.findOneAsync(filter);
        return data ? new Sessions(data) : null;
    }

    static async findById(id) {
        const data = await SessionsCollection.findOneAsync(toObjectId(id));
        return data ? new Sessions(data) : null;
    }
}


