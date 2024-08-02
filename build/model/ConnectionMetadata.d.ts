import { ConnectionRecord } from '@credo-ts/core';
import { UserProfileData } from '../model';
export declare const getConnectionProfile: (record: ConnectionRecord) => UserProfileData | null;
export declare const setConnectionProfile: (record: ConnectionRecord, metadata: UserProfileData) => void;
