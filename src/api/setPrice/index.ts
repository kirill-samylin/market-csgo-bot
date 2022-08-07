import {httpClient} from '../../utils/httpClient'

type ApiSetPriceResponse = {
  success: boolean
}

export function apiSetPrice(key: string, id: string, price: number): Promise<ApiSetPriceResponse> {
  return httpClient.get(`/set-price?key=${key}&item_id=${id}&price=${price * 100}&cur=RUB'`)
}
