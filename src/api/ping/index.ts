import {httpClient} from '../../utils/httpClient'

type ApiPingResponse = {
  success: boolean
}

export function apiPing(key: string): Promise<ApiPingResponse> {
  return httpClient.get(`/ping?key=${key}`)
}
