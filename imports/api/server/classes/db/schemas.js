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
    ]
};

export { schemas, indexes };