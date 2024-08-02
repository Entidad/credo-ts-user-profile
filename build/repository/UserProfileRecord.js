"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRecord = void 0;
const core_1 = require("@credo-ts/core");
const uuid_1 = require("uuid");
// TODO: Store more data than display name, display picture and description
class UserProfileRecord extends core_1.BaseRecord {
    constructor(props) {
        var _a, _b;
        super();
        this.type = UserProfileRecord.type;
        if (props) {
            this.id = (_a = props.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
            this.createdAt = (_b = props.createdAt) !== null && _b !== void 0 ? _b : new Date();
            this.displayName = props.displayName;
            this.displayPicture = props.displayPicture;
            this.description = props.description;
        }
    }
    getTags() {
        return Object.assign({}, this._tags);
    }
}
exports.UserProfileRecord = UserProfileRecord;
UserProfileRecord.type = 'UserProfileRecord';
//# sourceMappingURL=UserProfileRecord.js.map