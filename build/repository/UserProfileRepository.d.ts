import { EventEmitter } from '@credo-ts/core';
import { Repository, StorageService } from '@credo-ts/core';
import { UserProfileRecord } from './UserProfileRecord';
export declare class UserProfileRepository extends Repository<UserProfileRecord> {
    readonly DEFAULT_USER_PROFILE_RECORD = "DEFAULT_USER_PROFILE_RECORD";
    constructor(storageService: StorageService<UserProfileRecord>, eventEmitter: EventEmitter);
}
