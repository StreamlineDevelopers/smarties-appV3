import { Core, Adapter, Logger, Path } from "@tmq-dev-ph/tmq-dev-core-server";
import { Vent } from "meteor/cultofcoders:redis-oplog";
import { Accounts } from "meteor/accounts-base";
import { WebApp } from "meteor/webapp";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import RedisVentService from "./classes/events/RedisVentService";
import { RedisVentServer } from 'redisvent-module';

Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.Accounts = Accounts;
Adapter.Assets = Assets;
Adapter.WebApp = WebApp;
Adapter.Vent = Vent;


class Server extends Core {
    #redisVentServer = null;
    constructor(settings) {
        super(settings);
        // this.settings = settings;
        this.loadDefaultServices();
        this.onLogin((user) => {
            console.log("onLogin", user);
        });
    }
    /**
     * @returns {RedisVentServer}
     */
    get RedisVentServer() {
        return this.#redisVentServer;
    }

    async startRedis() {
        if (this.#redisVentServer) return;
        try {
            const redisVentServer = new RedisVentServer();
            await redisVentServer.initialize({
                redis: {
                    host: this.Config.redisOplog.redis.host || 'localhost',
                    port: this.Config.redisOplog.redis.port || 6379
                },
                wsPort: this.Config.server.wsPort || 3502,
                debug: false
            });
            this.#redisVentServer = redisVentServer;
            Logger.showStatus('✓ RedisVent server initialized');
        } catch (error) {
            Logger.showError('Failed to initialize RedisVent:', error);
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