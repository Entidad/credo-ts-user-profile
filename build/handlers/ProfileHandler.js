"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileHandler = void 0;
const core_1 = require("@credo-ts/core");
const messages_1 = require("../messages");
class ProfileHandler {
    constructor(userProfileService) {
        this.supportedMessages = [messages_1.ProfileMessage];
        this.userProfileService = userProfileService;
    }
    async handle(inboundMessage) {
        const connection = inboundMessage.assertReadyConnection();
        const payload = await this.userProfileService.processProfile(inboundMessage);
        if (payload) {
            return new core_1.OutboundMessageContext(payload, { agentContext: inboundMessage.agentContext, connection });
        }
    }
}
exports.ProfileHandler = ProfileHandler;
//# sourceMappingURL=ProfileHandler.js.map