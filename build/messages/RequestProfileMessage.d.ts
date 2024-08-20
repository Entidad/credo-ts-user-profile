import { AgentMessage } from '@credo-ts/core';
import { UserProfile } from '../model';
export interface GetProfileMessageOptions {
    id?: string;
    threadId?: string;
    query?: ConnectionProfileKey[];
}
export type ConnectionProfileKey = keyof UserProfile;
export declare class RequestProfileMessage extends AgentMessage {
    constructor(options?: GetProfileMessageOptions);
    readonly type: string;
    static readonly type: import("@credo-ts/core").ParsedMessageType;
    query?: ConnectionProfileKey[];
}
