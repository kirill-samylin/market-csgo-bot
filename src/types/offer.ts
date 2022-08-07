export type OfferItem = {
  appid: number;
  contextid: number;
  assetid: number;
  amount: number;
}

export type Offer = {
  partner: 12345;
  token: string;
  tradeoffermessage: string;
  items: OfferItem[]
}
