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
    SCRIPT_INJECTION: "scriptInjectionTab",
    CUSTOMER_INFORMATION: "customerInformationTab"
}

class MessagingWatcher extends Watcher2 {
    #data
    #lastBasis = null;
    #processes = {};
    #listen = null;
    constructor(parent) {
        super(parent);
        this.setValue(TAB.MESSAGES, 'all');
        this.setValue(POPUP.MESSAGES_FILTER, false);
    }


    searchMessages(value) {
        console.log("Searching messages...", value);
    }
    togglefilterMessagesPopup() {
        this.setValue(POPUP.MESSAGES_FILTER, !this.getValue(POPUP.MESSAGES_FILTER));
    }

    messagesTabChange(tab = 'all') {
        this.setValue(TAB.MESSAGES, tab);
    }
    uploadDocumentFile() { }
    sendMessage() { }

    setScriptInjectionPopup(flag = false) {
        this.setValue(POPUP.SCRIPT_INJECTION, flag);
    }

    searchScriptInjection() { }
    filterScriptInjection() { }
    scriptInjectionSelect() { }


    customerInformationTabChange() { }
    setDataEnrichmentSideColumn(flag = false) {
        this.setValue(POPUP.DATA_ENRICHMENT, flag);
    }

    toggleSmartiesAssistant() {
        this.setValue(TOGGLE.SMARTIES_ASSISTANT, !this.getValue(TOGGLE.SMARTIES_ASSISTANT));
    }
}

export default new MessagingWatcher(Client);