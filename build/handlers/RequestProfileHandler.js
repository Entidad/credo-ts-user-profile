"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestProfileHandler = void 0;
const core_1 = require("@credo-ts/core");
const messages_1 = require("../messages");
class RequestProfileHandler {
    constructor(userProfileService) {
        this.supportedMessages = [messages_1.RequestProfileMessage];
        this.userProfileService = userProfileService;
    }
    async handle(inboundMessage) {
        const connection = inboundMessage.assertReadyConnection();
        const payload = await this.userProfileService.processRequestProfile(inboundMessage);
        if (payload) {
            return new core_1.OutboundMessageContext(payload, { agentContext: inboundMessage.agentContext, connection });
        }
    }
}
exports.RequestProfileHandler = RequestProfileHandler;
//# sourceMappingURL=RequestProfileHandler.js.map