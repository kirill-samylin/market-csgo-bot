"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiTest = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiTest(key) {
    return httpClient_1.httpClient.get(`/test?key=${key}`);
}
exports.apiTest = apiTest;
