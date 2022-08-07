import {httpClient} from '../../utils/httpClient'
import {Item} from '../../types/item'

type ApiMyInventoryResponse = {
  success: boolean;
  items: Item[];
}

export function apiMyInventory(key: string): Promise<ApiMyInventoryResponse> {
  return httpClient.get(`/my-inventory/?key=${key}`)
}
