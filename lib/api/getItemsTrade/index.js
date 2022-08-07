"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetItemsTrade = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiGetItemsTrade(key) {
    return httpClient_1.httpClient.get(`/trade-request-give-p2p-all?key=${key}`);
}
exports.apiGetItemsTrade = apiGetItemsTrade;
