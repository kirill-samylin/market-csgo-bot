"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAddToSale = void 0;
const httpClient_1 = require("../../utils/httpClient");
function apiAddToSale(key, id, price) {
    return httpClient_1.httpClient.get(`/add-to-sale?key=${key}&id=${id}&price=${price * 100}&cur=RUB`);
}
exports.apiAddToSale = apiAddToSale;
