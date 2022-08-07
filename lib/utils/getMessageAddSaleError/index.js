"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageAddSaleError = void 0;
function getMessageAddSaleError(error) {
    switch (error) {
        case 'bad_input':
            return 'Не верно указаны параметры';
        case 'inventory_not_loaded':
        case 'item_not_recieved':
        case 'item_not_in_inventory':
            return 'update inventory';
        case 'no_description_found':
            return 'стим не вернул описание предмета попробуйте позже';
        case 'item_not_inserted':
            return 'не удалось выставить на продажу';
        case 'bad_request':
            return 'Неверно указана цена или вообще не указана';
        default:
            return 'unknown';
    }
}
exports.getMessageAddSaleError = getMessageAddSaleError;
