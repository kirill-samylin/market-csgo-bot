declare type ApiPingResponse = {
    success: boolean;
};
export declare function apiPing(key: string): Promise<ApiPingResponse>;
export {};
