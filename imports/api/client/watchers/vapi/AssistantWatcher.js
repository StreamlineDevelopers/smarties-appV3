import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../../Watcher2";
import Client from "../../Client";
import { ASSISTANT } from "../../../common/const";
import VpManager from "../../modules/VpManager"; //#[x]: @szyrelle rename VapiManager to VpManager file and import name
const { Watcher, Adapter, Logger, Account, RedisVent } = core;
import assistantService from "../../../common/static_codegen/tmq/assistant_pb";
import kbService from "../../../common/static_codegen/tmq/knowledgeBase_pb";
import CallManager from "../../modules/CallManager";
import { TOAST_STYLE } from "../../../common/const";
import { toast } from 'sonner';
import { ChatBot } from "../Chatbot";
import { Mongo } from "meteor/mongo";
import { Assistant } from "@assistant/assistant-client";
import RedisventService from "../../redisvent/RedisventService";

Adapter.Accounts = Accounts;
Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.DDP = DDP;

const defaultModel = {
    assistantName: "Leo",
    firstMessage: "Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?",
    systemPrompt: "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations, here to assist customers with their smart home devices...",
    provider: "openai",
    model: "gpt-3.5-turbo",
    files: "First choice",
    temperature: "0.7",
    maxTokens: "First choice"
};
const defaultTranscriber = {
    provider: "deepgram",
    model: "deepgram",
    backgroundDenoisingEnabled: false
};

const defaultvoiceConfiguration = {
    provider: "deepgram",
    voice: "deepgram",
    addVoiceIdManually: false,
    model: "deepgram"
};
const defaultvoiceAdditionalConfiguration = {
    backgroundSound: "deepgram",
    backgroundSoundUrl: "",
    inputMinCharacters: "",
    punctuationBoundaries: "deepgram",
    customSpeedEnabled: false,
    speed: "Normal",
    anger: "none",
    positivity: "none",
    surprise: "none",
    sadness: "none",
    curiosity: "none"
};

const defaulttools = {
    name: "Sample Tool",
    description: "This is a sample tool description.",
    selectAll: false,
    functionTool: "499ce958-10ae-4fa1-be50-124f32dc05e9",
    enableEndCallFunction: false,
    dialKeypad: false,
    phoneNumber: "+1 (555) 000-0000"
};

const analysis = {
    systemPrompt: "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations...",
    successEvaluationRubric: "deepgram",
    successEvaluationRequestTimeoutInSeconds: "0.7",
    dataStructurePrompt: "deepgram",
    name: "",
    type: "String",
    isEnum: false,
    required: false,
    description: "Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?"
};
const defaultadvanced = {
    hipaaCompliance: false,
    pciCompliance: false,
    audioRecording: "deepgram",
    videoRecording: false,
    waitSeconds: "0.7",
    smartEndpointing: "deepgram",
    onPunctuationSeconds: "0.7",
    voicemailDetectionProvider: "deepgram",
    serverUrl: "https://api.deepgram.com/v1/listen",
    serverDescription: "This is the server URL for Deepgram's API.",
    messagePrompt: "Welcome, Leo! You are the friendly and helpful voice of SmartHome Innovations...",
};

const VAPI_CALL = {
    LIVE: "live",
    DEMO: "demo",
};

class AssistantWatcher extends Watcher2 {
    #chatBot = null;
    #data;
    #lastBasis;
    #processes = {};
    #assitantConfig = null;
    #searchQuery = "";
    #listen = null;
    constructor(parent) {
        super(parent);
        this.setValue(ASSISTANT.MODEL, defaultModel);
        this.setValue(ASSISTANT.TRANSCRIBER, defaultTranscriber);
        this.setValue(ASSISTANT.VOICE_CONFIGURATION, defaultvoiceConfiguration);
        this.setValue(ASSISTANT.VOICE_ADDITIONAL_CONFIGURATION, defaultvoiceAdditionalConfiguration);
        this.setValue(ASSISTANT.TOOLS, defaulttools);
        this.setValue(ASSISTANT.ANALYSIS, analysis);
        this.setValue(ASSISTANT.ADVANCED, defaultadvanced);
        this.setValue("chats", []);
        this.#chatBot = new ChatBot(this);
        this.callManager = null;
        this.vm = null;
        /**
         * @type {Assistant}
         */
        this.assistantLlmManager = null;
        this.assistantId = "";
        this.currentVapiCall = VAPI_CALL.LIVE;
        this.callAssistantId = null;
        this.callAssistantPublicKey = null;
        this.initCallManager();
        this.initVM();
        RedisventService.Assistant.prepareCollection("assistant");
        this.#data = RedisventService.Assistant.getCollection("assistant");
    }
    /**
     * @returns {Mongo.Collection}
     */
    get DB() {
        return this.#data;
    }

    get Assistants() {
        return this.DB.find({}, { sort: { createdat: -1 } }).fetch() || [];
    }
    /**
     * @returns {ChatBot}
     */
    get ChatBot() {
        return this.#chatBot;
    }

    loadChat() {
        this.ChatBot.reset();
    }

    initialChat() {
        const selected = this.getValue("dbAssistant");
        if (selected && selected.firstmessage && this.ChatBot.Transcripts.length === 0) {
            this.ChatBot.onLoad();
        }
    }

    handleSendChat(chat) {
        if (!chat) return;
        this.ChatBot.askQuestion(chat);
    }
    initVM() {
        this.vm = new VpManager({ //#[x]: @szyrelle rename VapiManager to VpManager file and import name
            serverUrl: Client.Settings?.vmConfig?.serverUrl,
            apiKey: Client.Settings?.vmConfig?.apiKey,
            refreshEndpoint: Client.Settings?.vmConfig?.refreshEndpoint
        });
    }

    initCallManager() {
        try {
            if (!this.vm) {
                this.initVM();
            }
            if (this.callManager) return;
            const callManagerConfig = Client.Settings;
            const publicKey = callManagerConfig.callAssistantPublicKey || "";

            if (!publicKey) {
                toast.error('Public key is not available. Please try again later.', {
                    style: TOAST_STYLE.ERROR
                });
                return;
            }

            if (!callManagerConfig) {
                toast.error('Call is not available. Please try again later.', {
                    style: TOAST_STYLE.ERROR
                });
                return;
            }
            this.callManager = new CallManager({ //#[x]: @szyrelle rename VapiCallManager to CallManager file and import name
                serverUrl: callManagerConfig.callAssistantServerUrl || "http://localhost:3050",
                token: publicKey,
                apiKey: callManagerConfig.callAssistantJwtApiKey || ""
            });
            this.callManager.onCallStatusChange((status) => {
                switch (status) {
                    case "starting":
                        this.setValue('isCallRinging', true);
                        break;
                    case "active":
                        this.setValue('callActive', true);
                        this.setValue('isAssistantTalking', false);
                        this.setValue('isCallRinging', false);
                        break;
                    default:
                        this.setValue('callActive', false);
                        this.setValue('isAssistantTalking', false);
                        this.setValue('isCallRinging', false);
                        this.callManager = null;
                        break;
                }
            });

            this.callManager.onSpeechStart(() => {
                this.setValue('isAssistantTalking', true);
            });

            this.callManager.onSpeechEnd(() => {
                this.setValue('isAssistantTalking', false);
            });

            this.callManager.onError((error) => {
                this.setValue('vapiError', error.message || "An error occurred with SMARTIE");
                this.setValue('isCallRinging', false);
                toast.error('An error occurred with SMARTIE', {
                    style: TOAST_STYLE.ERROR
                });
            });
        } catch (error) {
            toast.error('Failed to initialize VapiManager', {
                style: TOAST_STYLE.ERROR
            });
            this.setValue('vapiError', "Failed to initialize SMARTIE");
            this.setValue('isCallRinging', false);
        }
    }

    async initializeAssistantLlm() {
        if (this.assistantLlmManager) return;
        if (!this.#assitantConfig) this.#assitantConfig = await this.fetchAssistantConfig();
        this.assistantLlmManager = new Assistant({
            apiKey: this.#assitantConfig.apikey,
            serverUrl: this.#assitantConfig.serverurl
        });
    }

    setAssistantConfig(state, key, value) {
        const assistantConfig = this.getValue(state);
        if (!assistantConfig) return;
        switch (state) {
            case ASSISTANT.MODEL:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.TRANSCRIBER:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.VOICE_CONFIGURATION:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.VOICE_ADDITIONAL_CONFIGURATION:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.TOOLS:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.PREDEFINED_FUNCTIONS:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.ANALYSIS:
                assistantConfig[key] = value;
                break;
            case ASSISTANT.ADVANCED:
                assistantConfig[key] = value;
                break;
            default:
                break;
        }
        this.setValue(state, assistantConfig);
    }

    get Model() {
        return {
            provider: [
                { value: 'openai', label: 'openai' },
                { value: 'deepgram', label: 'Deepgram' },
                { value: 'elevenLabs', label: 'Second choice' }
            ],
            model: [
                { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
                { value: 'deepgram', label: 'Deepgram' },
                { value: 'second', label: 'Second choice' },
                { value: 'third', label: 'Third choice' },
            ],
            files: [
                { value: 'string', label: 'Select one...' },
                { value: 'deepgram', label: 'Deepgram' },
                { value: 'second', label: 'Second choice' },
                { value: 'third', label: 'Third choice' },
            ],
            temperature: [],
            maxTokens: [
                { value: 'string', label: 'Select one...' },
                { value: 'deepgram', label: 'Deepgram' },
                { value: 'second', label: 'Second choice' },
                { value: 'third', label: 'Third choice' },
            ],
        };
    }

    /**
     * Creates a new assistant
     * @param {Object} data - Assistant configuration
     * @param {string} data.name - Name of the assistant
     * @param {string} [data.description] - Description of the assistant
     * @param {Object} [data.voice] - Voice configuration
     * @param {string} [data.voice.provider] - Voice provider ('vapi', '11labs', 'deepgram')
     * @param {string} [data.voice.voiceId] - Voice ID (e.g., 'Elliot', 'Rachel')
     * @param {Object} [data.model] - Model configuration
     * @param {string} [data.model.provider] - Model provider ('openai', 'google', 'vapi')
     * @param {string} [data.model.model] - Model ID (e.g., 'gpt-3.5-turbo', 'gpt-4')
     */

    async createAssistant(data) {
        this.setValue("isLoadingCreate", true);
        if (this.#processes["createAssistant"]) return;
        this.#processes["createAssistant"] = true;
        const voiceProvider = data.voiceProvider || 'vapi';
        const voice = data.voice || 'Elliot';
        const modelProvider = data.modelProvider || 'openai';
        const model = data.model || 'gpt-4o';
        const assistant = await this.vm.createAssistant({
            name: data.name || 'New Assistant',
            voice: {
                provider: voiceProvider,
                voiceId: voice
            },
            model: {
                provider: modelProvider,
                model: model
            }
        });

        const config = await this.fetchAssistantConfig();
        if (!config.apikey || !config.serverurl) {
            toast.error('Failed to create assistant', {
                style: TOAST_STYLE.ERROR
            });
            return;
        }
        this.initializeAssistantLlm(config);

        if (this.assistantLlmManager) {
            const assistantLlm = await this.assistantLlmManager.createAssistant({ name: data.name, });
            const req = new assistantService.AssistantRequest();
            req.setUserid(Accounts.userId());
            req.setAssistantid(assistant.id);
            req.setName(data.name);
            req.setVoiceprovider(voiceProvider);
            req.setVoice(voice);
            req.setModelprovider(modelProvider);
            req.setModel(model);
            req.setAssistantidllm(assistantLlm.id);

            return this.Parent.callFunc(0x56950f9c, req).then(({ err, result }) => {
                if (err) {
                    toast.error('Failed to create assistant', {
                        style: TOAST_STYLE.ERROR
                    });
                    return;
                }
                const deserialized = assistantService.AssistantResponse.deserializeBinary(result);
                return deserialized.toObject();
            }).catch((error) => {
                toast.error('Failed to create assistant', {
                    style: TOAST_STYLE.ERROR
                });
                return;
            }).finally(() => {
                this.#processes["createAssistant"] = false;
                this.setValue("isLoadingAssistants", false);
                this.setValue("isLoadingCreate", false);
            });
        }
    }

    async fetchAllAssistants({ isLoadmore = false } = {}) {
        try {
            if (!Accounts.userId()) {
                return [];
            }

            if (!isLoadmore) {
                this.#data.remove({});
                this.#lastBasis = null;
            }

            if (this.#processes["fetchAssistant"]) return;
            this.#processes["fetchAssistant"] = true;
            const req = new assistantService.FetchAssistantRequest();
            const query = new assistantService.Query();
            query.setUserid(Accounts.userId());
            query.setKeywords(this.#searchQuery || "");
            req.setQuery(query);
            if (this.#lastBasis) {
                req.setLastbasis(this.#lastBasis);
            }
            return this.Parent.callFunc(0xfb1ded5a, req).then(({ result }) => {
                const deserialized = assistantService.FetchAssistantResponse.deserializeBinary(result);
                const res = deserialized.toObject();
                const data = res.assistantsList;
                const lastBasis = res.lastbasis;
                this.#lastBasis = lastBasis;
                if (data && data.length) {
                    data.forEach(item => {
                        this.DB.upsert({ id: item.id }, { $set: item });
                    });
                }
                // return res;
            }).finally(() => {
                this.#processes["fetchAssistant"] = false;
                this.setValue("isLoadingAssistants", false);
            });
        } catch (error) {
            toast.error('Failed to fetch assistants', {
                style: TOAST_STYLE.ERROR
            });
        }
    }

    searchAssistants(query) {
        this.#searchQuery = query;
        this.fetchAllAssistants();
    }

    async getAssistant(assistantId) {
        this.setValue("isAssistantSectionOpen", false);
        const result = await this.vm.getAssistant(assistantId);
        this.setValue(ASSISTANT.SELECTED_ASSISTANT, result);
        this.setValue("isAssistantSectionOpen", true);
    }

    async publishAssistant() {
        this.setValue("LoadingPublishAssistant", true);
        if (this.#processes["publishAssistant"]) return;
        this.#processes["publishAssistant"] = true;
        const name = this.getValue("assistantName") || null;
        const firstMessage = this.getValue("firstMessage") || null;
        const systemPrompt = this.getValue("systemPrompt") || null;
        const selectedTools = this.getValue("selectedTools") || null;
        const assistantKnowledgeBase = this.getValue("assistantKnowledgeBase") || null;
        const assistantData = this.getValue(ASSISTANT.SELECTED_ASSISTANT) || null;
        const currentAssistant = this.getValue("dbAssistant") || null;
        const selectedVoice = this.getValue("assistantVoice")
        let options = {};
        options.model = this.getValue(ASSISTANT.SELECTED_ASSISTANT).model;

        if (name) options.name = name;
        if (firstMessage) options.firstMessage = firstMessage;
        if (systemPrompt) {
            options.model.messages = [{
                role: "system",
                content: systemPrompt
            }];
        }
        if (selectedVoice) {
            options.voice = {
                provider: selectedVoice.provider,
                voiceId: selectedVoice.voiceid,
            }
        }

        if (selectedTools) {
            const functions = [];
            selectedTools.forEach(tool => {
                // Transform parameters structure
                const transformedParameters = {
                    type: "object",
                    properties: {},
                    required: tool.parameters.required || [],
                    additionalProperties: false
                };

                // Handle properties array
                if (Array.isArray(tool.parameters.properties)) {
                    tool.parameters.properties.forEach(prop => {
                        transformedParameters.properties[prop.name] = {
                            type: prop.type,
                            ...(prop.description ? { description: prop.description } : {}),
                            ...(prop.type === 'object' ? { additionalProperties: false } : {})
                        };
                    });
                }

                functions.push({
                    name: tool.name,
                    async: tool.async || false,
                    description: tool.description,
                    parameters: transformedParameters,
                    serverUrl: tool.serverConfig.serverurl
                });
            });

            options.model.functions = functions;
        }

        if (assistantKnowledgeBase) {
            // options.knowledgeBase = assistantKnowledgeBase;
            // 

            const req = new kbService.FetchKbUrlRequest();
            req.setCollectionid(assistantKnowledgeBase);
            const res = await this.Parent.callFunc(0xad71a3ae, req).then(({ result }) => {
                const deserialized = kbService.FetchKbUrlResponse.deserializeBinary(result);
                return deserialized.toObject();
            });
            if (res.success) {
                const defaultFunc = {
                    "name": "kb_querying_tool",
                    "description": "Use this tool to retrieve information related to business, products, services data. Specify the 'query' to search for specific information within that domain. Trigger this tool when a user asks about business, products, services details.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string",
                                "description": "The specific query or topic to search for within the domain"
                            }
                        },
                        "required": [
                            "query"
                        ],
                        "additionalProperties": false
                    },
                    "strict": true,
                    "serverUrl": res.url
                };
                //  const data = await this.vm.addCustomKnowledgeBase({ url: res.url });
                // options.model.knowledgeBaseId = data.id;
                if (options.model.functions) {
                    options.model.functions.push(defaultFunc);
                } else {
                    options.model.functions = [defaultFunc];
                }

            } else {
                toast.error('Failed to fetch knowledge base', {
                    style: TOAST_STYLE.ERROR
                });
            }
        } else {
            if (options.model && options.model.functions && options.model.functions.length > 0) {
                options.model.functions = options.model.functions.filter(f => f.name !== "kb_querying_tool");
            } else {
                options.model.functions = [];
            }
        }
        // UPDATE LLM ASSISTANT

        const config = await this.fetchAssistantConfig();
        if (!config.apikey || !config.serverurl) {
            toast.error('Failed to create assistant', {
                style: TOAST_STYLE.ERROR
            });
            return;
        }
        this.initializeAssistantLlm(config);

        const generateTools = (selectedTools) => {
            const tools = [];

            let server = {};
            selectedTools.forEach(tool => {
                if (tool.serverConfig.serverurl) {
                    server = {
                        url: tool.serverConfig.serverurl,
                        secret: tool.serverConfig.secret || "",
                        timeout: tool.serverConfig.timeout || 30000
                    };
                }

                // Transform parameters structure
                const transformedParameters = {
                    type: "object",
                    properties: {},
                    required: tool.parameters.required || [],
                    additionalProperties: false
                };

                // Handle properties array
                if (Array.isArray(tool.parameters.properties)) {
                    tool.parameters.properties.forEach(prop => {
                        transformedParameters.properties[prop.name] = {
                            type: prop.type,
                            ...(prop.description ? { description: prop.description } : {}),
                            ...(prop.type === 'object' ? { additionalProperties: false } : {})
                        };
                    });
                }

                tools.push({
                    "type": "function",
                    "function": {
                        "name": tool.name,
                        "description": tool.description,
                        "parameters": transformedParameters,
                        "strict": tool.strict || false
                    },
                    "server": {
                        "url": tool.serverConfig.serverurl
                    }
                });
            });
            return tools;
        };

        const tools = generateTools(selectedTools);

        this.assistantLlmManager.updateAssistant(this.getValue("dbAssistant").assistantidllm, {
            name: name,
            description: "",
            firstMessage: firstMessage,
            systemMessage: systemPrompt,
            model: {
                provider: assistantData.model.provider,
                model: assistantData.model.model,
            },
            voice: {
                provider: selectedVoice.provider,
                voiceId: selectedVoice.voiceid,
            },
            tools: tools,
            knowledgeBase: {
                provider: "smarty",
                id: assistantKnowledgeBase
            }
        });

        const result = await this.vm.updateAssistant(this.getValue(ASSISTANT.SELECTED_ASSISTANT).id, options).catch((error) => {
            toast.error('Failed to update assistant', {
                style: TOAST_STYLE.ERROR
            });
            Logger.showError("Failed to update assistant", error);
            return null;
        });
        if (result) {
            const req = new assistantService.UpdateAssistantRequest();
            req.setUserid(Accounts.userId());
            req.setName(name);
            req.setVoiceprovider(selectedVoice.provider);
            req.setVoice(selectedVoice.voiceid);
            req.setModelprovider(assistantData.model.provider);
            req.setModel(assistantData.model.model);
            req.setAssistantid(assistantData.id);
            req.setAssistantidllm(currentAssistant.assistantidllm);
            if (selectedTools.length > 0) {
                selectedTools.forEach(tool => {
                    req.addToolids(tool.id);
                });
            }
            if (options.model && options.model.functions)
                options.model.functions.forEach(f => {
                    const fn = new assistantService.Functions();
                    fn.setName(f.name);
                    fn.setAsync(f.async);
                    fn.setDescription(f.description);
                    fn.setServerurl(f.serverUrl);

                    const params = new assistantService.Parameters();
                    params.setType(f.parameters.type);
                    params.setRequiredList(f.parameters.required);

                    const propsMap = params.getPropertiesMap();
                    Object.entries(f.parameters.properties).forEach(([key, def]) => {
                        const p = new assistantService.Properties();
                        p.setType(def.type);
                        propsMap.set(key, p);
                    });

                    fn.setParameters(params);
                    req.addFunctions(fn);
                });
            req.setKbcollectionid(assistantKnowledgeBase);
            req.setKbid(options.model.knowledgeBaseId);
            req.setFirstmessage(firstMessage);
            req.setSystemprompt(systemPrompt);

            const data = await this.Parent.callFunc(0xcf55909, req).then(({ result }) => {
                const deserialized = assistantService.AssistantResponse.deserializeBinary(result);
                return deserialized.toObject();
            });
            if (data.success) {
                toast.success('Assistant published successfully', {
                    style: TOAST_STYLE.SUCCESS
                });
                this.setValue("LoadingPublishAssistant", false);
                this.#processes["publishAssistant"] = false;
            } else {
                toast.error('Failed to publish assistant', {
                    style: TOAST_STYLE.ERROR
                });
                this.setValue("LoadingPublishAssistant", false);
                this.#processes["publishAssistant"] = false;
            }
        } else {
            toast.error('Failed to publish assistant', {
                style: TOAST_STYLE.ERROR
            });
            this.setValue("LoadingPublishAssistant", false);
            this.#processes["publishAssistant"] = false;
        }
    }

    talkToAssistant() {
        this.initCallManager();
        try {
            // Start the call with SMARTIE
            this.setValue('isCallLoading', true);
            const assistantId = this.getValue(ASSISTANT.SELECTED_ASSISTANT).id;
            const assistantName = this.getValue(ASSISTANT.SELECTED_ASSISTANT).name;

            this.callManager.startCall(assistantId).then(() => {
                toast.success(`Call started with ${assistantName}`, {
                    style: TOAST_STYLE.SUCCESS
                });
                this.setValue('isCallLoading', false);
            }).catch((error) => {
                toast.error('Failed to start call with SMARTIE', {
                    style: TOAST_STYLE.ERROR
                });
                this.setValue('vapiError', error.message || "Failed to start call with SMARTIE");
                this.setValue('isCallLoading', false);
            });
        } catch (error) {
            toast.error('Failed to start call with SMARTIE', {
                style: TOAST_STYLE.ERROR
            });
            this.setValue('vapiError', error.message || "Failed to start call with SMARTIE");
        }
    }

    endCall() {
        if (this.callManager) this.callManager.stopCall();
        this.setValue('isCallLoading', false);
    }

    async fetchAssistantConfig() {
        if (this.#assitantConfig) return this.#assitantConfig;
        const req = new assistantService.AssistantConfigRequest();
        return this.Parent.callFunc(0xb59511c6, req).then(({ result }) => {
            const deserialized = assistantService.AssistantConfigResponse.deserializeBinary(result);
            const config = deserialized.toObject();
            if (config.serverurl && !config.serverurl.includes("localhost"))
                if (config.serverurl) this.#assitantConfig = config;
            return config;
        });
    }

    fetchVoices() {
        if (this.#processes["fetchVoices"]) return;
        this.#processes["fetchVoices"] = true;
        const req = new assistantService.FetchVoicesRequest();
        req.setVoiceprovider("vapi")
        return this.Parent.callFunc(0x2ff8d88c, req).then(({ result }) => {
            const deserialized = assistantService.FetchVoicesResponse.deserializeBinary(result);
            const res = deserialized.toObject();
            this.setValue("voicesList", res.voicesList || []);
            return res.voicesList;
        }).catch((error) => {
            Logger.showError("Failed to fetch voices", error);
            toast.error('Failed to fetch voices', {
                style: TOAST_STYLE.ERROR
            });
        }).finally(() => {
            this.#processes["fetchVoices"] = false;
        })
    }

    listen() {
        if (!this.#listen) {
            this.#listen = RedisventService.Assistant.listen("assistant", Accounts.userId(), ({ event, data }) => {
                switch (event) {
                    case "remove":
                        this.DB.remove({ id: data._id });
                        break;
                    case "upsert":
                        break;
                    case "update":
                        const updateData = data.data;
                        delete updateData._id;
                        this.DB.update(
                            { assistantid: updateData.assistantid },
                            { $set: updateData }
                        );
                        break;
                    default:
                        Logger.showLog("Unknown event", event);
                        break;
                }
                this.activateWatch();
            });
        }
    }

    removeListener() {
        RedisventService.Assistant.remove(this.#listen);
    }
}
export default new AssistantWatcher(Client);