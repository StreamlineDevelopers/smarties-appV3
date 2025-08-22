import { Package } from "@tmq-dev-ph/tmq-dev-core-server";

// Package.addService({
//     file: "tmq/service.proto", ServiceNames: ["Service"], auth: false
// }, "service", { Service: require("../../../api/server/services/Service").default });

Package.addService({
    file: "tmq/HelloWorld.proto", ServiceNames: ["HelloWorldService"], auth: false
}, "helloworld", { HelloWorldService: require("../../server/services/HelloWorld").default });

Package.addService({
    file: "tmq/inbox.proto", ServiceNames: ["InboxService"], auth: false
}, "inbox", { InboxService: require("../../server/services/InboxService").default });

Package.addService({
    file: "tmq/interaction.proto", ServiceNames: ["InteractionService"], auth: false
}, "interaction", { InteractionService: require("../../server/services/InteractionService").default });

Package.addService({
    file: "tmq/config.proto", ServiceNames: ["ConfigService"], auth: false
}, "configuration", { ConfigService: require("../../server/services/ConfigService").default });

Package.addService({
    file: "tmq/takeover.proto", ServiceNames: ["TakeoverService"], auth: false
}, "takeover", { TakeoverService: require("../../server/services/TakeoverService").default });