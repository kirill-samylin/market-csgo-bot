"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSetApiKey = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiSetApiKey(key, apiKey) {
    return httpClient_1.httpClient.get(`/set-steam-api-key?key=${key}&steam-api-key=${apiKey}`);
}
exports.apiSetApiKey = apiSetApiKey;
