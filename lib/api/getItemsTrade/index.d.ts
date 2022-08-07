import { Offer } from '../../types/offer';
declare type ApiGetItemsTradeResponse = {
    success: boolean;
    hash: string;
    offers: Offer[];
};
export declare function apiGetItemsTrade(key: string): Promise<ApiGetItemsTradeResponse>;
export {};
