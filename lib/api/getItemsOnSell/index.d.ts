import { Status } from '../../types/item';
declare type Item = {
    item_id: string;
    assetid: string;
    classid: string;
    instanceid: string;
    real_instance: string;
    market_hash_name: string;
    position: number;
    price: number;
    currency: "USD";
    status: Status;
    live_time: number;
    left: null;
    botid: string;
};
declare type ApiGetItemsOnSellResponse = {
    success: boolean;
    "items": Item[];
};
export declare function apiGetItemsOnSell(key: string): Promise<ApiGetItemsOnSellResponse>;
export {};
