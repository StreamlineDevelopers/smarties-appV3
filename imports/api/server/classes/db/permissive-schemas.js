// More permissive MongoDB schemas for development and testing
// These schemas allow for flexibility while still providing basic validation

const permissiveSchemas = {
    business: {
        "bsonType": "object",
        "title": "business",
        "properties": {
            "name": {
                "bsonType": ["string", "null"]
            },
            "slug": {
                "bsonType": ["string", "null"]
            },
            "local": {
                "bsonType": ["string", "null"]
            },
            "plan": {
                "bsonType": ["string", "null"]
            },
            "settings": {
                "bsonType": ["object", "null"]
            },
            "createdAt": {
                "bsonType": ["double", "long", "int"]
            }
        },
        "additionalProperties": true // Allow extra fields
    },

    channels: {
        "bsonType": "object",
        "title": "channels",
        "properties": {
            "businessId": {
                "bsonType": ["objectId", "string"] // Allow both ObjectId and string
            },
            "type": {
                "bsonType": ["string", "null"]
            },
            "identifier": {
                "bsonType": ["string", "null"]
            },
            "provider": {
                "bsonType": ["string", "null"]
            },
            "metadata": {
                "bsonType": ["object", "null"]
            },
            "status": {
                "bsonType": ["string", "null"]
            },
            "createdAt": {
                "bsonType": ["double", "long", "int"]
            }
        },
        "additionalProperties": true
    },

    consumers: {
        "bsonType": "object",
        "title": "consumers",
        "properties": {
            "businessId": {
                "bsonType": ["objectId", "string"]
            },
            "externalId": {
                "bsonType": ["string", "null"]
            },
            "name": {
                "bsonType": ["object", "null"],
                "properties": {
                    "given": {
                        "bsonType": ["string", "null"]
                    },
                    "family": {
                        "bsonType": ["string", "null"]
                    }
                },
                "additionalProperties": true
            },
            "contacts": {
                "bsonType": ["array", "null"],
                "items": {
                    "bsonType": "object",
                    "additionalProperties": true // Allow flexible contact structure
                }
            },
            "tags": {
                "bsonType": ["array", "null"],
                "items": {
                    "bsonType": "string"
                }
            },
            "createdAt": {
                "bsonType": ["double", "long", "int"]
            }
        },
        "additionalProperties": true
    },

    inbox: {
        "bsonType": "object",
        "title": "inbox",
        "properties": {
            "businessId": {
                "bsonType": ["objectId", "string"]
            },
            "consumerId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "channelId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "status": {
                "bsonType": ["string", "null"]
            },
            "assigneeId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "lockedAt": {
                "bsonType": ["double", "long", "int", "null"]
            },
            "unreadForAssignee": {
                "bsonType": ["double", "long", "int"],
                "minimum": 0
            },
            "latestInteractionId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "latestSnippet": {
                "bsonType": ["string", "null"]
            },
            "latestAt": {
                "bsonType": ["double", "long", "int", "null"]
            },
            "latestDirection": {
                "bsonType": ["string", "null"]
            },
            "createdAt": {
                "bsonType": ["double", "long", "int"]
            }
        },
        "additionalProperties": true
    },

    interactions: {
        "bsonType": "object",
        "title": "interactions",
        "properties": {
            "businessId": {
                "bsonType": ["objectId", "string"]
            },
            "inboxId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "channelId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "consumerId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "userId": {
                "bsonType": ["objectId", "string", "null"]
            },
            "medium": {
                "bsonType": ["string", "null"]
            },
            "direction": {
                "bsonType": ["string", "null"],
                "enum": ["inbound", "outbound"] // Still enforce valid directions
            },
            "payload": {
                "bsonType": ["object", "null"],
                "properties": {
                    "text": {
                        "bsonType": ["string", "null"]
                    },
                    "attachments": {
                        "bsonType": ["array", "null"],
                        "items": {
                            "bsonType": "string"
                        }
                    }
                },
                "additionalProperties": true
            },
            "status": {
                "bsonType": ["string", "null"]
            },
            "timestamp": {
                "bsonType": ["double", "long", "int"]
            },
            "attributes": {
                "bsonType": ["array", "null"],
                "items": {
                    "bsonType": "object",
                    "properties": {
                        "key": {
                            "bsonType": "string"
                        },
                        "value": {
                            "bsonType": ["string", "double", "bool", "int", "long"]
                        }
                    },
                    "required": ["key", "value"],
                    "additionalProperties": false
                }
            }
        },
        "additionalProperties": true
    },

    departments: {
        "bsonType": "object",
        "title": "departments",
        "properties": {
            "businessId": {
                "bsonType": ["objectId", "string"]
            },
            "name": {
                "bsonType": ["string", "null"]
            },
            "description": {
                "bsonType": ["string", "null"]
            },
            "channelIds": {
                "bsonType": ["array", "null"],
                "items": {
                    "bsonType": ["objectId", "string"]
                }
            },
            "createdAt": {
                "bsonType": ["double", "long", "int"]
            }
        },
        "additionalProperties": true
    }
};

// Keep the original strict schemas for reference
import { schemas as strictSchemas, indexes } from './schemas.js';

// Export both versions
export {
    permissiveSchemas as schemas,  // Use permissive as default
    strictSchemas,                 // Keep original for production
    indexes
};

export default permissiveSchemas;
