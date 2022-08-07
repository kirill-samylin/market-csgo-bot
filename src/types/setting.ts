import {Offer} from './offer'

type BaseSettings = {
  key: string; // key csgo tm
  onSendOffer: (offer: Offer) => void;
  onGetPrice?: (marketName: string) => number;
  onError?: (error: object) => void;
  onMessage?: (message: string) => void;
  minPriceForSale?: number;
  isViewLogs?: boolean;
  percentDiscount?: number
  timeIntervalSecond?: number
};

export type SettingsSale = BaseSettings & {
  percentDiscount: number; // discount percentage over time,
  timeIntervalSecond: number; // time for sale
};

export type Settings = BaseSettings | SettingsSale;
