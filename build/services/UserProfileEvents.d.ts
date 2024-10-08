import { BaseEvent, ConnectionRecord } from '@credo-ts/core';
import { ConnectionProfileKey } from '../messages';
import { UserProfileData } from '../model';
import { UserProfileRecord } from '../repository';
export declare enum ProfileEventTypes {
    UserProfileUpdated = "UserProfileUpdated",
    UserProfileRequested = "UserProfileRequested",
    ConnectionProfileUpdated = "ConnectionProfileUpdated"
}
export interface UserProfileRequestedEvent extends BaseEvent {
    type: ProfileEventTypes.UserProfileRequested;
    payload: {
        connection: ConnectionRecord;
        query?: ConnectionProfileKey[];
    };
}
export interface UserProfileUpdatedEvent extends BaseEvent {
    type: ProfileEventTypes.UserProfileUpdated;
    payload: {
        userProfile: UserProfileRecord;
        previousUserProfileData: UserProfileData;
    };
}
export interface ConnectionProfileUpdatedEvent extends BaseEvent {
    type: ProfileEventTypes.ConnectionProfileUpdated;
    payload: {
        profile: UserProfileData;
        connection: ConnectionRecord;
    };
}
