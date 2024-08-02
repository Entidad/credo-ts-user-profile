/**
 * UserProfileModuleConfigOptions defines the interface for the options of the UserProfileModuleConfig class.
 * This can contain optional parameters that have default values in the config class itself.
 */
export interface UserProfileModuleConfigOptions {
    /**
     * Whether to automatically send our profile when asked to do so.
     *
     * @default true
     */
    autoSendProfile?: boolean;
}
export declare class UserProfileModuleConfig {
    #private;
    private options;
    constructor(options?: UserProfileModuleConfigOptions);
    /** See {@link UserProfileModuleConfigOptions.autoSendProfile} */
    get autoSendProfile(): boolean;
}
