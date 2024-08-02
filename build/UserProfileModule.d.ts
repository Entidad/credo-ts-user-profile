import type { DependencyManager, FeatureRegistry, Module } from '@credo-ts/core';
import { UserProfileApi } from './UserProfileApi';
import { UserProfileModuleConfig } from './UserProfileModuleConfig';
export declare class UserProfileModule implements Module {
    readonly config: UserProfileModuleConfig;
    readonly api: typeof UserProfileApi;
    constructor(config?: UserProfileModuleConfig);
    /**
     * Registers the dependencies of the question answer module on the dependency manager.
     */
    register(dependencyManager: DependencyManager, featureRegistry: FeatureRegistry): void;
}
