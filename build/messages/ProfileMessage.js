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
exports.ProfileMessage = void 0;
const core_1 = require("@credo-ts/core");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ProfileMessage extends core_1.AgentMessage {
    constructor(options) {
        var _a, _b;
        super();
        this.type = ProfileMessage.type.messageTypeUri;
        if (options) {
            this.id = (_a = options.id) !== null && _a !== void 0 ? _a : this.generateId();
            this.setThread({
                threadId: options.threadId,
            });
            this.profile = Object.assign(Object.assign({}, options.profile), { displayPicture: options.profile.displayPicture ? '#displayPicture' : undefined, displayIcon: options.profile.displayIcon ? '#displayIcon' : undefined });
            if (options.profile.displayPicture) {
                // If there is a display picture, we need to add an attachment including picture data
                this.addAppendedAttachment(new core_1.Attachment({
                    id: 'displayPicture',
                    mimeType: options.profile.displayPicture.mimeType,
                    data: {
                        base64: options.profile.displayPicture.base64,
                        links: options.profile.displayPicture.links,
                    },
                }));
            }
            if (options.profile.displayIcon) {
                // If there is a display icon, we need to add an attachment including picture data
                this.addAppendedAttachment(new core_1.Attachment({
                    id: 'displayIcon',
                    mimeType: options.profile.displayIcon.mimeType,
                    data: {
                        base64: options.profile.displayIcon.base64,
                        links: options.profile.displayIcon.links,
                    },
                }));
            }
            this.sendBackYours = (_b = options.sendBackYours) !== null && _b !== void 0 ? _b : false;
        }
    }
}
ProfileMessage.type = (0, core_1.parseMessageType)('https://didcomm.org/user-profile/1.0/profile');
__decorate([
    (0, core_1.IsValidMessageType)(ProfileMessage.type),
    __metadata("design:type", Object)
], ProfileMessage.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)({ name: 'send_back_yours' }),
    __metadata("design:type", Boolean)
], ProfileMessage.prototype, "sendBackYours", void 0);
exports.ProfileMessage = ProfileMessage;
//# sourceMappingURL=ProfileMessage.js.map