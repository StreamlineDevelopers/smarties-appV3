import { Watcher2 } from "../Watcher2";
import { Mongo } from "meteor/mongo";
import Client from "../Client";
import moment from "moment";
import axios from "axios";
import { CHAT_SMARTIE } from "../../common/const";
import { LLMClient } from "@llm/llm-client";

const WAITING_MESSAGES = [
    "Processing...",
    "Please wait...",
    "One moment, please...",
    "Loading...",
    "Fetching information...",
    "Hang tight...",
    "Working on it...",
    "Stand by...",
    "Almost there...",
    "Just a sec...",
    "Calculating...",
    "Gathering data...",
    "Hold tight...",
    "Bear with me...",
    "Coming right up...",
    "In progress...",
    "Preparing your request...",
    "Just a moment...",
    "Please hold...",
    "Sit tight...",
    "Retrieving results...",
    "Crunching numbers...",
    "We're on it...",
    "Stay tuned...",
    "Making magic happen...",
    "Hold the line...",
    "Good things take time...",
    "Your request is important to us...",
    "Thank you for your patience...",
    "We're getting there...",
    "Any second now...",
    "Almost done...",
    "Won't be long now...",
    "Finalizing...",
    "Updating records...",
    "Synchronizing data...",
    "Processing your request...",
    "Compiling information...",
    "Analyzing...",
    "Hang on...",
    "Wait a moment...",
    "Loading data...",
    "Please stand by...",
    "Standby...",
    "In the meantime, take a deep breath...",
    "Processing the magic...",
    "Connecting to the server...",
    "Loading your content...",
    "Preparing data...",
    "We're working on it...",
    "Just a tick...",
    "Hold please...",
    "Data incoming...",
    "We're almost ready...",
    "Getting things ready...",
    "Initializing...",
    "Setting things up...",
    "Warming up the engines...",
    "Making it happen...",
    "Stay with us...",
    "Bringing it to you...",
    "Good things are coming...",
    "Hold on to your hat...",
    "We're nearly there...",
    "Just ironing out the details...",
    "Dotting the i's and crossing the t's...",
    "Any moment now...",
    "Processing your data...",
    "Hang in there...",
    "Awaiting response...",
    "Your patience is appreciated...",
    "Things are happening...",
    "Final touches...",
    "Wrapping things up...",
    "Almost finished...",
    "Wait for it...",
    "Right around the corner...",
    "Results are on the way...",
    "We haven't forgotten you...",
    "Everything's in motion...",
    "We're cooking up something good...",
    "Hold steady...",
    "On the way...",
    "Time is relative, results are absolute...",
    "Synchronizing...",
    "Just about ready...",
    "We're close...",
    "Booting up...",
    "Loading resources...",
    "Connecting you now...",
    "The wheels are turning...",
    "Aligning the stars...",
    "Unveiling results soon...",
    "Bringing you the goods...",
    "Almost in your hands...",
    "Stay on the line...",
    "Your turn is coming up...",
    "Seconds away...",
    "We're on the case...",
    "Processing, please stand by..."
];
const TRANSCRIPT_STATUS = {
    FINAL: "final",
    PENDING: "pending",
    TEMPORARY: "temporary"
};

class RoundRobin {
    #index = 0;
    #list = [];
    constructor(list) {
        this.#list = list;
    }
    next() {
        if (this.#index >= this.#list.length) this.#index = 0;
        return this.#list[this.#index++];
    }
}

export class ChatBot extends Watcher2 {
    #apiEnpoint = "/crawl/chat";
    #transcripts = new Mongo.Collection(null);
    #roundRobin = new RoundRobin(WAITING_MESSAGES);
    #timeout = null;
    #timeoutInMs = 1000 * 3;
    #threadId = null;
    #llmClient = null;
    constructor(parent) {
        super(parent);
        if (Client.Settings.llmApiKey && Client.Settings.llmUrl) {
            this.#llmClient = new LLMClient({
                serverUrl: Client.Settings.llmUrl,
                apiKey: Client.Settings.llmApiKey
            });
        }

    }
    /**
   * @returns {LLMClient}
   */
    get LLMClient() {
        return this.#llmClient;
    }
    get Transcripts() {
        return this.#transcripts.find().fetch();
    }

    reset(onLoad = true) {
        this.#transcripts.remove({});
        this.#threadId = null;
        this.Parent.setValue("chats", []);
        if (onLoad) this.onLoad();
    }

    onLoad(timeout = 1000, retry = 0) {
        if (this.#transcripts.find().count() === 0) {
            // this.createTranscript("inbound", "Hello, how can I help you today?");
            if (this.onloaded) clearTimeout(this.onloaded);
            this.onloaded = setTimeout(() => {
                this.sendRequest("Hello").catch(() => {
                    if (retry < 3) {
                        this.onLoad(timeout * 2, retry + 1);
                    }
                });
            }, timeout);
        }
    }

    createTranscript(direction, message, status = TRANSCRIPT_STATUS.FINAL) {
        this.#transcripts.insert({ direction, message, timestamp: moment().format("YYYY-MM-DD HH:mm:ss"), status });
        this.Parent.setValue("chats", this.Transcripts);
    }
    askQuestion(question, initial = false) {
        if (!initial) this.createTranscript("outbound", question);
        this.activateWatcher();
        return this.sendRequest(question).then(this.activateWatcher.bind(this));
    }
    addTemporaryTranscript() {
        const message = this.#roundRobin.next();
        this.createTranscript("inbound", message, TRANSCRIPT_STATUS.TEMPORARY);
        this.activateWatcher();
        if (this.#timeout) clearTimeout(this.#timeout);
        this.#timeout = setTimeout(() => {
            this.removeTemporaryTranscript();
            this.addTemporaryTranscript();
        }, this.#timeoutInMs);
    }
    removeTemporaryTranscript() {
        if (this.#timeout) clearTimeout(this.#timeout);
        this.#transcripts.remove({ status: TRANSCRIPT_STATUS.TEMPORARY });
        this.Parent.setValue("chats", this.Transcripts);
        this.activateWatcher();
    }
    sendRequest(query) {
        const payload = {};
        if (this.#threadId) payload.threadId = this.#threadId;
        if (query) payload.query = query;
        if (this.#timeout) clearInterval(this.#timeout);
        this.addTemporaryTranscript();
        // return axios.post(this.#apiEnpoint, payload, { headers: { "Content-Type": "application/json" } }).then((response) => {
        //     if (response.data) {
        //         if (response.data.threadId) this.#threadId = response.data.threadId;
        //         if (response.data.response) this.createTranscript("inbound", response.data.response);
        //     }
        // }).finally(() => {
        //     if (this.#timeout) clearTimeout(this.#timeout);
        //     this.removeTemporaryTranscript();
        // });
        return this.LLMClient.completion({
            // assistantId: Client.Settings.assistantId,
            assistantId: this.Parent.getValue("dbAssistant").assistantidllm,
            message: query,
            threadId: this.#threadId,
        }).then((response) => {
            if (response) {
                if (response.threadId) this.#threadId = response.threadId;
                if (response.response) this.createTranscript("inbound", response.response);
            }
        }).finally(() => {
            if (this.#timeout) clearTimeout(this.#timeout);
            this.removeTemporaryTranscript();
        });
    }

}