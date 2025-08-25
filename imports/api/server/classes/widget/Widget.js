import { WidgetManager } from "@tmq-justin/widget-client";
import { Core } from "@tmq-dev-ph/tmq-dev-core-server";

class Widget {
    constructor(config) {
        this.config = config;
        this.widget = new WidgetManager(config);
    }

    async registerUser({
        email,
        password,
        firstName,
        lastName
    }) {
        if (!email || !password || !firstName || !lastName) {
            throw new Error('Email, password, firstName, and lastName are required');
        }

        const authResponse = await this.widget.register({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        });

        return authResponse;
    }

    async loginUser({
        email, password
    }) {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const authResponse = await this.widget.login({
            email: email,
            password: password,
        });

        return authResponse;
    }

    async createWidgetConfig({
        name,
        domains,
        assistantIdCall,
        assistantIdLlm,
        userId
    }) {
        const formattedDomain = new URL(this.config.domain).hostname;
        const config = await this.widget.createConfig({
            name,
            domain: "Smarties-AI",
            allowedDomains: [...domains, formattedDomain],
            api: {
                call: {
                    serverUrl: this.config.call.serverUrl,
                    apiKey: this.config.call.apiKey,
                    token: this.config.call.token,
                    assistantId: assistantIdCall
                },
                llm: {
                    serverUrl: this.config.llm.serverUrl,
                    apiKey: this.config.llm.apiKey,
                    assistantId: assistantIdLlm
                }
            }
        });


        // const now = new Date().valueOf();

        // Core.getDB("widgetConfig", true).insertOne({
        //     siteId: config.siteId,
        //     name,
        //     domains,
        //     assistantIdCall,
        //     assistantIdLlm,
        //     userId,
        //     isActive: true,
        //     createdAt: now,
        //     updatedAt: now
        // })

        return {
            status: "success",
            config: {
                siteId: config.siteId,
                name,
                domains,
                assistantIdCall,
                assistantIdLlm,
                widgetUrl: config.widgetUrl,
            }
        };
    }

    async getWidgetConfig({
        userId
    }) {
        const configs = await Core.getDB("widgetConfig", true).find({ userId, isActive: true }).toArray();

        return {
            status: "success",
            configs
        };
    }


    async updateWidgetConfig({
        siteId,
        name,
        domains,
        assistantIdCall,
        assistantIdLlm,
    }) {
        try {
            const formattedDomain = new URL(this.config.domain).hostname;
            const config = await this.widget.updateSiteConfig({
                name,
                allowedDomains: [...domains, formattedDomain],
                api: {
                    call: {
                        serverUrl: this.config.call.serverUrl,
                        apiKey: this.config.call.apiKey,
                        assistantId: assistantIdCall
                    },
                    llm: {
                        serverUrl: this.config.llm.serverUrl,
                        apiKey: this.config.llm.apiKey,
                        token: this.config.llm.token,
                        assistantId: assistantIdLlm
                    }
                }
            }, siteId);

            const now = new Date().valueOf();

            Core.getDB("widgetConfig", true).updateOne({
                siteId
            }, {
                $set: {
                    name,
                    domains,
                    assistantIdCall,
                    assistantIdLlm,
                    updatedAt: now
                }
            });

            return {
                status: "success",
                config: {
                    siteId,
                    name: config.name,
                    domains: config.allowedDomains,
                    assistantIdCall: config.api.call.assistantId,
                    assistantIdLlm: config.api.llm.assistantId
                }
            };
        } catch (error) {
            console.error("Error updating widget config:", error);
            throw new Error("Failed to update widget configuration");
        }
    }

    async deleteWidgetConfig(siteId) {
        const config = await this.widget.updateSiteConfig({
            isActive: false
        }, siteId);

        Core.getDB("widgetConfig", true).updateOne({
            siteId
        }, {
            $set: {
                isActive: false,
                updatedAt: new Date().valueOf()
            }
        });

        return {
            status: "success",
        };
    }

    async loadWidget(siteId) {
        const script = await this.widget.loadWidget(siteId);
        return script;
    }
}

export default Widget;