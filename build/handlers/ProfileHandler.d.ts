import { MessageHandler, MessageHandlerInboundMessage, OutboundMessageContext } from '@credo-ts/core';
import { ProfileMessage } from '../messages';
import { UserProfileService } from '../services';
export declare class ProfileHandler implements MessageHandler {
    supportedMessages: (typeof ProfileMessage)[];
    private userProfileService;
    constructor(userProfileService: UserProfileService);
    handle(inboundMessage: MessageHandlerInboundMessage<ProfileHandler>): Promise<OutboundMessageContext<ProfileMessage> | undefined>;
}
