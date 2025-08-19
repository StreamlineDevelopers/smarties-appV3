import { Package } from "@tmq-dev-ph/tmq-dev-core-server";

// Package.addService({
//     file: "tmq/service.proto", ServiceNames: ["Service"], auth: false
// }, "service", { Service: require("../../../api/server/services/Service").default });

Package.addService({
    file: "tmq/HelloWorld.proto", ServiceNames: ["HelloWorldService"], auth: false
}, "helloworld", { HelloWorldService: require("../../server/services/HelloWorld").default });

Package.addService({
    file: "tmq/SalesEnablement.proto", ServiceNames: ["SalesEnablementService"], auth: false
}, "sales", { SalesEnablementService: require("../../server/services/SalesEnablement").default });

Package.addService({
    file: "tmq/ContentCreation.proto", ServiceNames: ["ContentCreationService"], auth: false
}, "content", { ContentCreationService: require("../../server/services/ContentCreation").default });

Package.addService({
    file: "tmq/CustomerEngagement.proto", ServiceNames: ["CustomerEngagementService"], auth: false
}, "customer", { CustomerEngagementService: require("../../server/services/CustomerEngagement").default });