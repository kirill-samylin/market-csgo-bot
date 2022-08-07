import { Offer } from './offer';
declare type BaseSettings = {
    key: string;
    onSendOffer: (offer: Offer) => void;
    onGetPrice?: (marketName: string) => number;
    onError?: (error: object) => void;
    onMessage?: (message: string) => void;
    minPriceForSale?: number;
    isViewLogs?: boolean;
    percentDiscount?: number;
    timeIntervalSecond?: number;
};
export declare type SettingsSale = BaseSettings & {
    percentDiscount: number;
    timeIntervalSecond: number;
};
export declare type Settings = BaseSettings | SettingsSale;
export {};
