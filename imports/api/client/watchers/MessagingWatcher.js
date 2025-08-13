import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import { toast } from 'sonner';
import { TOAST_STYLE } from "../../common/const";
import { Accounts } from 'meteor/tmq:accounts';
const { Adapter, Logger } = core;

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
Adapter.Accounts = Accounts;

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

class MessagingWatcher extends Watcher2 {
    #data
    #lastBasis = null;
    #processes = {};
    #listen = null;
    constructor(parent) {
        super(parent);
        this.setValue(TAB.MESSAGES, 'all');
        this.setValue(TAB.CUSTOMER_INFORMATION, 'profile');
        this.setValue(POPUP.MESSAGES_FILTER, false);
        this.setValue(INTERACTION.MESSAGES, []);
        this.setValue(INTERACTION.INBOX, []);
        this.setValue(INTERACTION.MESSAGE_TEXT, '');
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

    fetchInbox() {
        this.setValue(INTERACTION.LOADING_INBOX, true);
        this.setValue(INTERACTION.INBOX, [{
            _id: "123",
            name: "John Smith",
            avatar: "images/smarties-avatar-03_1smarties-avatar-03.png",
            status: "Active",
            tag: "PROSPECT",
            previewMessage: "I’m having trouble with the system not saving...",
            topic: "Pricing inquiry",
            time: "2:15 PM",
            fullDateTime: "Jul 31, 2025 • 2:15 PM",
            unreadCount: 3,
            agents: [
                {
                    name: "Michelle Johnson",
                    team: "Support Team",
                    lastActivity: "2 days ago"
                },
                {
                    name: "Michelle Johnson",
                    team: "Sales Team",
                    lastActivity: "2 days ago"
                }
            ]
        },
        {
            _id: "456",
            name: "Alice Brown",
            avatar: "images/smarties-avatar-02_1smarties-avatar-02.png",
            status: "Inactive",
            tag: "CLIENT",
            previewMessage: "Can you provide more details about your services?",
            topic: "Service details",
            time: "1:45 PM",
            fullDateTime: "Jul 31, 2025 • 1:45 PM",
            unreadCount: 0,
            agents: [
                {
                    name: "John Doe",
                    team: "Sales Team",
                    lastActivity: "3 days ago"
                }
            ]
        },
        {
            _id: "789",
            name: "Alice Brown",
            avatar: "images/smarties-avatar-02_1smarties-avatar-02.png",
            status: "Inactive",
            tag: "VIP",
            previewMessage: "Can you provide more details about your services?",
            topic: "Service details",
            time: "1:45 PM",
            fullDateTime: "Jul 31, 2025 • 1:45 PM",
            unreadCount: 0,
            agents: [
                {
                    name: "John Doe",
                    team: "Sales Team",
                    lastActivity: "3 days ago"
                }
            ]
        }
        ])
        this.setValue(INTERACTION.LOADING_INBOX, false);
    }

    /**
     * Fetch messages from the server or local storage.
     * This is a mock implementation that simulates fetching messages.
     */

    fetchMessages(data) {
        this.setValue(INTERACTION.LOADING_MESSAGE, true);
        this.setValue(INTERACTION.CURRENT, data);
        const userMessages = messageData.filter(item => item.userId === data._id)
        this.setValue(INTERACTION.MESSAGES, userMessages);
        this.setValue(INTERACTION.LOADING_MESSAGE, false);
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
}

export default new MessagingWatcher(Client);