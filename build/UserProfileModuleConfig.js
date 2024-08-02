"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserProfileModuleConfig_autoSendProfile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileModuleConfig = void 0;
class UserProfileModuleConfig {
    constructor(options) {
        _UserProfileModuleConfig_autoSendProfile.set(this, void 0);
        this.options = options !== null && options !== void 0 ? options : {};
        __classPrivateFieldSet(this, _UserProfileModuleConfig_autoSendProfile, this.options.autoSendProfile, "f");
    }
    /** See {@link UserProfileModuleConfigOptions.autoSendProfile} */
    get autoSendProfile() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _UserProfileModuleConfig_autoSendProfile, "f")) !== null && _a !== void 0 ? _a : true;
    }
}
exports.UserProfileModuleConfig = UserProfileModuleConfig;
_UserProfileModuleConfig_autoSendProfile = new WeakMap();
//# sourceMappingURL=UserProfileModuleConfig.js.map