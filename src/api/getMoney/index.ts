import {httpClient} from '../../utils/httpClient'

type ApiGetMoney = {
  money: number;
  currency: "RUB";
  success: boolean
}

export function apiGetMoney(key: string): Promise<ApiGetMoney> {
  return httpClient.get(`/get-money?key=${key}`)
}
