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
exports.UserProfileService = void 0;
const tsyringe_1 = require("tsyringe");
const core_1 = require("@credo-ts/core");
const repository_1 = require("../repository");
const UserProfileEvents_1 = require("./UserProfileEvents");
const messages_1 = require("../messages");
const model_1 = require("../model");
const UserProfileModuleConfig_1 = require("../UserProfileModuleConfig");
let UserProfileService = class UserProfileService {
    constructor(userProfileRepository, connectionService, eventEmitter) {
        this.userProfileRepository = userProfileRepository;
        this.connectionService = connectionService;
        this.eventEmitter = eventEmitter;
    }
    /**
     * Update current User Profile Record, persisting it in repository
     *
     * @param props object containing fields to be updated
     *
     * @returns updated User Profile Record
     */
    async updateUserProfile(agentContext, props) {
        const userProfile = await this.getUserProfile(agentContext);
        const previousUserProfileData = {
            displayName: userProfile.displayName,
            displayPicture: userProfile.displayPicture,
        };
        Object.assign(userProfile, props);
        await this.userProfileRepository.update(agentContext, userProfile);
        this.eventEmitter.emit(agentContext, {
            type: UserProfileEvents_1.ProfileEventTypes.UserProfileUpdated,
            payload: {
                userProfile,
                previousUserProfileData,
            },
        });
        return userProfile;
    }
    /**
     * Get user profile. If not exists yet, it creates it with default
     * values.
     *
     * @returns User Profile Record
     */
    async getUserProfile(agentContext) {
        let userProfileRecord = await this.userProfileRepository.findById(agentContext, this.userProfileRepository.DEFAULT_USER_PROFILE_RECORD);
        // If we don't have an user profile record yet, create it
        if (!userProfileRecord) {
            userProfileRecord = new repository_1.UserProfileRecord({
                id: this.userProfileRepository.DEFAULT_USER_PROFILE_RECORD,
            });
            await this.userProfileRepository.save(agentContext, userProfileRecord);
        }
        return userProfileRecord;
    }
    async processProfile(messageContext) {
        var _a;
        const connection = messageContext.assertReadyConnection();
        const agentContext = messageContext.agentContext;
        let currentProfile = (0, model_1.getConnectionProfile)(connection);
        const receivedProfile = messageContext.message.profile;
        const displayPictureData = receivedProfile.displayPicture
            ? messageContext.message.getAppendedAttachmentById('displayPicture')
            : undefined;
        const displayIconData = receivedProfile.displayIcon
            ? messageContext.message.getAppendedAttachmentById('displayIcon')
            : undefined;
        // TODO: use composed objects
        const newProfile = Object.assign(Object.assign({}, receivedProfile), { displayPicture: displayPictureData
                ? {
                    mimeType: displayPictureData === null || displayPictureData === void 0 ? void 0 : displayPictureData.mimeType,
                    base64: displayPictureData === null || displayPictureData === void 0 ? void 0 : displayPictureData.data.base64,
                    links: displayPictureData === null || displayPictureData === void 0 ? void 0 : displayPictureData.data.links,
                }
                : currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.displayPicture, displayIcon: displayIconData
                ? {
                    mimeType: displayIconData === null || displayIconData === void 0 ? void 0 : displayIconData.mimeType,
                    base64: displayIconData === null || displayIconData === void 0 ? void 0 : displayIconData.data.base64,
                    links: displayIconData === null || displayIconData === void 0 ? void 0 : displayIconData.data.links,
                }
                : currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.displayIcon });
        if (currentProfile) {
            Object.assign(currentProfile, newProfile);
        }
        else {
            currentProfile = newProfile;
        }
        (0, model_1.setConnectionProfile)(connection, currentProfile !== null && currentProfile !== void 0 ? currentProfile : {});
        await this.connectionService.update(agentContext, connection);
        this.eventEmitter.emit(agentContext, {
            type: UserProfileEvents_1.ProfileEventTypes.ConnectionProfileUpdated,
            payload: {
                connection,
                profile: (_a = (0, model_1.getConnectionProfile)(connection)) !== null && _a !== void 0 ? _a : {},
            },
        });
        const config = messageContext.agentContext.dependencyManager.resolve(UserProfileModuleConfig_1.UserProfileModuleConfig);
        if (messageContext.message.sendBackYours && config.autoSendProfile) {
            return this.createProfileMessageAsReply(agentContext, connection, messageContext.message.threadId);
        }
    }
    async createProfileMessage(options) {
        const message = new messages_1.ProfileMessage(options);
        return message;
    }
    async createRequestProfileMessage(options) {
        const message = new messages_1.RequestProfileMessage(options);
        return message;
    }
    async processRequestProfile(messageContext) {
        const connection = messageContext.assertReadyConnection();
        this.eventEmitter.emit(messageContext.agentContext, {
            type: UserProfileEvents_1.ProfileEventTypes.UserProfileRequested,
            payload: {
                connection,
                query: messageContext.message.query,
            },
        });
        const config = messageContext.agentContext.dependencyManager.resolve(UserProfileModuleConfig_1.UserProfileModuleConfig);
        if (config.autoSendProfile) {
            return await this.createProfileMessageAsReply(messageContext.agentContext, connection, messageContext.message.threadId);
        }
    }
    async createProfileMessageAsReply(agentContext, connection, threadId) {
        const userProfile = await this.getUserProfile(agentContext);
        const profile = {
            displayName: userProfile.displayName,
            displayPicture: userProfile.displayPicture,
            description: userProfile.description,
        };
        const message = this.createProfileMessage({
            profile,
            threadId,
        });
        return message;
    }
};
UserProfileService = __decorate([
    (0, tsyringe_1.scoped)(tsyringe_1.Lifecycle.ContainerScoped),
    __metadata("design:paramtypes", [repository_1.UserProfileRepository,
        core_1.ConnectionService,
        core_1.EventEmitter])
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=UserProfileService.js.map