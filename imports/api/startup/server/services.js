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
