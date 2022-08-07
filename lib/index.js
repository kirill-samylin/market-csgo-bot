"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.setApiKey = exports.jsonLog = void 0;
const api_1 = require("./api");
const getMessageAddSaleError_1 = require("./utils/getMessageAddSaleError");
const toMakeDiscount_1 = require("./utils/toMakeDiscount");
const isSaleActive_1 = require("./utils/isSaleActive");
const getErrorMessageTest_1 = require("./utils/getErrorMessageTest");
const isValidSetting_1 = require("./utils/isValidSetting");
const installUserSettings_1 = require("./utils/installUserSettings");
let balance = 0;
const setting = {
    key: '',
    minPriceForSale: 10,
    onSendOffer: (offer) => {
        throw new Error(JSON.stringify(offer));
    },
    isViewLogs: true,
};
function jsonLog(obj) {
    if (setting.isViewLogs) {
        // tslint:disable-next-line:no-console
        console.log(`${new Date()}: ${obj.message}`);
        if (obj.log) {
            // tslint:disable-next-line:no-console
            console.log(JSON.stringify(obj, null, 2));
        }
    }
}
exports.jsonLog = jsonLog;
function getItemPrice(name) {
    const itemName = encodeURI(name);
    const apiPrice = setting.onGetPrice ? setting.onGetPrice(name) : 0;
    return (0, api_1.apiGetItemInfo)(setting.key, itemName)
        .then((response) => {
        var _a;
        if (response.success && response.data && ((_a = response.data[name]) === null || _a === void 0 ? void 0 : _a.average)) {
            const marketPrice = Math.round(response.data[name].average);
            return marketPrice > apiPrice ? marketPrice : apiPrice;
        }
        return apiPrice;
    })
        .catch((err) => {
        jsonLog({
            message: `Don't get item price`,
            log: err,
        });
        return apiPrice;
    });
}
function itemToSale(id, price) {
    (0, api_1.apiAddToSale)(setting.key, id, price)
        .then((response) => {
        if (response.success) {
            jsonLog({ message: `Предмет ${id} выставлен на продажу за ${price} руб.` });
        }
        else {
            switch (response.error) {
                case 'inventory_not_loaded':
                case 'item_not_recieved':
                    updateInventory();
                    break;
                case 'item_not_in_inventory':
                    setTimeout(updateInventory, 15000);
                    break;
                default:
                    const message = (0, getMessageAddSaleError_1.getMessageAddSaleError)(response.error);
                    jsonLog({ message });
            }
        }
    })
        .catch((err) => jsonLog({
        message: 'Add to sale request failed',
        log: err,
    }));
}
function changePrice(itemId, itemPrice, discount) {
    const newPrice = (0, toMakeDiscount_1.toMakeDiscount)(itemPrice, discount);
    (0, api_1.apiSetPrice)(setting.key, itemId, newPrice)
        .then((response) => {
        if (response.success) {
            jsonLog({ message: `${itemId}:цена снижена на ${discount}% | ${itemPrice - newPrice}` });
        }
        else {
            jsonLog({ message: `Don't discount for item ${itemId}` });
        }
    })
        .catch((err) => jsonLog({
        message: 'Set price request failed',
        log: err,
    }));
}
function getItemsOnSell() {
    if ((0, isSaleActive_1.isSaleActive)(setting)) {
        (0, api_1.apiGetItemsOnSell)(setting.key)
            .then((response) => {
            if (response.success && response.items.length > 0) {
                response.items.forEach((item, index) => {
                    const price = Math.round(item.price);
                    setTimeout(() => changePrice(item.item_id, price, setting.percentDiscount), 1500 * index);
                });
            }
        })
            .catch((err) => jsonLog({
            message: 'Get items for sell request failed',
            log: err,
        }));
    }
}
function checkBalance() {
    (0, api_1.apiGetMoney)(setting.key)
        .then((response) => {
        if (response.success) {
            const money = Math.round(response.money);
            if (money !== balance) {
                balance = money;
                if (setting.onMessage) {
                    setting.onMessage(`new balance ${balance}`);
                }
            }
            else {
                jsonLog({ message: `Don't get balance` });
            }
        }
    })
        .catch((err) => jsonLog({
        message: 'Get money request failed',
        log: err,
    }));
}
function getItemsForTrade() {
    (0, api_1.apiGetItemsTrade)(setting.key)
        .then((response) => {
        if (response.success && response.offers && response.offers.length) {
            response.offers.forEach((offer) => setting.onSendOffer(offer));
        }
        else {
            jsonLog({ message: 'Нет предметов для отправки' });
        }
    })
        .catch((err) => jsonLog({
        message: 'Get items trade request failed',
        log: err,
    }));
}
function getItemsForSale() {
    (0, api_1.apiMyInventory)(setting.key)
        .then((response) => {
        if (response.success && response.items.length > 0) {
            response.items.forEach((item, index) => {
                setTimeout(() => {
                    getItemPrice(item.market_hash_name)
                        .then((price) => {
                        if (price > 1) {
                            if ((setting.minPriceForSale && price > setting.minPriceForSale) || !setting.minPriceForSale) {
                                jsonLog({ message: `id: ${item.id} | name: ${item.market_hash_name} | price: ${price}` });
                                itemToSale(item.id, price);
                            }
                            else {
                                jsonLog({ message: `Don't sale ${item.market_hash_name} to ${price}, need price for sale : ${setting.minPriceForSale}` });
                            }
                        }
                        else {
                            jsonLog({ message: `Don't get price for ${item.market_hash_name}` });
                        }
                    });
                }, 1500 * index);
            });
        }
        else {
            jsonLog({ message: 'No items for sale' });
        }
    })
        .catch((err) => jsonLog({
        message: 'My inventory request failed',
        log: err,
    }));
}
function updateInventory() {
    (0, api_1.apiUpdateInventory)(setting.key)
        .then((response) => {
        if (response.success) {
            getItemsForSale();
        }
        else {
            jsonLog({
                message: `Ups, bot don't update inventory !`
            });
        }
    })
        .catch((err) => jsonLog({
        message: 'UpdateInventory request failed',
        log: err,
    }));
}
function testForSale() {
    (0, api_1.apiTest)(setting.key)
        .then((response) => {
        if (response.success) {
            jsonLog({ message: 'All status "true", go function GetInv()' });
            updateInventory();
        }
        else {
            const message = (0, getErrorMessageTest_1.getErrorMessageTest)(response.status);
            jsonLog({ message });
        }
    })
        .catch((err) => jsonLog({
        message: 'Test request failed',
        log: err,
    }));
}
function online() {
    (0, api_1.apiPing)(setting.key)
        .then((response) => {
        if (response) {
            testForSale();
        }
        else {
            jsonLog({
                message: 'The bot was unable to get online status',
            });
        }
    })
        .catch((err) => jsonLog({
        message: 'Ping request failed',
        log: err,
    }));
}
function setApiKey(apiKey) {
    (0, api_1.apiSetApiKey)(setting.key, apiKey)
        .then((response) => {
        if (response.success) {
            jsonLog({ message: 'Api key tied' });
        }
        else {
            jsonLog({ message: 'Dont tied api key ' });
        }
    })
        .catch((err) => jsonLog({
        message: 'setApiKey request failed',
        log: err,
    }));
}
exports.setApiKey = setApiKey;
function start(userSettings) {
    if (!(0, isValidSetting_1.isValidSetting)(userSettings)) {
        throw new Error('No correct settings');
    }
    (0, installUserSettings_1.installUserSettings)(setting, userSettings);
    jsonLog({
        message: 'init setting',
        log: setting
    });
    jsonLog({ message: 'start sales' });
    setInterval(online, 120000);
    setInterval(checkBalance, 300000);
    setInterval(getItemsForTrade, 60000);
    if ((0, isSaleActive_1.isSaleActive)(setting)) {
        setInterval(getItemsOnSell, setting.timeIntervalSecond * 1000);
    }
}
exports.start = start;
