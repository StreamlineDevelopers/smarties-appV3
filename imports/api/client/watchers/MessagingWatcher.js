import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import { toast } from 'sonner';
import { TOAST_STYLE } from "../../common/const";
// import { Accounts } from 'meteor/tmq:accounts';
const { Adapter, Logger } = core;
import messageService from "../../common/static_codegen/tmq/message_pb";
import inboxService from "../../common/static_codegen/tmq/inbox_pb";
import interactionService from "../../common/static_codegen/tmq/interaction_pb";
import moment from "moment";
import {
    collectionManager,
    syncManager,
    subscriptionManager
} from 'redisvent-module/src/client/index';

const messageData = [
    {
        id: "1",
        sender: "User",
        direction: "inbound",
        message: "I need assistance with my order.",
        timestamp: new Date().toLocaleTimeString(),
        userId: "123",
    },
    {
        id: "2",
        direction: "outbound",
        sender: "Agent",
        message: "Hello, how can I help you?",
        timestamp: new Date().toLocaleTimeString(),
        userId: "123",
    },
    {
        id: "1",
        sender: "User",
        direction: "inbound",
        message: "I need assistance with my order.",
        timestamp: new Date().toLocaleTimeString(),
        userId: "456",
    },
    {
        id: "1",
        sender: "User",
        direction: "inbound",
        message: "I need assistance with my order.",
        timestamp: new Date().toLocaleTimeString(),
        userId: "789",
    },
]


Adapter.Meteor = Meteor;
// Adapter.Accounts = Accounts;


export const POPUP = {
    SCRIPT_INJECTION: "scriptInjectionPopup",
    MESSAGES_FILTER: "messagesFilterPopup",
    DATA_ENRICHMENT: "dataEnrichmentPopup",
};

export const TOGGLE = {
    SMARTIES_ASSISTANT: "smartiesAssistant"
}

export const TAB = {
    MESSAGES: "messagesTab",
    CUSTOMER_INFORMATION: "customerInformationTab"
}

export const INTERACTION = {
    LOADING_MESSAGE: "loadingMessage",
    LOADING_INBOX: "loadingInbox",
    INBOX: "inbox",
    CURRENT: "currentInteraction",
    MESSAGE_TEXT: 'text',
    MESSAGES: "messages",
}

// Global initialization state
let initialized = false;
let initializationPromise = null;

// Initialize RedisVent connection
export async function initializeRedisVent(wsUrl = 'ws://localhost:3502') {
    if (initialized) return;

    if (initializationPromise) {
        return initializationPromise;
    }

    initializationPromise = syncManager.connect(wsUrl, async () => {
        // Server emitter - not needed for Meteor as we use Methods
        console.log('Sync to server via Meteor methods');
    }).then(() => {
        initialized = true;
        console.log('RedisVent client connected');
    }).catch(error => {
        console.error('RedisVent connection failed:', error);
        throw error;
    });

    return initializationPromise;
}

class MessagingWatcher extends Watcher2 {
    #data
    #lastBasis = null;
    #processes = {};
    #listen = null;
    #interactionData = null;
    constructor(parent) {
        super(parent);
        this.setValue(TAB.MESSAGES, 'all');
        this.setValue(TAB.CUSTOMER_INFORMATION, 'profile');
        this.setValue(POPUP.MESSAGES_FILTER, false);
        this.setValue(INTERACTION.MESSAGES, []);
        this.setValue(INTERACTION.INBOX, []);
        this.setValue(INTERACTION.MESSAGE_TEXT, '');
        this.#data = collectionManager.getCollection('inboxapp', 'inbox', {
            syncEnabled: false  // We'll handle sync manually
        });

        this.#interactionData = collectionManager.getCollection('interactionapp', 'interaction', {
            syncEnabled: false  // We'll handle sync manually
        });

        this.listening = false;
        this.initialized = false;
    }
    get DB() {
        return this.#data;
    }

    get DBInteraction() {
        return this.#interactionData;
    }

    async initialize() {
        // Ensure RedisVent is connected
        await initializeRedisVent();

        // Subscribe to space
        if (!syncManager.subscribedSpaces.has('inboxapp')) {
            syncManager.subscribeToSpace('inboxapp');
        }
    }

    async getAll() {
        return await this.#data.find({}).fetch();
    }

    async getAllInteraction() {
        return await this.#interactionData.find({}).fetch();
    }
    // Messages
    searchMessages(value) {
        console.log("Searching messages...", value);
    }
    togglefilterMessagesPopup() {
        this.setValue(POPUP.MESSAGES_FILTER, !this.getValue(POPUP.MESSAGES_FILTER));
    }

    messagesTabChange(tab = 'all') {
        this.setValue(TAB.MESSAGES, tab);
    }

    async fetchInbox(businessId) {
        this.setValue(INTERACTION.LOADING_INBOX, true);

        try {
            // Create request for InboxService.GetInbox
            const req = new proto.tmq.GetInboxRequest();
            req.setBusinessId("3ed129481cf7ee676e174993");

            // Call InboxService.GetInbox - 0x2686675b
            const { err, result } = await this.Parent.callFunc(0x2686675b, req);

            if (err) {
                console.error("Error fetching inbox:", err);
                toast.error("Failed to fetch inbox", TOAST_STYLE);
                this.setValue(INTERACTION.INBOX, []);
                return;
            }

            // Deserialize the response
            const response = proto.tmq.GetInboxResponse.deserializeBinary(result);
            const responseObj = response.toObject();

            if (responseObj.success) {
                console.log("Inbox fetched successfully:", responseObj);

                // Transform server data to UI format if needed
                const transformedInbox = responseObj.inboxesList.map(inbox => ({
                    _id: inbox.id,
                    businessId: inbox.businessId,
                    consumerId: inbox.consumerId,
                    channelId: inbox.channelId,
                    status: inbox.status,
                    assigneeId: inbox.assigneeId,
                    lockedAt: inbox.lockedAt,
                    unreadForAssignee: inbox.unreadForAssignee,
                    latestInteractionId: inbox.latestInteractionId,
                    latestSnippet: inbox.latestSnippet,
                    latestAt: inbox.latestAt,
                    latestDirection: inbox.latestDirection,
                    createdAt: inbox.createdAt
                }));

                const existing = await this.#data.find({}).fetch();
                for (const doc of existing) {
                    await this.#data.remove(doc._id);
                }

                // Add todos to minimongo
                for (const inbox of transformedInbox) {
                    await this.#data.insert(inbox);
                }


                this.setValue(INTERACTION.INBOX, transformedInbox);
            } else {
                console.error("Server error:", responseObj.errorMessage);
                toast.error(responseObj.errorMessage || "Failed to fetch inbox", TOAST_STYLE);
                this.setValue(INTERACTION.INBOX, []);
            }

        } catch (error) {
            console.error("Exception fetching inbox:", error);
            toast.error("Failed to fetch inbox", TOAST_STYLE);
            this.setValue(INTERACTION.INBOX, []);
        } finally {
            this.setValue(INTERACTION.LOADING_INBOX, false);
        }
    }

    /**
     * Fetch messages/interactions from the server for a specific inbox.
     * @param {Object} inboxData - The inbox data containing _id (inboxId)
     */
    async fetchMessages(inboxData) {
        this.setValue(INTERACTION.LOADING_MESSAGE, true);
        this.setValue(INTERACTION.CURRENT, inboxData);
        this.setValue("inboxActive", true);

        try {
            // Create request for InteractionService.GetInteractions
            const req = new proto.tmq.GetInteractionsRequest();
            req.setInboxId(inboxData._id);

            // Call InteractionService.GetInteractions - 0x7626071f
            const { err, result } = await this.Parent.callFunc(0x7626071f, req);

            if (err) {
                console.error("Error fetching interactions:", err);
                toast.error("Failed to fetch messages", TOAST_STYLE);
                this.setValue(INTERACTION.MESSAGES, []);
                return;
            }

            // Deserialize the response
            const response = proto.tmq.GetInteractionsResponse.deserializeBinary(result);
            const responseObj = response.toObject();

            if (responseObj.success) {
                console.log("Interactions fetched successfully:", responseObj);

                // Transform server data to UI message format
                const transformedMessages = responseObj.interactionsList.map(interaction => ({
                    id: interaction.id,
                    businessId: interaction.businessId,
                    inboxId: interaction.inboxId,
                    channelId: interaction.channelId,
                    consumerId: interaction.consumerId,
                    userId: interaction.userId,
                    medium: interaction.medium,
                    direction: interaction.direction,
                    message: interaction.payload?.text || '',
                    attachments: interaction.payload?.attachmentsList || [],
                    status: interaction.status,
                    timestamp: interaction.timestamp ? new Date(interaction.timestamp).toLocaleTimeString() : '',
                    attributes: interaction.attributesList || [],
                    // UI specific fields for compatibility with existing components
                    sender: interaction.direction === 'inbound' ? 'User' : 'Agent'
                }));

                const existing = await this.#interactionData.find({}).fetch();
                for (const doc of existing) {
                    await this.#interactionData.remove(doc._id);
                }
                for (const interaction of transformedMessages) {
                    await this.#interactionData.insert(interaction);
                }

                this.setValue(INTERACTION.MESSAGES, transformedMessages);
            } else {
                console.error("Server error:", responseObj.errorMessage);
                toast.error(responseObj.errorMessage || "Failed to fetch messages", TOAST_STYLE);
                this.setValue(INTERACTION.MESSAGES, []);
            }

        } catch (error) {
            console.error("Exception fetching interactions:", error);
            toast.error("Failed to fetch messages", TOAST_STYLE);
            this.setValue(INTERACTION.MESSAGES, []);
        } finally {
            this.setValue(INTERACTION.LOADING_MESSAGE, false);
        }
    }

    /**
     * Send a message.
     * This is a mock implementation that simulates sending a message.
     *  
     * @param {string} message - The message text to send.
     */
    sendMessage() {
        this.setValue(INTERACTION.MESSAGES, [
            ...this.getValue(INTERACTION.MESSAGES),
            {
                id: String(Date.now()),
                sender: "User",
                direction: "inbound",
                message: this.getValue(INTERACTION.MESSAGE_TEXT),
                timestamp: new Date().toLocaleTimeString(),
            },
        ]);
        this.setValue(INTERACTION.MESSAGE_TEXT, '');
    }

    uploadDocumentFile() { }


    // Script Injection
    setScriptInjectionPopup(flag = false) {
        this.setValue(POPUP.SCRIPT_INJECTION, flag);
    }

    searchScriptInjection(value) {
        console.log("Searching script injection...", value);
    }

    filterScriptInjection(value) {
        console.log("Filtering script injection...", value);
    }
    scriptInjectionSelect(id) {
        console.log("Script injection selected", id);
    }


    // Customer Information
    customerInformationTabChange(tab = 'profile') {
        this.setValue(TAB.CUSTOMER_INFORMATION, tab);
    }
    setDataEnrichmentSideColumn(flag = false) {
        this.setValue(POPUP.DATA_ENRICHMENT, flag);
    }

    toggleSmartiesAssistant() {
        this.setValue(TOGGLE.SMARTIES_ASSISTANT, !this.getValue(TOGGLE.SMARTIES_ASSISTANT));
    }

    inboxListen() {
        if (this.listening) return;

        // Subscribe to real-time changes
        this.subscription = subscriptionManager.listen(
            'inboxapp',
            'inbox',
            "user12",
            async (change) => {
                // Handle real-time updates
                switch (change.type) {
                    case 'initial':
                        // Initial data - already in minimongo from fetch
                        console.log('Initial data received');
                        break;

                    case 'insert':
                        // Check if already exists
                        const exists = await this.#data.findOne({ _id: change.id });
                        if (!exists) {
                            console.log("insert", change.data);

                            const data = {
                                _id: change.data._id._str,
                                businessId: change.data.businessId._str,
                                consumerId: change.data.consumerId._str,
                                channelId: change.data.channelId._str,
                                status: change.data.status,
                                assigneeId: change.data.assigneeId || null,
                                lockedAt: change.data.lockedAt || null,
                                unreadForAssignee: change.data.unreadForAssignee,
                                latestInteractionId: change.data.latestInteractionId ? change.data.latestInteractionId._str : null,
                                latestSnippet: change.data.latestSnippet || null,
                                latestAt: change.data.createdAt || null,
                                latestDirection: change.data.latestDirection || null,
                                createdAt: change.data.createdAt
                            }
                            await this.#data.insert(data);
                        }
                        console.log('Inbox added:', change.data);
                        break;

                    case 'update':
                        if (change.data._id) delete change.data._id;
                        await this.#data.update(change.id, change.data);
                        console.log('Inbox updated:', change.data);
                        break;

                    case 'remove':
                        await this.#data.remove(change.id);
                        console.log('Inbox removed:', change.id);
                        break;

                    case 'custom':
                        const { action, ...customData } = change.data;
                        console.log('Custom event:', action, customData);
                        // Handle custom events as needed
                        break;

                    default:
                        console.log('Unknown event:', change.type);
                }
            }
        );

        this.listening = true;
    }

    interactionListen() {
        // Stop existing interaction subscription if any
        if (this.interactionSubscription) {
            this.interactionSubscription.stop();
            this.interactionListening = false;
        }

        // Subscribe to real-time changes
        this.interactionSubscription = subscriptionManager.listen(
            'interactionapp',
            'interaction',
            "user12",
            async (change) => {
                // Handle real-time updates
                switch (change.type) {
                    case 'initial':
                        // Initial data - already in minimongo from fetch
                        console.log('Initial data received');
                        break;

                    case 'insert':
                        // Check if already exists
                        const exists = await this.#interactionData.findOne({ _id: change.id });

                        if (!exists) {
                            const data = {
                                _id: change.data._id._str,
                                businessId: change.data.businessId._str,
                                inboxId: change.data.inboxId._str,
                                channelId: change.data.channelId._str,
                                consumerId: change.data.consumerId._str,
                                userId: change.data.userId,
                                medium: change.data.medium,
                                direction: change.data.direction,
                                message: change.data.payload?.text || '',
                                attachments: change.data.payload?.attachmentsList || [],
                                status: change.data.status,
                                timestamp: change.data.createdAt,
                                attributes: change.data.attributesList || [],
                                sender: change.data.direction === 'inbound' ? 'User' : 'Agent'
                            }
                            await this.#interactionData.insert(data);
                        }
                        console.log('Interaction added:', change.data);
                        break;

                    case 'update':
                        await this.#interactionData.update(change.id, change.data);
                        console.log('Interaction updated:', change.data);
                        break;

                    case 'remove':
                        await this.#interactionData.remove(change.id);
                        console.log('Interaction removed:', change.id);
                        break;

                    default:
                        console.log('Unknown event:', change.type);
                }
            }
        );

        this.interactionListening = true;
    }

    stopListening() {
        if (this.subscription) {
            this.subscription.stop();
            this.listening = false;
        }
        // if (this.interactionSubscription) {
        //     this.interactionSubscription.stop();
        //     this.interactionListening = false;
        // }
    }

    stopInteractionListening() {
        if (this.interactionSubscription) {
            this.interactionSubscription.stop();
            this.interactionListening = false;
        }
    }
}

export default new MessagingWatcher(Client);