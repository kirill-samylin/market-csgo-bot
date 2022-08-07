"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPing = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiPing(key) {
    return httpClient_1.httpClient.get(`/ping?key=${key}`);
}
exports.apiPing = apiPing;
