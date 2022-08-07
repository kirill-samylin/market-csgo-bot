"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessageTest = void 0;
function getErrorMessageTest(status) {
    if (!status.steam_web_api_key) {
        return 'Please install api key !';
    }
    if (!status.site_online) {
        return `You don't online !`;
    }
    if (!status.site_notmpban) {
        return `Bot banned !`;
    }
    if (!status.trade_check) {
        return `Trade not working !`;
    }
    if (!status.user_token) {
        return `Trade link don't install !`;
    }
    return 'bride';
}
exports.getErrorMessageTest = getErrorMessageTest;
