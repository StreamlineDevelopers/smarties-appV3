import { Package } from "@tmq-dev-ph/tmq-dev-core-server";

// Package.addService({
//     file: "tmq/service.proto", ServiceNames: ["Service"], auth: false
// }, "service", { Service: require("../../../api/server/services/Service").default });

Package.addService({
    file: "tmq/HelloWorld.proto", ServiceNames: ["HelloWorldService"], auth: false
}, "helloworld", { HelloWorldService: require("../../server/services/HelloWorld").default });

Package.addService({
    file: "tmq/assistant.proto", ServiceNames: ["AssistantService"], auth: false
}, "assistant", { AssistantService: require("../../server/services/AssistantService").default });

Package.addService({
    file: "tmq/fileUpload.proto", ServiceNames: ["FileService"], auth: false
}, "fileUpload", { FileService: require("../../server/services/FileService").default });

Package.addService({
    file: "tmq/knowledgeBase.proto", ServiceNames: ["KnowledgeBaseService"], auth: true
}, "knowledgeBae", { KnowledgeBaseService: require("../../server/services/KnowledgeBaseService").default });

Package.addService({
    file: "tmq/tool.proto", ServiceNames: ["ToolService"], auth: false
}, "tool", { ToolService: require("../../server/services/ToolService").default });

Package.addService({
    file: "tmq/phone.proto", ServiceNames: ["PhoneService"], auth: false
}, "phone", { PhoneService: require("../../server/services/PhoneService").default });

Package.addService({
    file: "tmq/requestDetails.proto", ServiceNames: ["RequestDetailsService"], auth: false
}, "requestDetails", { RequestDetailsService: require("../../server/services/RequestDetailsService").default });

Package.addService({
    file: "tmq/customBilling.proto", ServiceNames: ["CustomBillingService"], auth: false
}, "customBilling", { CustomBillingService: require("../../server/services/CustomBillingService").default });

Package.addService({
    file: "tmq/acc.proto", ServiceNames: ["AccService"], auth: true
}, "acc", { AccService: require("../../server/services/AccService").default });

Package.addService({
    file: "tmq/widgetConfig.proto", ServiceNames: ["WidgetConfigService"], auth: true
}, "widgetConfig", { WidgetConfigService: require("../../server/services/WidgetConfigService").default });

