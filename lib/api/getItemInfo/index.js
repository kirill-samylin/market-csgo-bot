"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetItemInfo = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiGetItemInfo(key, name) {
    return httpClient_1.httpClient.get(`/get-list-items-info?key=${key}&list_hash_name[]=${name}`);
}
exports.apiGetItemInfo = apiGetItemInfo;
