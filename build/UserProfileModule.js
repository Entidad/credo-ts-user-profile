"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileModule = void 0;
const core_1 = require("@credo-ts/core");
const UserProfileApi_1 = require("./UserProfileApi");
const services_1 = require("./services");
const UserProfileModuleConfig_1 = require("./UserProfileModuleConfig");
class UserProfileModule {
    constructor(config) {
        this.api = UserProfileApi_1.UserProfileApi;
        this.config = new UserProfileModuleConfig_1.UserProfileModuleConfig(config);
    }
    /**
     * Registers the dependencies of the question answer module on the dependency manager.
     */
    register(dependencyManager, featureRegistry) {
        // Api
        dependencyManager.registerContextScoped(UserProfileApi_1.UserProfileApi);
        // Config
        dependencyManager.registerInstance(UserProfileModuleConfig_1.UserProfileModuleConfig, this.config);
        // Services
        dependencyManager.registerSingleton(services_1.UserProfileService);
        // Feature Registry
        featureRegistry.register(new core_1.Protocol({
            id: 'https://didcomm.org/user-profile/1.0',
        }));
    }
}
exports.UserProfileModule = UserProfileModule;
//# sourceMappingURL=UserProfileModule.js.map