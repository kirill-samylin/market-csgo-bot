"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetMoney = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiGetMoney(key) {
    return httpClient_1.httpClient.get(`/get-money?key=${key}`);
}
exports.apiGetMoney = apiGetMoney;
