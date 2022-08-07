import { Item } from '../../types/item';
declare type ApiMyInventoryResponse = {
    success: boolean;
    items: Item[];
};
export declare function apiMyInventory(key: string): Promise<ApiMyInventoryResponse>;
export {};
