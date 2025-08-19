import core from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Watcher2 } from "../Watcher2";
import Client from "../Client";
import { toast } from 'sonner';
import { TOAST_STYLE } from "../../common/const";
import { Accounts } from 'meteor/tmq:accounts';
import { loyaltyMembers } from "./data/loyaltyMember";
const { Adapter, Logger } = core;

Adapter.Meteor = Meteor;
Adapter.Accounts = Accounts;

export const TABLE = {
    LOADING_MEMBERS: 'loadingMembers',
    MEMBERS: 'members',
}

class BuildLoyaltyWatcher extends Watcher2 {
    #data
    #processes = {};
    #lastBasis = null;
    #listen = null;
    constructor(parent) {
        super(parent);
    }

    searchLoyaltyMembers(value) {
        console.log("Searching loyalty members with value:", value);
    }

    fetchLoyaltyMembers() {
        this.setValue(TABLE.LOADING_MEMBERS, true);
        // Simulate fetching data
        this.setValue(TABLE.MEMBERS, loyaltyMembers);
        setTimeout(() => {
            this.setValue(TABLE.LOADING_MEMBERS, false);
        }, 1000);
    }
}

export default new BuildLoyaltyWatcher(Client);