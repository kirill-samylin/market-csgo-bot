import { SaleError } from '../../types/sale';
declare type ApiAddToSaleResponseSuccess = {
    success: true;
    item_id: number;
};
declare type ApiAddToSaleResponseError = {
    success: false;
    error: SaleError;
};
declare type ApiAddToSaleResponse = ApiAddToSaleResponseSuccess | ApiAddToSaleResponseError;
export declare function apiAddToSale(key: string, id: string, price: number): Promise<ApiAddToSaleResponse>;
export {};
