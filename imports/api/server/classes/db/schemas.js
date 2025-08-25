// MongoDB schema definitions for all collections

const schemas = {
    business: {
        "bsonType": "object",
        "title": "business",
        "properties": {
            "name": {
                "bsonType": "string"
            },
            "slug": {
                "bsonType": "string"
            },
            "local": {
                "bsonType": "string"
            },
            "plan": {
                "bsonType": "string"
            },
            "settings": {
                "bsonType": "object",
                "title": "object"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    channels: {
        "bsonType": "object",
        "title": "channels",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "type": {
                "bsonType": "string"
            },
            "identifier": {
                "bsonType": "string"
            },
            "provider": {
                "bsonType": "string"
            },
            "metadata": {
                "bsonType": "object",
                "title": "object"
            },
            "status": {
                "bsonType": "string"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    consumers: {
        "bsonType": "object",
        "title": "consumers",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "externalId": {
                "bsonType": "string"
            },
            "name": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "given": {
                        "bsonType": "string"
                    },
                    "family": {
                        "bsonType": "string"
                    }
                }
            },
            "contacts": {
                "bsonType": "array",
                "items": {
                    "title": "object",
                    "properties": {
                        "phones": {
                            "bsonType": "array",
                            "items": {
                                "title": "object",
                                "properties": {
                                    "label": {
                                        "bsonType": "string"
                                    },
                                    "value": {
                                        "bsonType": "string"
                                    }
                                }
                            }
                        },
                        "emails": {
                            "bsonType": "array",
                            "items": {
                                "title": "object",
                                "properties": {
                                    "label": {
                                        "bsonType": "string"
                                    },
                                    "value": {
                                        "bsonType": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "tags": {
                "bsonType": "array",
                "items": {
                    "bsonType": "string"
                }
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    inbox: {
        "bsonType": "object",
        "title": "inbox",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "consumerId": {
                "bsonType": "objectId"
            },
            "channelId": {
                "bsonType": "objectId"
            },
            "status": {
                "bsonType": "string"
            },
            "assigneeId": {
                "bsonType": "objectId"
            },
            "lockedAt": {
                "bsonType": "double"
            },
            "unreadForAssignee": {
                "bsonType": "int"
            },
            "latestInteractionId": {
                "bsonType": "objectId"
            },
            "latestSnippet": {
                "bsonType": "string"
            },
            "latestAt": {
                "bsonType": "double"
            },
            "latestDirection": {
                "bsonType": "string"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    interactions: {
        "bsonType": "object",
        "title": "interactions",
        "required": ["businessId", "inboxId", "channelId", "consumerId", "medium", "direction", "payload"],
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "inboxId": {
                "bsonType": "objectId"
            },
            "channelId": {
                "bsonType": "objectId"
            },
            "consumerId": {
                "bsonType": "objectId"
            },
            "userId": {
                "bsonType": "objectId"
            },
            "medium": {
                "bsonType": "string"
            },
            "direction": {
                "bsonType": "string"
            },
            "payload": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "text": {
                        "bsonType": "string"
                    },
                    "attachments": {
                        "bsonType": "array",
                        "items": {
                            "bsonType": "string"
                        }
                    }
                }
            },
            "status": {
                "bsonType": "string"
            },
            "timestamp": {
                "bsonType": "double"
            },
            "attributes": {
                "bsonType": "array",
                "items": {
                    "bsonType": "object",
                    "properties": {
                        "key": {
                            "bsonType": "string"
                        },
                        "value": {
                            "bsonType": ["string", "double", "bool", "int"]
                        }
                    }
                }
            }
        }
    },

    users: {
        "bsonType": "object",
        "title": "users",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "name": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "given": {
                        "bsonType": "string"
                    },
                    "family": {
                        "bsonType": "string"
                    }
                }
            },
            "email": {
                "bsonType": "string"
            },
            "role": {
                "bsonType": "string"
            },
            "services": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "password": {
                        "bsonType": "object",
                        "title": "object",
                        "properties": {
                            "bcrypt": {
                                "bsonType": "string"
                            }
                        }
                    },
                    "resume": {
                        "bsonType": "object",
                        "title": "object",
                        "properties": {
                            "loginTokens": {
                                "bsonType": "array",
                                "items": {
                                    "title": "object",
                                    "properties": {
                                        "when": {
                                            "bsonType": "date"
                                        },
                                        "hashedToken": {
                                            "bsonType": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "isActive": {
                "bsonType": "bool"
            },
            "lastLoginAt": {
                "bsonType": "double"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    departments: {
        "bsonType": "object",
        "title": "departments",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "name": {
                "bsonType": "string"
            },
            "description": {
                "bsonType": "string"
            },
            "channelIds": {
                "bsonType": "array",
                "items": {
                    "bsonType": "objectId"
                }
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    people: {
        "bsonType": "object",
        "title": "people",
        "description": "golden identity per business",
        "properties": {
            "businessId": { "bsonType": "objectId" },
            "active": { "bsonType": "bool" },
            "mergedInto": { "bsonType": "objectId" },
            "name": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "given": { "bsonType": "string" },
                    "family": { "bsonType": "string" },
                    "source": { "bsonType": "string" },
                    "updatedAt": { "bsonType": "double" }
                }
            },
            "emails": {
                "bsonType": "array",
                "items": {
                    "title": "object",
                    "properties": {
                        "label": { "bsonType": "string" },
                        "valueHash": { "bsonType": "string" },
                        "isPrimary": { "bsonType": "bool" },
                        "verified": { "bsonType": "bool" },
                        "source": { "bsonType": "string" },
                        "updatedAt": { "bsonType": "double" }
                    }
                }
            },
            "phones": {
                "bsonType": "array",
                "items": {
                    "title": "object",
                    "properties": {
                        "label": { "bsonType": "string" },
                        "valueHash": { "bsonType": "string" },
                        "isPrimary": { "bsonType": "string" },
                        "verified": { "bsonType": "bool" },
                        "source": { "bsonType": "string" },
                        "updatedAt": { "bsonType": "double" }
                    }
                }
            },
            "identifiers": {
                "bsonType": "array",
                "items": {
                    "title": "object",
                    "properties": {
                        "type": { "bsonType": "string" },
                        "valueHash": { "bsonType": "string" },
                        "updatedAt": { "bsonType": "double" }
                    }
                }
            },
            "fingerprints": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "deviceIds": { "bsonType": "array", "items": { "bsonType": "string" } },
                    "cookies": { "bsonType": "array", "items": { "bsonType": "string" } }
                }
            },
            "firstSeenAt": { "bsonType": "double" },
            "lastSeenAt": { "bsonType": "double" },
            "createdAt": { "bsonType": "double" }
        }
    },

    person_profile_links: {
        "bsonType": "object",
        "title": "person_profile_links",
        "required": ["businessId"],
        "properties": {
            "businessId": { "bsonType": "objectId" },
            "personId": { "bsonType": "objectId" },
            "profileId": { "bsonType": "objectId" },
            "linkType": { "bsonType": "string" },
            "isHardLink": { "bsonType": "bool" },
            "confidence": { "bsonType": "double" },
            "signals": { "bsonType": "object", "title": "object" },
            "createdAt": { "bsonType": "double" }
        }
    },

    sessions: {
        "bsonType": "object",
        "title": "sessions",
        "properties": {
            "businessId": {
                "bsonType": "objectId"
            },
            "channelId": {
                "bsonType": "objectId"
            },
            "consumerId": {
                "bsonType": "objectId"
            },
            "inboxId": {
                "bsonType": "objectId"
            },
            "status": {
                "bsonType": "string"
            },
            "startedAt": {
                "bsonType": "double"
            },
            "lastSeenAt": {
                "bsonType": "double"
            },
            "endedAt": {
                "bsonType": "double"
            },
            "durationMs": {
                "bsonType": "double"
            },
            "pageCount": {
                "bsonType": "int"
            },
            "utm": {
                "bsonType": "object",
                "title": "object",
                "properties": {
                    "source": {
                        "bsonType": "string"
                    },
                    "medium": {
                        "bsonType": "string"
                    },
                    "campaign": {
                        "bsonType": "string"
                    },
                    "term": {
                        "bsonType": "string"
                    },
                    "content": {
                        "bsonType": "string"
                    }
                }
            },
            "referrer": {
                "bsonType": "string"
            },
            "device": {
                "bsonType": "string"
            },
            "userAgent": {
                "bsonType": "string"
            },
            "attributes": {
                "bsonType": "array",
                "items": {
                    "title": "object"
                }
            },
            "externalSessionId": {
                "bsonType": "string"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    },

    page_views: {
        "bsonType": "object",
        "title": "page_views",
        "properties": {
            "sessionId": {
                "bsonType": "objectId"
            },
            "businessId": {
                "bsonType": "objectId"
            },
            "channelId": {
                "bsonType": "objectId"
            },
            "consumerId": {
                "bsonType": "objectId"
            },
            "inboxId": {
                "bsonType": "objectId"
            },
            "type": {
                "bsonType": "string"
            },
            "path": {
                "bsonType": "string"
            },
            "title": {
                "bsonType": "string"
            },
            "order": {
                "bsonType": "int"
            },
            "timestamp": {
                "bsonType": "double"
            },
            "dwellMs": {
                "bsonType": "double"
            },
            "metadata": {
                "bsonType": "object",
                "title": "object"
            },
            "createdAt": {
                "bsonType": "double"
            }
        }
    }
};

// Index definitions for all collections
const indexes = {
    business: [
        {
            keys: { "slug": 1 },
            options: { name: "index1", unique: true }
        }
    ],

    channels: [
        {
            keys: { "businessId": 1, "type": 1, "identifier": 1 },
            options: { name: "index1", unique: true }
        }
    ],

    consumers: [
        {
            keys: { "businessId": 1, "contacts.phones.value": 1 },
            options: { name: "index1" }
        },
        {
            keys: { "businessId": 1, "contacts.emails.value": 1 },
            options: { name: "index2" }
        },
        {
            keys: { "businessId": 1, "externalId": 1 },
            options: { name: "index3" }
        }
    ],

    inbox: [
        {
            keys: { "businessId": 1, "consumerId": 1, "channelId": 1 },
            options: { name: "index1", unique: true }
        },
        {
            keys: { "businessId": 1, "assigneeId": 1, "status": 1, "latestAt": -1 },
            options: { name: "index2" }
        },
        {
            keys: { "businessId": 1, "channelId": 1, "latestAt": -1 },
            options: { name: "index3" }
        }
    ],

    interactions: [
        {
            keys: { "inboxId": 1, "timestamp": -1 },
            options: { name: "index1" }
        },
        {
            keys: { "businessId": 1, "medium": 1, "direction": 1, "status": 1, "timestamp": -1 },
            options: { name: "index2" }
        },
        {
            keys: { "attributes.key": 1, "attributes.value": 1 },
            options: { name: "index3" }
        }
    ],

    users: [
        {
            keys: { "businessId": 1, "email": 1 },
            options: { name: "index1", unique: true }
        },
        {
            keys: { "businessId": 1, "role": 1 },
            options: { name: "index2" }
        }
    ],

    departments: [
        {
            keys: { "businessId": 1, "name": 1 },
            options: { name: "index1", unique: true }
        },
        {
            keys: { "businessId": 1, "channelIds": 1 },
            options: { name: "index2" }
        }
    ],

    people: [
        { keys: { "businessId": 1, "lastSeenAt": -1 }, options: { name: "people_idx1" } },
        { keys: { "businessId": 1, "emails.valueHash": 1, "emails.verified": 1 }, options: { name: "people_idx2" } },
        { keys: { "businessId": 1, "phones.valueHash": 1, "phones.verified": 1 }, options: { name: "people_idx3" } },
        { keys: { "businessId": 1, "identifiers.type": 1, "identifiers.valueHash": 1 }, options: { name: "people_idx4" } },
        { keys: { "businessId": 1, "fingerprints.deviceIds": 1 }, options: { name: "people_idx5" } },
        { keys: { "businessId": 1, "fingerprints.cookies": 1 }, options: { name: "people_idx6" } }
    ],

    person_profile_links: [
        { keys: { "businessId": 1, "personId": 1, "profileId": 1 }, options: { name: "ppl_idx1", unique: true } },
        { keys: { "businessId": 1, "profileId": 1, "confidence": -1 }, options: { name: "ppl_idx2" } },
        { keys: { "businessId": 1, "personId": 1, "linkType": 1, "confidence": -1 }, options: { name: "ppl_idx3", partialFilterExpression: { linkType: "soft" } } }
    ],

    sessions: [
        {
            keys: { "businessId": 1, "channelId": 1, "startedAt": -1 },
            options: { name: "biz_channel_startedAt" }
        }, {
            keys: { "consumerId": 1, "startedAt": -1 },
            options: { name: "consumer_startedAt" }
        },
        {
            keys: { "status": 1, "lastSeenAt": -1 },
            "startedAt": -1
        }, {
            keys: { "inboxId": 1, "startedAt": -1 },
            options: { name: "inbox_startedAt" }
        },
        {
            keys: { "businessId": 1, "externalSessionId": 1 },
            options: { name: "biz_extSessionId", sparse: true, unique: true }
        }
    ],

    page_views: [
        {
            keys: { "sessionId": 1, "timestamp": -1 },
            options: { name: "session_ts" }
        },
        {
            keys: { "businessId": 1, "path": 1, "timestamp": -1 },
            options: { name: "biz_path_ts" }
        },
        {
            keys: { "consumerId": 1, "timestamp": -1 },
            options: { name: "consumer_ts" }
        },
        {
            keys: { "businessId": 1, "type": 1, "timestamp": -1 },
            options: { name: "biz_type_ts" }
        }
    ]
};

export { schemas, indexes };