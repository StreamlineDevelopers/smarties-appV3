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

export const STEPS = {
    CURRENT_POSITION: "currentBlog",
}

class BlogWatcher extends Watcher2 {
    #data
    #processes = {};
    #lastBasis = null;
    #listen = null;
    constructor(parent) {
        super(parent);
        this.setValue(STEPS.CURRENT_POSITION, 0);
    }

    goNext() {
        console.log("Going to next step...");
        const currentPosition = this.getValue(STEPS.CURRENT_POSITION);
        this.setValue(STEPS.CURRENT_POSITION, currentPosition + 1);
    }
    goPrevious() {
        const currentPosition = this.getValue(STEPS.CURRENT_POSITION);
        if (currentPosition > 0) {
            this.setValue(STEPS.CURRENT_POSITION, currentPosition - 1);
        } else {
            toast.error("You are already at the first step.", {
                style: TOAST_STYLE.ERROR,
            });
        }
    }

}

export default new BlogWatcher(Client);