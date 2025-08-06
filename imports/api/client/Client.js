import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Accounts } from "meteor/accounts-base";
import { DDP } from "meteor/ddp-client";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Watcher2 } from "./Watcher2";
import { toast } from "sonner";
import { TOAST_STYLE } from "../common/const";
const { Adapter, Logger, Account } = core;

Adapter.Accounts = Accounts;
Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.DDP = DDP;

class Client extends Watcher2 {
    constructor(parent) {
        super(parent);
        this.secureTransaction();
        this.account = new Account(this);
        this.startup();
    }
    // getKeys() {
    //     const userId = "123";
    //     const request = new PublicKeyRequest();
    //     request.setUserid(userId);
    //     return this.callFunc(0xad08520f, request).then(({ result }) => {
    //         const deserialized = PublicKeyResponse.deserializeBinary(result);
    //         const publicKey = deserialized.getPublickey();
    //         const assistantId = deserialized.getAssistantid();
    //         console.log(deserialized.toObject());
    //         return { publicKey, assistantId };
    //     });
    // }
    get CurrentUser() {
        return Accounts.user();
    }

    startup() {
        // const interval = setInterval(() => {
        //     if (this.initConfig()) {
        //         clearInterval(interval);
        //         this.initFeatures(this.Settings.featuresUrl, this.Settings.featuresClientKey, this.Settings.featuresAppName).then(() => {
        //             Logger.showDebug("Features initialized", this.Features.IsReady,);
        //         });
        //     }
        // }, 1000);
    }
    async loginWithPassword(email, password) {
        return this.account.loginAccount(email, password);
    }

    SignOut() {
        this.account.logoutAccount().then(() => {
            toast.success('Logout Successfully', {
                style: TOAST_STYLE.SUCCESS
            });
            window.location.reload();
        }).catch((err) => {
            Logger.showError("Logout failed", err);
        });
    }

    signup(username, password, email) {
        this.account.signup(email, password, password, email, { displayName: "KURT" }, {
            verificationIsCode: false,
        }).then((res) => {
            Logger.showDebug("Signup successful", res);
        }).catch((err) => {
            Logger.showError("Signup failed", err);
        });
    }
}

export default (Adapter.ClientInstance = new Client());