declare type ApiSetPriceResponse = {
    success: boolean;
};
export declare function apiSetPrice(key: string, id: string, price: number): Promise<ApiSetPriceResponse>;
export {};
