"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSetting = void 0;
function isValidSetting(userSettings) {
    if (userSettings.key.length < 10) {
        return false;
    }
    if (!userSettings.onSendOffer) {
        return false;
    }
    return true;
}
exports.isValidSetting = isValidSetting;
