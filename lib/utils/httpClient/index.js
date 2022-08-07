"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const axios_1 = require("axios");
const constants_1 = require("../../constants");
exports.httpClient = axios_1.default.create({
    withCredentials: true,
    baseURL: constants_1.API_BASE_URL,
});
exports.httpClient.interceptors.response.use(({ data }) => {
    return data;
}, error => ({ success: false, error: error.message }));
