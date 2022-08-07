import {httpClient} from '../../utils/httpClient'
import {Offer} from '../../types/offer'

type ApiGetItemsTradeResponse = {
  success: boolean
  hash: string,
  offers: Offer[]
}

export function apiGetItemsTrade(key: string): Promise<ApiGetItemsTradeResponse> {
  return httpClient.get(`/trade-request-give-p2p-all?key=${key}`)
}
