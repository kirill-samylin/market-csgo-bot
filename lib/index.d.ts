import type { Settings } from './types';
declare type JsonLog = {
    message: string;
    log?: object;
};
export declare function jsonLog(obj: JsonLog): void;
export declare function setApiKey(apiKey: string): void;
export declare function start(userSettings: Settings): void;
export {};
