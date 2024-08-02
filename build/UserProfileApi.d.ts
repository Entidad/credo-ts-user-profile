import { MessageSender, AgentContext } from '@credo-ts/core';
import { UserProfileService } from './services';
import { UserProfileData } from './model';
export declare class UserProfileApi {
    private messageSender;
    private userProfileService;
    private agentContext;
    constructor(agentContext: AgentContext, messageSender: MessageSender, userProfileService: UserProfileService);
    /**
     * Request the user profile for a given connection. It will store received UserProfileData into ConnectionRecord metadata
     * (`UserProfile` key).
     *
     * @param options
     */
    requestUserProfile(options: {
        connectionId: string;
    }): Promise<void>;
    /**
     * Sends User Profile to a given connection. It will send our own stored profile data if `profileData` is not specified.
     *
     * Note: to specify a profileData here does not mean that it will persist and be used in further profile data sharing. It
     * is meant in case we want to send diferent profiles to each connection or update it according to the context.
     *
     * @param options
     */
    sendUserProfile(options: {
        connectionId: string;
        profileData?: Partial<UserProfileData>;
        sendBackYours?: boolean;
    }): Promise<void>;
    /**
     * Update editable properties of user profile record and persist in repository
     *
     * @param props new user data (only fields that have changed)
     *
     * @returns updated User Profile data
     */
    updateUserProfileData(props: Partial<UserProfileData>): Promise<UserProfileData>;
    /**
     * Retrieve our User Profile Data from storage.
     *
     * @returns our own UserProfileData
     */
    getUserProfileData(): Promise<UserProfileData>;
}
