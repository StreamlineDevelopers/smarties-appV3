import { Core, Adapter, Logger, Path } from "@tmq-dev-ph/tmq-dev-core-server";
import { Vent } from "meteor/cultofcoders:redis-oplog";
import { Accounts } from "meteor/accounts-base";
import { WebApp } from "meteor/webapp";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import RedisVentService from "./classes/events/RedisVentService";
import { KBManager } from "./classes/knowledgeBase/KBManager";
import { Crawl } from "./classes/vapi/Crawl";
import { fetch } from "meteor/fetch";
import Billing from "billing-client";
import WidgetService from "../../api/server/classes/widget/Widget";
import fs from 'fs';
import { UploadManager } from "@tmq-justin/uploadmanager-client";

Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.Accounts = Accounts;
Adapter.Assets = Assets;
Adapter.WebApp = WebApp;
Adapter.Vent = Vent;


class Server extends Core {
    #crawl;
    #generatePrompts;
    #customAIAssistant;
    #twilio;
    #billing;
    #kbManager;
    #uploadManager;
    #widgetManager
    constructor(settings) {
        super(settings);
        // this.settings = settings;
        this.loadDefaultServices();
        this.#crawl = new Crawl(settings.crawl);
        this.onLogin((user) => {
            console.log("onLogin", user);
        });
        this.#widgetManager = new WidgetService({
            ...this.Config.widgetConfig,
            domain: this.Config.host
        })
        this.#kbManager = new KBManager(this.Config.KB_CLIENT, this.Config.host);
        console.log("billingInfo", this.Config.billingInfo);
        this.client = new Billing({
            serverUrl: this.Config.billingInfo.apiUrl,
            apiKey: this.Config.billingInfo.apiKey,
            onTokenRefresh: (token) => {
                console.log("token", token);
            },
            onError: (error) => {
                console.log("error", error);
            }
        });
        this.#uploadManager = new UploadManager(this.Config.public.uploadConfig);
    }
    /**
     * @returns {KBManager}
     */
    get KBManager() {
        return this.#kbManager;
    }
    /**
     * @returns {Crawl}
     */
    get Crawl() {
        return this.#crawl;
    }
    /**
     * @returns {UploadManager} 
     */
    get UploadManager() {
        return this.#uploadManager;
    }
    /**
     * @returns {WidgetService}
     */
    get WidgetManager() {
        return this.#widgetManager;
    }
    async initVapiConfig() {
        if (!this.Config || !this.Config.vapi) {
            console.error("VAPI settings are not defined.");
            return;
        }

        const coll = Core.getDB("clientConfig", true);

        // Update assistantId only if it exists
        if (this.settings.vapi.assistantId) {
            await coll.updateOne({ key: "assistantId" }, { $set: { value: this.settings.vapi.assistantId } }, { upsert: true });
        }
        // Update publicKey only if it exists
        if (this.settings.vapi.assistantId) {
            await coll.updateOne({ key: "publicKey" }, { $set: { value: this.settings.vapi.publicKey } }, { upsert: true });
        }
    }

    async registerBillingWebhook() {
        try {
            if (this.client) {
                const res = await this.client.registerAppWebhook(this.Config.app.name, `${this.Config.app.url}/billing/webhook`);
                console.log("Successfully registered billing webhook", res);
            }
        } catch (error) {
            Logger.showWarning("Error registering billing webhook:", error);
        }
    }

    startRedis() {
        return super.startRedis().then(() => {
            RedisVentService.publish(["sayHello", "INBOX", "INTERACTION", "TRANSCRIPT"], true); // register custom events here
            this.assignRedisVent(RedisVentService); // assign RedisVentService to Core
            /*
                Sample custom event trigger
                Meteor.setInterval(() => {
                    // trigger custom events here
                    RedisVentService.HelloWorld.triggerCustom(
                        "helloworld", // listener scope to trigger
                        "sayHello", // custom event to trigger
                        "hi1234", // listener unique id to trigger to
                        { msg: "Hello from Server" }); // data to send
                }, 5000);
                */
        });
    }
}
export default (Adapter.ServerInstance = new Server(Meteor.settings));