import { BaseRecord } from '@credo-ts/core';
import { UserProfileData, PictureData } from '../model';
export interface UserProfileStorageProps extends UserProfileData {
    id?: string;
    createdAt?: Date;
}
export declare class UserProfileRecord extends BaseRecord implements UserProfileStorageProps {
    displayName?: string;
    displayPicture?: PictureData;
    description?: string;
    static readonly type = "UserProfileRecord";
    readonly type = "UserProfileRecord";
    constructor(props: UserProfileStorageProps);
    getTags(): {
        [x: string]: import("@credo-ts/core").TagValue;
        [x: number]: never;
    };
}
