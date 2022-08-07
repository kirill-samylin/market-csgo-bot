"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetItemsOnSell = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiGetItemsOnSell(key) {
    return httpClient_1.httpClient.get(`/items?key=${key}`);
}
exports.apiGetItemsOnSell = apiGetItemsOnSell;
