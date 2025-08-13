import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import { toast } from 'sonner';
import { TOAST_STYLE } from "../../common/const";
import { Accounts } from 'meteor/tmq:accounts';
const { Adapter, Logger } = core;

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

export const INBOX = {
    LOADING: "loading",
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
        this.setValue(INBOX.MESSAGES, []);
        this.setValue(INBOX.MESSAGE_TEXT, '');
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

    fetchMessages() {
        this.setValue(INBOX.LOADING, true);
        this.setValue(INBOX.MESSAGES, [
            {
                id: "1",
                sender: "User",
                direction: "inbound",
                message: "I need assistance with my order.",
                timestamp: new Date().toLocaleTimeString(),
            },
            {
                id: "2",
                direction: "outbound",
                sender: "Agent",
                message: "Hello, how can I help you?",
                timestamp: new Date().toLocaleTimeString(),
            },
        ]);
        this.setValue(INBOX.LOADING, false);
    }

    sendMessage() {
        this.setValue(INBOX.MESSAGES, [
            ...this.getValue(INBOX.MESSAGES),
            {
                id: String(Date.now()),
                sender: "User",
                direction: "inbound",
                message: this.getValue(INBOX.MESSAGE_TEXT),
                timestamp: new Date().toLocaleTimeString(),
            },
        ]);
        this.setValue(INBOX.MESSAGE_TEXT, '');
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