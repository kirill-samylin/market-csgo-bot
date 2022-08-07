"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSaleActive = void 0;
function isSaleActive(settings) {
    return !!(settings === null || settings === void 0 ? void 0 : settings.percentDiscount);
}
exports.isSaleActive = isSaleActive;
