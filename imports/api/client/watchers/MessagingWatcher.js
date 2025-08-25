import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import { toast } from 'sonner';
import { TOAST_STYLE } from "../../common/const";
// import { Accounts } from 'meteor/tmq:accounts';
const { Adapter, Logger } = core;
import inboxService from "../../common/static_codegen/tmq/inbox_pb";
import interactionService from "../../common/static_codegen/tmq/interaction_pb";
import takeoverService from "../../common/static_codegen/tmq/takeover_pb";
import LiveKitVoiceClient from "@tmq.paul/pipecat-livekit-sdk";
import {
    collectionManager,
    syncManager,
    subscriptionManager
} from 'redisvent-module';
import axios from "axios";
import PredefinedAnswerClient from 'predefined-answer-client';

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
    LOADING_SUGGESTIONS: "loadingSuggestions",
    INBOX: "inbox",
    CURRENT: "currentInteraction",
    MESSAGE_TEXT: 'text',
    MESSAGES: "messages",
    PREDEFINED_ANSWERS: "predefinedAnswers",
    SUGGESTIONS: "suggestions",
    LATEST_INTERACTION: "latestInteraction",
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

// Decode google.protobuf.Any from toObject() form { typeUrl, value: base64 }
function decodeAny(any) {
    if (!any || any.value == null) return null;
    try {
        const binary = atob(any.value);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const text = new TextDecoder().decode(bytes);
        if (any.typeUrl && any.typeUrl.endsWith('/string')) return text;
        if (any.typeUrl && (any.typeUrl.endsWith('/int64') || any.typeUrl.endsWith('/double') || any.typeUrl.endsWith('/number'))) {
            const n = Number(text);
            return Number.isNaN(n) ? text : n;
        }
        if (any.typeUrl && any.typeUrl.endsWith('/json')) return JSON.parse(text);
        return text;
    } catch (e) {
        return any.value;
    }
}

function decodeAttributeList(list) {
    return (list || []).map(a => ({
        key: a.key,
        value: a && a.value && typeof a.value === 'object' && 'value' in a.value ? decodeAny(a.value) : a.value
    }));
}

class MessagingWatcher extends Watcher2 {
    #data
    #lastBasis = null;
    #processes = {};
    #listen = null;
    #sessionId = null;
    #businessId = "63b81a722f8146be93163e3e";
    #interactionData = null;
    #pamClient = null;
    #liveKitClient = null;
    #currentRoom = null;
    #isSpeaking = false;
    #audioElements = new Map();
    #currentOutputDeviceId = null;
    #audioUnblockRegistered = false;
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
        if (!this.#pamClient) {
            await this.initializePredefinedAnswer();
            // check if there is any predefined answer
            const res = await this.getPredefinedAnswersByBusinessId();

            // #NOTE: remove if the adding of predefined answer in UI is made
            if (res.length === 0) {
                await this.addPredefinedAnswer({
                    businessId: this.#businessId,
                    title: "Sample Predefined Answer",
                    body: "This is a sample predefined answer",
                    status: "approved",
                    locale: "en-US",
                    tags: ["sample", "predefined", "answer"]
                });

                this.getPredefinedAnswersByBusinessId();
            }
        }
        if (!this.#liveKitClient) await this.initializeLiveKit();
        // Subscribe to space
        if (!syncManager.subscribedSpaces.has('inboxapp')) {
            syncManager.subscribeToSpace('inboxapp');
        }
    }

    async initializePredefinedAnswer() {
        if (this.#pamClient) return;
        const data = await this.ensureConfig();
        try {
            this.#pamClient = new PredefinedAnswerClient({
                serverUrl: data.predefinedAnswer.serverUrl,
                apiKey: data.predefinedAnswer.apiKey,
                refreshEndpoint: data.predefinedAnswer.refreshEndpoint
            });
        } catch (error) {
            toast.error("Failed to initialize predefined answer", TOAST_STYLE.ERROR);
        }

    }

    async initializeLiveKit() {
        if (this.#liveKitClient) return;
        this.#liveKitClient = new LiveKitVoiceClient({ serverUrl: 'http://localhost:7880' });
        this.liveInitEventListeners();
    }

    async liveInitEventListeners() {
        this.#liveKitClient.on('connected', (data) => {
            console.log('Connected to room', data);
            this.#isSpeaking = false;
            // this.setValue(CALL_SMARTIE.STATUS, CALL_STATUS.ONGOING);
            // this.setValue(CALL_SMARTIE.SPEAKING, false);
        });
        this.#liveKitClient.on('disconnected', () => {
            console.log('Disconnected from room');
        });
        this.#liveKitClient.on('status', (status) => {
            console.log('Status:', status);
        });
        this.#liveKitClient.on('error', (error) => {
            console.log('Error:', error);
        });
        this.#liveKitClient.on('participantConnected', (participant) => {
            console.log('Participant connected:', participant);
        });
        this.#liveKitClient.on('participantDisconnected', (participant) => {
            console.log('Participant disconnected:', participant);
        });
        this.#liveKitClient.on('participantsUpdated', (participants) => {
            console.log('Participants updated:', participants);
        });
        this.#liveKitClient.on('audioTrackSubscribed', (track) => {
            console.log('Audio track subscribed:', track);

            try {
                // Resolve underlying remote audio track and a stable ID
                let remoteTrack = null;
                if (typeof track?.attach === 'function' || track?.mediaStreamTrack) {
                    remoteTrack = track;
                } else if (track?.track && (typeof track.track.attach === 'function' || track.track.mediaStreamTrack)) {
                    remoteTrack = track.track;
                } else if (track?.audioTrack && (typeof track.audioTrack.attach === 'function' || track.audioTrack.mediaStreamTrack)) {
                    remoteTrack = track.audioTrack;
                }

                const trackId = remoteTrack?.sid
                    || remoteTrack?.mediaStreamTrack?.id
                    || track?.sid
                    || track?.trackSid
                    || track?.publication?.trackSid
                    || remoteTrack?.id
                    || track?.id;

                if (!trackId) return;
                if (this.#audioElements.has(trackId)) return;

                let container = document.getElementById('livekit-audio-container');
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'livekit-audio-container';
                    container.style.position = 'fixed';
                    container.style.bottom = '0';
                    container.style.right = '0';
                    container.style.width = '1px';
                    container.style.height = '1px';
                    container.style.overflow = 'hidden';
                    container.style.zIndex = '-1';
                    document.body.appendChild(container);
                }

                const audio = document.createElement('audio');
                audio.autoplay = true;
                audio.playsInline = true;
                audio.muted = false;
                audio.volume = 1.0;
                audio.preload = 'auto';
                audio.dataset.trackId = String(trackId);
                audio.style.display = 'none';

                let attached = false;
                if (remoteTrack && typeof remoteTrack.attach === 'function') {
                    try {
                        remoteTrack.attach(audio);
                        attached = true;
                    } catch (_e) {
                        attached = false;
                    }
                }

                if (!attached) {
                    const mstrack = remoteTrack?.mediaStreamTrack
                        || track?.mediaStreamTrack
                        || track?.track?.mediaStreamTrack
                        || track?.audioTrack?.mediaStreamTrack;
                    if (mstrack) {
                        const stream = new MediaStream([mstrack]);
                        audio.srcObject = stream;
                    }
                }

                // Set output device if specified
                if (this.#currentOutputDeviceId && typeof audio.setSinkId === 'function') {
                    audio.setSinkId(this.#currentOutputDeviceId).catch(() => { });
                }

                container.appendChild(audio);

                // Attempt to play immediately; if blocked, register one-time user-gesture resume
                const playPromise = audio.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch((_err) => {
                        if (!this.#audioUnblockRegistered) {
                            this.#audioUnblockRegistered = true;
                            const resumeAll = () => {
                                this.#audioElements.forEach((a) => {
                                    try { a.muted = false; } catch (_e) { }
                                    const p = a.play();
                                    if (p && typeof p.catch === 'function') { p.catch(() => { }); }
                                });
                                document.removeEventListener('click', resumeAll);
                                document.removeEventListener('touchstart', resumeAll);
                                this.#audioUnblockRegistered = false;
                            };
                            document.addEventListener('click', resumeAll, { once: true, passive: true });
                            document.addEventListener('touchstart', resumeAll, { once: true, passive: true });
                        }
                        console.warn('Autoplay may be blocked. Click or tap the page to enable audio.');
                    });
                }

                this.#audioElements.set(trackId, audio);
            } catch (e) {
                console.error('Failed to attach audio track:', e);
            }
        });
        this.#liveKitClient.on('audioTrackUnsubscribed', (track) => {
            console.log('Audio track unsubscribed:', track);
            try {
                const trackId = track?.sid
                    || track?.mediaStreamTrack?.id
                    || track?.id
                    || track?.trackSid
                    || track?.publication?.trackSid
                    || track?.track?.sid
                    || track?.audioTrack?.sid
                    || track?.track?.mediaStreamTrack?.id
                    || track?.audioTrack?.mediaStreamTrack?.id;
                const audio = this.#audioElements.get(trackId);
                if (audio) {
                    try {
                        if (typeof track?.detach === 'function') track.detach(audio);
                    } catch (_e) { }
                    audio.pause();
                    if (audio.srcObject) {
                        const tracks = audio.srcObject.getTracks?.() || [];
                        tracks.forEach(t => t.stop?.());
                        audio.srcObject = null;
                    }
                    if (audio.parentElement) audio.parentElement.removeChild(audio);
                    this.#audioElements.delete(trackId);
                }
            } catch (e) {
                console.error('Failed to detach audio track:', e);
            }
        });
        this.#liveKitClient.on('microphoneEnabled', () => {
            console.log('Microphone enabled');
        });
        this.#liveKitClient.on('microphoneDisabled', () => {
            console.log('Microphone disabled');
        });
        // Transcription Events
        this.#liveKitClient.on('userTranscription', (data) => {
            // Session.sendChatMessage(data?.data?.text ?? data?.text ?? '', 'call', this.#currentRoom)
            console.log('User transcription:', data);
        });
        this.#liveKitClient.on('assistantTranscription', (data) => {
            // Session.sendChatMessageOutbound(data?.data?.text ?? data?.text ?? '', 'call', this.#currentRoom)
            console.log('Assistant transcription:', data);
        });

        // Speaking State Events
        this.#liveKitClient.on('userSpearkingState', (state) => {
            console.log('User speaking state:', state);
        });

        this.#liveKitClient.on('botSpeakingState', (state) => {
            if (state.state === 'start') {
                this.#isSpeaking = true;
                // this.setValue(CALL_SMARTIE.SPEAKING, true);
            } else if (state.state === 'stop') {
                this.#isSpeaking = false;
                // this.setValue(CALL_SMARTIE.SPEAKING, false);
            }
        });

        // User Recording Event
        this.#liveKitClient.on('userRecording', (recording) => {
            console.log('User recording:', recording);
        });
    }
    async getAll() {
        return await this.#data.find({}, { sort: { latestAt: -1 } }).fetch();
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

    async fetchInbox() {
        this.setValue(INTERACTION.LOADING_INBOX, true);

        try {
            const req = new proto.tmq.GetMergedInboxRequest();
            req.setBusinessId(this.#businessId);

            const { err, result } = await this.Parent.callFunc(0xd3e96bac, req);

            if (err) {
                console.error("Error fetching inbox:", err);
                toast.error("Failed to fetch inbox", TOAST_STYLE);
                this.setValue(INTERACTION.INBOX, []);
                return;
            }

            // Deserialize the response
            const response = proto.tmq.GetMergedInboxResponse.deserializeBinary(result);
            const responseObj = response.toObject();

            if (responseObj.success) {
                // Transform merged server data to UI format
                const transformedInbox = responseObj.inboxesList.map(m => ({
                    _id: m.consumerId, // use consumerId as stable key for merged rows
                    businessId: this.#businessId,
                    consumerId: m.consumerId,
                    inboxIds: m.inboxIdsList || [],
                    representativeInboxId: m.representativeInboxId || null,
                    unreadForAssignee: m.totalUnreadForAssignee || 0,
                    latestInteractionId: m.latestInteractionId || null,
                    latestSnippet: m.latestSnippet || '',
                    latestAt: m.latestAt || 0,
                    latestDirection: m.latestDirection || '',
                    createdAt: m.latestAt || 0
                }));

                const existing = await this.#data.find({}).fetch();
                for (const doc of existing) {
                    await this.#data.remove(doc._id);
                }

                // Add todos to minimongo
                for (const inbox of transformedInbox) {
                    await this.#data.insert(inbox);
                }

                // Get sorted data from minimongo to ensure proper order
                const sortedInbox = await this.#data.find({}, { sort: { latestAt: -1 } }).fetch();
                this.setValue(INTERACTION.INBOX, sortedInbox);
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
        // subscribe to all inboxIds for merged view; fallback to representativeInboxId
        const representativeInboxId = inboxData.representativeInboxId || inboxData._id;
        const inboxIds = inboxData.inboxIds || [];
        if (Array.isArray(inboxIds) && inboxIds.length > 0) this.interactionListenMultiple(inboxIds);
        else if (representativeInboxId) this.interactionListen(representativeInboxId);
        const latestInteractionId = inboxData.latestInteractionId;
        try {
            // Prefer fetching by consumer for merged view
            const req = new proto.tmq.GetInteractionsByConsumerRequest();
            req.setBusinessId(this.#businessId);
            req.setConsumerId(inboxData.consumerId);

            // Call InteractionService.GetInteractionsByConsumer - 0xcbaf7911
            const { err, result } = await this.Parent.callFunc(0xcbaf7911, req);

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
                // Transform server data to UI message format
                let transformedMessages = responseObj.interactionsList.map(interaction => {
                    const attributes = decodeAttributeList(interaction.attributesList);
                    return {
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
                        timestamp: interaction.timestamp,
                        attributes,
                        // UI specific fields for compatibility with existing components
                        sender: interaction.direction === 'inbound' ? 'User' : 'Agent'
                    };
                });
                // Ensure strict timestamp ordering (oldest -> newest)
                transformedMessages.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                // get the latestInteraction from the latestInteractionId, fallback to last by time
                const latestInteraction = transformedMessages.find(interaction => interaction.id && latestInteractionId && interaction.id.includes(latestInteractionId))
                    || transformedMessages[transformedMessages.length - 1];
                this.setValue(INTERACTION.LATEST_INTERACTION, latestInteraction);
                const isAgent = this.getValue(TOGGLE.SMARTIES_ASSISTANT) ?? false;
                if (latestInteraction && latestInteraction.direction === 'inbound' && !isAgent && latestInteraction.message) this.fetchSuggestions(latestInteraction.message);

                // check if  medium is call
                if (latestInteraction && latestInteraction.medium === 'call') {
                    this.setValue("IS_CURRENTLY_IN_CALL", true);
                    this.#currentRoom = latestInteraction.attributes.find(attribute => attribute.key === 'roomId')?.value;
                }
                else {
                    this.setValue("IS_CURRENTLY_IN_CALL", false);
                    this.#currentRoom = null;
                }

                // get the sessionId in latestInteraction.attributes
                // set latest interaction data
                const sessionId = latestInteraction && latestInteraction.attributes && latestInteraction.attributes.find(attribute => attribute.key === 'sessionId')?.value;
                if (sessionId) {
                    this.#sessionId = sessionId;
                    await this.checkSmartiesAssistantStatus(sessionId);
                }
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
    async sendMessage(message = null) {
        if (!message) message = this.getValue(INTERACTION.MESSAGE_TEXT);
        const res = await axios.post(`/api/b/smarties-test/channels/messages/outbound`, {
            "provider": "smarty",
            "type": "chat",
            "from": "smarty-chat-main",
            // "identifier": "smarty-chat-main",
            "to": "widget",
            "text": message,
            "meta": {
                "agentId": "agent_001",
                "agentName": "Support Agent",
                "priority": "normal",
                "responseTime": Date.now()
            }
        })

        if (res.data.ok) {
            this.setValue(INTERACTION.MESSAGE_TEXT, '');
            toast.success("Message sent successfully", TOAST_STYLE.SUCCESS);
        } else {
            toast.error("Failed to send message", TOAST_STYLE.ERROR);
        }
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

    async toggleSmartiesAssistant() {
        try {
            const value = this.getValue(TOGGLE.SMARTIES_ASSISTANT) ?? true;
            const req = new proto.tmq.ToggleStatusRequest();
            req.setSessionid(this.#sessionId);
            req.setState(value ? 'human' : 'bot');
            const { err, result } = await this.Parent.callFunc(0x9e2202ca, req);
            if (err) toast.error("Failed to toggle Smarties Assistant", TOAST_STYLE.ERROR);
            const response = proto.tmq.StatusResponse.deserializeBinary(result);
            const responseObj = response.toObject();
            if (responseObj.success) this.setValue(TOGGLE.SMARTIES_ASSISTANT, !(responseObj.state === 'human'));
            else toast.error("Failed to toggle Smarties Assistant", TOAST_STYLE.ERROR);
        } catch (error) {
            console.error("Error toggling Smarties Assistant:", error);
            toast.error("Failed to toggle Smarties Assistant", TOAST_STYLE.ERROR);
        }
    }

    async checkSmartiesAssistantStatus(sessionId = null) {
        if (!sessionId) sessionId = this.#sessionId;
        if (!sessionId) {
            toast.warning("Session ID not found", TOAST_STYLE.WARNING);
            return;
        }
        try {
            const req = new proto.tmq.CheckStatusRequest();
            if (typeof sessionId === 'string') req.setSessionid(sessionId);
            else req.setSessionid(sessionId.toString());
            // req.setSessionid(sessionId);
            const { err, result } = await this.Parent.callFunc(0x6f678e77, req);
            if (err) toast.error("Failed to check Smarties Assistant Status", TOAST_STYLE.ERROR);
            const response = proto.tmq.StatusResponse.deserializeBinary(result);
            const responseObj = response.toObject();
            if (responseObj.success) this.setValue(TOGGLE.SMARTIES_ASSISTANT, !(responseObj.state === 'human'));
            else toast.error("Failed to check Smarties Assistant Status", TOAST_STYLE.ERROR);
        } catch (error) {
            console.error("Error checking Smarties Assistant Status:", error);
            toast.error("Failed to check Smarties Assistant Status", TOAST_STYLE.ERROR);
        } finally {
            this.setValue(INTERACTION.LOADING_SUGGESTIONS, false);
        }
    }

    async fetchSuggestions(query) {
        try {
            this.setValue(INTERACTION.LOADING_SUGGESTIONS, true);
            const data = await this.ensureConfig();
            const auth = btoa(`${data.auth.username}:${data.auth.password}`);
            const res = await axios.post(data.suggestion.url,
                {
                    query,
                    min: data.suggestion.min,
                    max: data.suggestion.max
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Basic ${auth}`
                    }
                });
            if (res.status === 200 && res.data.output) this.setValue(INTERACTION.SUGGESTIONS, res.data.output.suggestions);
            else toast.error("Failed to fetch suggestions", TOAST_STYLE.ERROR);
            this.setValue(INTERACTION.LOADING_SUGGESTIONS, false);
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch suggestions" + error, TOAST_STYLE.ERROR);
            this.setValue(INTERACTION.LOADING_SUGGESTIONS, false);
        }

    }

    /** Predefined Answer */
    async addPredefinedAnswer({ title = "", body = "", locale = "en-US", tags = [] }) {
        try {
            if (!this.#pamClient) await this.initializePredefinedAnswer();
            const res = await this.#pamClient.addPredefinedAnswer({
                businessId: this.#businessId,
                title,
                body,
                locale,
                tags,
            });
            if (res) {
                toast.success("Predefined answer added successfully", TOAST_STYLE.SUCCESS);
                this.getPredefinedAnswersByBusinessId();
            }
            else toast.error("Failed to add predefined answer", TOAST_STYLE.ERROR);
        } catch (error) {
            toast.error("Failed to add predefined answer", TOAST_STYLE.ERROR);
        }

    }

    async getPredefinedAnswersByBusinessId() {
        try {
            if (!this.#pamClient) await this.initializePredefinedAnswer();
            const res = await this.#pamClient.getPredefinedAnswersByBusinessId(this.#businessId);
            if (res.ok) {
                this.setValue(INTERACTION.PREDEFINED_ANSWERS, res.data);
                return res.data;
            }
            else toast.error("Failed to fetch predefined answers", TOAST_STYLE.ERROR);
        } catch (error) {
            toast.error("Failed to fetch predefined answers", TOAST_STYLE.ERROR);
        }
    }

    async updatePredefinedAnswer(id, payload) {
        try {
            if (!this.#pamClient) await this.initializePredefinedAnswer();
            const res = await this.#pamClient.updatePredefinedAnswer(id, payload);
            if (res) {
                toast.success("Predefined answer updated successfully", TOAST_STYLE.SUCCESS);
                this.getPredefinedAnswersByBusinessId();
            }
            else toast.error("Failed to update predefined answer", TOAST_STYLE.ERROR);
        } catch (error) {
            toast.error("Failed to update predefined answer", TOAST_STYLE.ERROR);
        }
    }

    async deletePredefinedAnswer(id) {
        try {
            if (!this.#pamClient) await this.initializePredefinedAnswer();
            const res = await this.#pamClient.deletePredefinedAnswer(id);
            if (res) {
                toast.success("Predefined answer deleted successfully", TOAST_STYLE.SUCCESS);
                this.getPredefinedAnswersByBusinessId();
            }
            else toast.error("Failed to delete predefined answer", TOAST_STYLE.ERROR);
        } catch (error) {
            toast.error("Failed to delete predefined answer", TOAST_STYLE.ERROR);
        }
    }

    /** LiveKit */
    async joinRoom() {
        try {
            console.log("joinRoom", this.#currentRoom);
            if (!this.#liveKitClient) await this.initializeLiveKit();
            if (!this.#currentRoom) {
                toast.warning("Room not set", TOAST_STYLE.WARNING);
                return;
            }
            const room = await this.#liveKitClient.join({
                roomName: this.#currentRoom,
                userIdentity: this.#businessId
            });
            if (room.roomName) {
                await this.#liveKitClient.sendBotControl('MUTE');
                console.log('Connected to room:', room.roomName);
            }
            else {
                toast.error("Failed to join room", TOAST_STYLE.ERROR);
                this.setValue("isJoinedRoom", false);
            }
        } catch (error) {
            toast.error("Failed to join room", TOAST_STYLE.ERROR);
            this.setValue("isJoinedRoom", false);
        }

    }

    async leaveRoom() {
        if (!this.#liveKitClient) await this.initializeLiveKit();
        await this.#liveKitClient.sendBotControl('UNMUTE');
        await this.#liveKitClient.disconnect();
        console.log('Disconnected from room');
    }

    async callRoom() {
        if (!this.#liveKitClient) await this.initializeLiveKit();
        if (!this.#currentRoom) {
            toast.warning("Room not set", TOAST_STYLE.WARNING);
            return;
        }
    }

    inboxListen() {
        if (this.listening) return;
        if (!this.#businessId) {
            toast.warning("Business not set", TOAST_STYLE.WARNING);
            return;
        }
        // Subscribe to real-time changes
        this.subscription = subscriptionManager.listen(
            'inboxapp',
            'inbox',
            this.#businessId, // businessId as routingId
            async (change) => {
                // Handle real-time updates
                // transform the data to the UI format
                const data = {
                    _id: change.id || change.data._id._str,
                    businessId: change.data.businessId._str,
                    consumerId: change.data.consumerId._str,
                    channelId: change.data.channelId._str,
                    status: change.data.status,
                    assigneeId: change.data.assigneeId || null,
                    lockedAt: change.data.lockedAt || null,
                    unreadForAssignee: change.data.unreadForAssignee,
                    latestInteractionId: change.data.latestInteractionId ? change.data.latestInteractionId._str : null,
                    latestSnippet: change.data.latestSnippet || null,
                    latestAt: change.data.latestAt || change.data.createdAt || null,
                    latestDirection: change.data.latestDirection || null,
                    createdAt: change.data.createdAt
                }

                // Refresh merged view to avoid updating non-existent merged docs by raw inbox _id
                try {
                    await this.fetchInbox();
                } catch (e) {
                    console.warn('Failed to refresh merged inbox on change', e);
                }
            }
        );

        this.listening = true;
    }

    interactionListenMultiple(inboxIds = []) {
        // Stop existing single subscription
        if (this.interactionSubscription) {
            this.interactionSubscription.stop();
            this.interactionSubscription = null;
        }
        // Stop existing multi subscriptions
        if (this.interactionSubscriptions && Array.isArray(this.interactionSubscriptions)) {
            this.interactionSubscriptions.forEach(sub => sub && sub.stop && sub.stop());
        }
        this.interactionSubscriptions = [];

        inboxIds.forEach(inboxId => {
            const sub = subscriptionManager.listen(
                'interactionapp',
                'interaction',
                inboxId,
                async (change) => {
                    switch (change.type) {
                        case 'initial':
                            break;
                        case 'insert': {
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
                                    attributes: change.data.attributes,
                                    sender: change.data.direction === 'inbound' ? 'User' : 'Agent'
                                };
                                const sessionId = change.data.attributes.find(attribute => attribute.key === 'sessionId')?.value;
                                if (sessionId !== this.#sessionId) {
                                    this.#sessionId = sessionId;
                                    await this.checkSmartiesAssistantStatus(sessionId);
                                }
                                const isAgent = this.getValue(TOGGLE.SMARTIES_ASSISTANT) ?? false;
                                if (data.direction === 'inbound' && data.message && !isAgent) this.fetchSuggestions(data.message);
                                await this.#interactionData.insert(data);
                            }
                            break;
                        }
                        case 'update': {
                            const updated = {
                                businessId: change.data.businessId?._str ?? change.data.businessId,
                                inboxId: change.data.inboxId?._str ?? change.data.inboxId,
                                channelId: change.data.channelId?._str ?? change.data.channelId,
                                consumerId: change.data.consumerId?._str ?? change.data.consumerId,
                                userId: change.data.userId,
                                medium: change.data.medium,
                                direction: change.data.direction,
                                message: change.data.payload?.text || '',
                                attachments: change.data.payload?.attachmentsList || [],
                                status: change.data.status,
                                timestamp: change.data.createdAt,
                                attributes: decodeAttributeList(change.data.attributesList),
                                sender: change.data.direction === 'inbound' ? 'User' : 'Agent'
                            };
                            await this.#interactionData.update(change.id, updated);

                            const sessionAttr = (change.data.attributesList || []).find(attribute => attribute.key === 'sessionId');
                            const decodedSessionId = sessionAttr && sessionAttr.value && typeof sessionAttr.value === 'object' ? decodeAny(sessionAttr.value) : sessionAttr?.value;
                            if (decodedSessionId) {
                                this.#sessionId = decodedSessionId;
                            }
                            break;
                        }
                        case 'remove':
                            await this.#interactionData.remove(change.id);
                            break;
                        default:
                            break;
                    }
                }
            );
            this.interactionSubscriptions.push(sub);
        });
        this.interactionListening = true;
    }

    interactionListen(inboxId) {
        // Stop existing interaction subscription if any
        if (this.interactionSubscription) {
            this.interactionSubscription.stop();
            this.interactionListening = false;
        }

        // Subscribe to real-time changes
        this.interactionSubscription = subscriptionManager.listen(
            'interactionapp',
            'interaction',
            inboxId,
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
                                attributes: change.data.attributes,
                                sender: change.data.direction === 'inbound' ? 'User' : 'Agent'
                            }
                            // find the sessionId in the attributes
                            const sessionId = change.data.attributes.find(attribute => attribute.key === 'sessionId')?.value;
                            if (sessionId !== this.#sessionId) {
                                this.#sessionId = sessionId;
                                await this.checkSmartiesAssistantStatus(sessionId);
                            }
                            const isAgent = this.getValue(TOGGLE.SMARTIES_ASSISTANT) ?? false;
                            if (data.direction === 'inbound' && data.message && !isAgent) this.fetchSuggestions(data.message);
                            await this.#interactionData.insert(data);
                        }
                        console.log('Interaction added:', change.data);
                        break;

                    case 'update':
                        const updated = {
                            businessId: change.data.businessId?._str ?? change.data.businessId,
                            inboxId: change.data.inboxId?._str ?? change.data.inboxId,
                            channelId: change.data.channelId?._str ?? change.data.channelId,
                            consumerId: change.data.consumerId?._str ?? change.data.consumerId,
                            userId: change.data.userId,
                            medium: change.data.medium,
                            direction: change.data.direction,
                            message: change.data.payload?.text || '',
                            attachments: change.data.payload?.attachmentsList || [],
                            status: change.data.status,
                            timestamp: change.data.createdAt,
                            attributes: decodeAttributeList(change.data.attributesList),
                            sender: change.data.direction === 'inbound' ? 'User' : 'Agent'
                        };
                        await this.#interactionData.update(change.id, updated);
                        console.log('Interaction updated:', updated);

                        const sessionAttr = (change.data.attributesList || []).find(attribute => attribute.key === 'sessionId');
                        const decodedSessionId = sessionAttr && sessionAttr.value && typeof sessionAttr.value === 'object' ? decodeAny(sessionAttr.value) : sessionAttr?.value;
                        if (decodedSessionId) {
                            this.#sessionId = decodedSessionId;
                        }
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