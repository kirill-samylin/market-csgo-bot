import {httpClient} from '../../utils/httpClient'
import {Status} from '../../types/item'

type Item = {
  item_id: string
  assetid: string
  classid: string
  instanceid: string
  real_instance: string
  market_hash_name: string
  position: number,
  price: number,
  currency: "USD",
  status: Status,
  live_time: number
  left: null,
  botid: string
}

type ApiGetItemsOnSellResponse = {
  success: boolean,
  "items": Item[]
}


export function apiGetItemsOnSell(key: string): Promise<ApiGetItemsOnSellResponse> {
  return httpClient.get(`/items?key=${key}`)
}
