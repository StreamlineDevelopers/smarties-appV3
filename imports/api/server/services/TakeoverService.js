import { Adapter, Core, Logger } from "@tmq-dev-ph/tmq-dev-core-server";
import axios from "axios";
import { tmq as common } from "@tmq-dev-ph/tmq-dev-core-client/dist/static_codegen/tmq/common";
import { tmq as takeover } from "../../common/static_codegen/tmq/takeover";
const { CheckStatusRequest, StatusResponse, ToggleStatusRequest } = takeover;

export default {
    /**
     * Check takeover status
     * @param {Object} call
     * @param {CheckStatusRequest} call.request
     * @param {function} callback 
     */
    CheckStatus: async function ({ request }, callback) {
        try {
            const sessionId = request.sessionId;
            Logger.showDebug("TakeoverService.CheckStatus: sessionId=%s", sessionId);

            // Validate inbox ID
            if (!sessionId) {
                const response = new StatusResponse();
                response.success = false;
                response.state = "bot";
                callback(null, response);
                return;
            }

            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!"
                });
                return;
            }

            const data = ServerInstance.Config || {};
            const takeoverSettings = (data.client && data.client.smartiesAssistant) ? data.client.smartiesAssistant : {};

            const auth = Buffer.from(`${data.auth.username}:${data.auth.password}`).toString('base64');
            const res = await axios.get(takeoverSettings.isHumanUrl, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${auth}`
                },
                params: {
                    sessionId,
                }
            });
            const response = new StatusResponse();
            if (res.status === 200) {
                response.success = true;
                response.state = res.data.status;
            } else {
                response.success = false;
                response.state = "bot";
            }
            callback(null, response);

        } catch (error) {
            Logger.showError("TakeoverService.CheckStatus: Error - %s", error.message);

            const response = new StatusResponse();
            response.success = false;
            response.state = "bot";
            callback(null, response);
        }
    },
    /**
     * Toggle takeover status
     * @param {Object} call
     * @param {ToggleStatusRequest} call.request
     * @param {function} callback 
     */
    ToggleStatus: async function ({ request }, callback) {
        try {
            const sessionId = request.sessionId;
            Logger.showDebug("TakeoverService.ToggleStatus: sessionId=%s", sessionId);

            // Validate inbox ID
            if (!sessionId) {
                const response = new StatusResponse();
                response.success = false;
                response.state = "bot";
                callback(null, response);
                return;
            }

            const { ServerInstance } = Adapter;
            if (!ServerInstance) {
                callback({
                    code: 500,
                    message: "Server instance not initialized!"
                });
                return;
            }

            const data = ServerInstance.Config || {};
            const takeoverSettings = (data.client && data.client.smartiesAssistant) ? data.client.smartiesAssistant : {};

            const auth = Buffer.from(`${data.auth.username}:${data.auth.password}`).toString('base64');
            const res = await axios.post(takeoverSettings.isHumanUrl, {
                sessionId,
                state: request.state,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Basic ${auth}`
                }
            })

            const response = new StatusResponse();
            if (res.status === 200) {
                response.success = true;
                response.state = res.data.status;
            } else {
                response.success = false;
                response.state = "bot";
            }
            callback(null, response);

        } catch (error) {
            Logger.showError("TakeoverService.ToggleStatus: Error - %s", error.message);

            const response = new StatusResponse();
            response.success = false;
            response.state = "bot";
            callback(null, response);
        }
    }
};
