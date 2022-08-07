import {httpClient} from '../../utils/httpClient'

type Cost = [number, number]

type ApiGetItemInfoResponse<T extends string> = {
  success: boolean;
  currency: "RUB",
  data: {
    [key in T]: {
      max: string | number,
      min: string | number,
      average: number,
      history: Cost[]
    }
  }
}

export function apiGetItemInfo<N extends string>(key: string, name: N): Promise<ApiGetItemInfoResponse<N>> {
  return httpClient.get(`/get-list-items-info?key=${key}&list_hash_name[]=${name}`)
}
