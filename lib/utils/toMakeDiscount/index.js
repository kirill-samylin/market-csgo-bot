"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMakeDiscount = void 0;
function toMakeDiscount(price, salePercent) {
    return price > 100 ?
        Math.round(price * (1 - salePercent / 100)) :
        price - 1;
}
exports.toMakeDiscount = toMakeDiscount;
