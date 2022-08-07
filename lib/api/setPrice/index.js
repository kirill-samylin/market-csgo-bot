"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSetPrice = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiSetPrice(key, id, price) {
    return httpClient_1.httpClient.get(`/set-price?key=${key}&item_id=${id}&price=${price * 100}&cur=RUB'`);
}
exports.apiSetPrice = apiSetPrice;
