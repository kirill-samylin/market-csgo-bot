declare type SetApiKeyResponse = {
    success: boolean;
};
export declare function apiSetApiKey(key: string, apiKey: string): Promise<SetApiKeyResponse>;
export {};
