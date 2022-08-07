"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiMyInventory = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiMyInventory(key) {
    return httpClient_1.httpClient.get(`/my-inventory/?key=${key}`);
}
exports.apiMyInventory = apiMyInventory;
