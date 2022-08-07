"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateInventory = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiUpdateInventory(key) {
    return httpClient_1.httpClient.get(`/update-inventory/?key=${key}`);
}
exports.apiUpdateInventory = apiUpdateInventory;
