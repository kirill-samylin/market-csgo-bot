import {httpClient} from '../../utils/httpClient'

type ApiUpdateInventoryResponse = {
  success: boolean
}
export function apiUpdateInventory(key: string): Promise<ApiUpdateInventoryResponse> {
  return httpClient.get(`/UpdateInventory/?key=${key}`)
}
