import type { Settings } from './types';
declare type JsonLog = {
    message: string;
    log?: object;
};
export declare function jsonLog(obj: JsonLog): void;
declare function setApiKey(apiKey: string): void;
declare function start(userSettings: Settings): void;
declare const _default: {
    setApiKey: typeof setApiKey;
    start: typeof start;
};
export default _default;
