import { Core, Adapter, Logger, Path } from "@tmq-dev-ph/tmq-dev-core-server";
import { Vent } from "meteor/cultofcoders:redis-oplog";
import { Accounts } from "meteor/accounts-base";
import { WebApp } from "meteor/webapp";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import RedisVentService from "./classes/events/RedisVentService";
import { RedisVentServer } from 'redisvent-module/src/index.js';

Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.Accounts = Accounts;
Adapter.Assets = Assets;
Adapter.WebApp = WebApp;
Adapter.Vent = Vent;


class Server extends Core {
    #redisVentServer = null;
    #isInitialized = false;
    constructor(settings) {
        super(settings);
        // this.settings = settings;
        this.loadDefaultServices();
        this.onLogin((user) => {
            console.log("onLogin", user);
        });

        this.#redisVentServer = new RedisVentServer();

    }

    get RedisVentServer() {
        return this.#redisVentServer;
    }

    get IsRedisVentInitialized() {
        return this.#isInitialized;
    }


    async startRedis() {
        if (this.#isInitialized) return;

        try {
            await this.#redisVentServer.initialize({
                redis: {
                    host: 'localhost',
                    port: 6379
                },
                wsPort: 3502,
                debug: true
            });
            this.#isInitialized = true;
            console.log('✓ RedisVent server initialized');
        } catch (error) {
            console.error('Failed to initialize RedisVent:', error);
            throw error; // Don't exit in Meteor, throw instead
        }
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