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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRepository = void 0;
const core_1 = require("@credo-ts/core");
const core_2 = require("@credo-ts/core");
const tsyringe_1 = require("tsyringe");
const UserProfileRecord_1 = require("./UserProfileRecord");
let UserProfileRepository = class UserProfileRepository extends core_2.Repository {
    constructor(storageService, eventEmitter) {
        super(UserProfileRecord_1.UserProfileRecord, storageService, eventEmitter);
        this.DEFAULT_USER_PROFILE_RECORD = 'DEFAULT_USER_PROFILE_RECORD';
    }
};
UserProfileRepository = __decorate([
    (0, tsyringe_1.scoped)(tsyringe_1.Lifecycle.ContainerScoped),
    __param(0, (0, tsyringe_1.inject)(core_1.InjectionSymbols.StorageService)),
    __metadata("design:paramtypes", [Object, core_1.EventEmitter])
], UserProfileRepository);
exports.UserProfileRepository = UserProfileRepository;
//# sourceMappingURL=UserProfileRepository.js.map