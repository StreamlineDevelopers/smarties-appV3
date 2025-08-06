import { Meteor } from "meteor/meteor";

import Server from "../imports/api/server/Server";
import "../imports/api/startup/server/index";

Meteor.startup(() => {
  Server.startUp("Server running...");
  Server.startAllService().then(() => {
  });
});