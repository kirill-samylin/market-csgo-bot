declare type ApiTestResponse = {
    success: boolean;
    status: {
        user_token: boolean;
        trade_check: boolean;
        site_online: boolean;
        site_notmpban: boolean;
        steam_web_api_key: boolean;
    };
};
export declare function apiTest(key: string): Promise<ApiTestResponse>;
export {};
