import { MessageHandler, MessageHandlerInboundMessage, OutboundMessageContext } from '@credo-ts/core';
import { RequestProfileMessage } from '../messages';
import { UserProfileService } from '../services';
export declare class RequestProfileHandler implements MessageHandler {
    supportedMessages: (typeof RequestProfileMessage)[];
    private userProfileService;
    constructor(userProfileService: UserProfileService);
    handle(inboundMessage: MessageHandlerInboundMessage<RequestProfileHandler>): Promise<OutboundMessageContext<import("../messages").ProfileMessage> | undefined>;
}
