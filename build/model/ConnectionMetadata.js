"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConnectionProfile = exports.getConnectionProfile = void 0;
const getConnectionProfile = (record) => record.metadata.get('UserProfile');
exports.getConnectionProfile = getConnectionProfile;
const setConnectionProfile = (record, metadata) => record.metadata.add('UserProfile', metadata);
exports.setConnectionProfile = setConnectionProfile;
//# sourceMappingURL=ConnectionMetadata.js.map