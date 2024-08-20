import { AgentMessage } from '@credo-ts/core';
import { UserProfile, UserProfileData } from '../model';
export interface ProfileMessageOptions {
    id?: string;
    profile: Partial<UserProfileData>;
    threadId?: string;
    sendBackYours?: boolean;
}
export declare class ProfileMessage extends AgentMessage {
    constructor(options?: ProfileMessageOptions);
    readonly type: string;
    static readonly type: import("@credo-ts/core").ParsedMessageType;
    profile: UserProfile;
    sendBackYours?: boolean;
}
