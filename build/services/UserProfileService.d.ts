import { AgentContext, ConnectionService, EventEmitter, InboundMessageContext } from '@credo-ts/core';
import { UserProfileRepository, UserProfileRecord } from '../repository';
import { UserProfileData } from '../model';
import { RequestProfileMessage, GetProfileMessageOptions, ProfileMessage, ProfileMessageOptions } from '../messages';
export declare class UserProfileService {
    private userProfileRepository;
    private connectionService;
    private eventEmitter;
    constructor(userProfileRepository: UserProfileRepository, connectionService: ConnectionService, eventEmitter: EventEmitter);
    /**
     * Update current User Profile Record, persisting it in repository
     *
     * @param props object containing fields to be updated
     *
     * @returns updated User Profile Record
     */
    updateUserProfile(agentContext: AgentContext, props: Partial<UserProfileData>): Promise<UserProfileRecord>;
    /**
     * Get user profile. If not exists yet, it creates it with default
     * values.
     *
     * @returns User Profile Record
     */
    getUserProfile(agentContext: AgentContext): Promise<UserProfileRecord>;
    processProfile(messageContext: InboundMessageContext<ProfileMessage>): Promise<ProfileMessage | undefined>;
    createProfileMessage(options: ProfileMessageOptions): Promise<ProfileMessage>;
    createRequestProfileMessage(options: GetProfileMessageOptions): Promise<RequestProfileMessage>;
    processRequestProfile(messageContext: InboundMessageContext<RequestProfileMessage>): Promise<ProfileMessage | undefined>;
    private createProfileMessageAsReply;
}
