declare type ApiGetMoney = {
    money: number;
    currency: "RUB";
    success: boolean;
};
export declare function apiGetMoney(key: string): Promise<ApiGetMoney>;
export {};
