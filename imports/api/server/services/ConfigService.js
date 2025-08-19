import { Adapter, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import { tmq as config } from "../../common/static_codegen/tmq/config";

const {
    GetClientConfigRequest,
    GetClientConfigResponse,
    Config,
    ClientConfig,
    SmartiesAssistantConfig,
    AuthConfig
} = config;

export default {
    /**
     * Returns client-facing configuration from server settings
     * @param {Object} call
     * @param {GetClientConfigRequest} call.request
     * @param {function} callback
     */
    GetClientConfig: async function ({ request }, callback) {
        try {
            Logger.showDebug("ConfigService.GetClientConfig");

            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!"
                });
                return;
            }

            const settings = ServerInstance.Config || {};
            console.log('settings', settings);

            const clientSettings = settings.client || {};
            const smartiesSettings = clientSettings.smartiesAssistant || {};
            const authSettings = settings.auth || {};

            const response = new GetClientConfigResponse();
            response.success = true;
            response.error_message = "";

            const smartiesAssistantMsg = new SmartiesAssistantConfig();
            smartiesAssistantMsg.is_human_url = smartiesSettings.isHumanUrl || "";

            const clientMsg = new ClientConfig();
            clientMsg.smarties_assistant = smartiesAssistantMsg;

            const authMsg = new AuthConfig();
            authMsg.username = authSettings.username || "";
            authMsg.password = authSettings.password || "";

            const cfgMsg = new Config();
            cfgMsg.client = clientMsg;
            cfgMsg.auth = authMsg;

            response.config = cfgMsg;

            callback(null, response);
        } catch (error) {
            console.log('error', error);
            Logger.showError("ConfigService.GetClientConfig: Error - %s", error.message);
            const response = new GetClientConfigResponse();
            response.success = false;
            response.error_message = error.message || "Internal server error";
            callback(null, response);
        }
    }
};
