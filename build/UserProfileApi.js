"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileApi = void 0;
const core_1 = require("@credo-ts/core");
const handlers_1 = require("./handlers");
const services_1 = require("./services");
let UserProfileApi = class UserProfileApi {
    constructor(agentContext, messageSender, userProfileService) {
        this.agentContext = agentContext;
        this.messageSender = messageSender;
        this.userProfileService = userProfileService;
        this.agentContext.dependencyManager.registerMessageHandlers([
            new handlers_1.ProfileHandler(this.userProfileService),
            new handlers_1.RequestProfileHandler(this.userProfileService),
        ]);
    }
    /**
     * Request the user profile for a given connection. It will store received UserProfileData into ConnectionRecord metadata
     * (`UserProfile` key).
     *
     * @param options
     */
    async requestUserProfile(options) {
        const connection = await this.agentContext.dependencyManager.resolve(core_1.ConnectionsApi).getById(options.connectionId);
        const message = await this.userProfileService.createRequestProfileMessage({});
        await this.messageSender.sendMessage(new core_1.OutboundMessageContext(message, { agentContext: this.agentContext, connection }));
    }
    /**
     * Sends User Profile to a given connection. It will send our own stored profile data if `profileData` is not specified.
     *
     * Note: to specify a profileData here does not mean that it will persist and be used in further profile data sharing. It
     * is meant in case we want to send diferent profiles to each connection or update it according to the context.
     *
     * @param options
     */
    async sendUserProfile(options) {
        const { connectionId, profileData, sendBackYours } = options;
        const connection = await this.agentContext.dependencyManager.resolve(core_1.ConnectionsApi).getById(connectionId);
        const myProfile = await this.userProfileService.getUserProfile(this.agentContext);
        const message = await this.userProfileService.createProfileMessage({
            profile: profileData !== null && profileData !== void 0 ? profileData : {
                displayName: myProfile.displayName,
                displayPicture: myProfile.displayPicture,
                description: myProfile.description,
            },
            sendBackYours,
        });
        await this.messageSender.sendMessage(new core_1.OutboundMessageContext(message, { agentContext: this.agentContext, connection }));
    }
    /**
     * Update editable properties of user profile record and persist in repository
     *
     * @param props new user data (only fields that have changed)
     *
     * @returns updated User Profile data
     */
    async updateUserProfileData(props) {
        await this.userProfileService.updateUserProfile(this.agentContext, props);
        return await this.getUserProfileData();
    }
    /**
     * Retrieve our User Profile Data from storage.
     *
     * @returns our own UserProfileData
     */
    async getUserProfileData() {
        const userProfile = await this.userProfileService.getUserProfile(this.agentContext);
        return {
            displayName: userProfile.displayName,
            displayPicture: userProfile.displayPicture,
            description: userProfile.description,
        };
    }
};
exports.UserProfileApi = UserProfileApi;
exports.UserProfileApi = UserProfileApi = __decorate([
    (0, core_1.injectable)(),
    __metadata("design:paramtypes", [core_1.AgentContext, core_1.MessageSender, services_1.UserProfileService])
], UserProfileApi);
//# sourceMappingURL=UserProfileApi.js.map