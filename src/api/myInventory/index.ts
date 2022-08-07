import {httpClient} from '../../utils/httpClient'
import {Item} from '../../types/item'

type ApiMyInventoryResponse = {
  success: boolean;
  items: Item[];
}

export function apiMyInventory(key: string): Promise<ApiMyInventoryResponse> {
  return httpClient.get(`/v2/my-inventory/?key=${key}`)
}
