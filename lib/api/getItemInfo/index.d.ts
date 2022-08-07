declare type Cost = [number, number];
declare type ApiGetItemInfoResponse<T extends string> = {
    success: boolean;
    currency: "RUB";
    data: {
        [key in T]: {
            max: string | number;
            min: string | number;
            average: number;
            history: Cost[];
        };
    };
};
export declare function apiGetItemInfo<N extends string>(key: string, name: N): Promise<ApiGetItemInfoResponse<N>>;
export {};
