import { Core, Adapter, Logger, Path } from "@tmq-dev-ph/tmq-dev-core-server";
import { Vent } from "meteor/cultofcoders:redis-oplog";
import { Accounts } from "meteor/accounts-base";
import { WebApp } from "meteor/webapp";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import RedisVentService from "./classes/events/RedisVentService";

Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.Accounts = Accounts;
Adapter.Assets = Assets;
Adapter.WebApp = WebApp;
Adapter.Vent = Vent;


class Server extends Core {
    constructor(settings) {
        super(settings);
        // this.settings = settings;
        this.loadDefaultServices();
        this.onLogin((user) => {
            console.log("onLogin", user);
        });
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