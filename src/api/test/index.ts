import {httpClient} from '../../utils/httpClient'

type ApiTestResponse = {
  success: boolean
  status: {
    user_token: boolean
    trade_check: boolean
    site_online: boolean
    site_notmpban: boolean
    steam_web_api_key: boolean
  }
}

export function apiTest(key: string): Promise<ApiTestResponse> {
  return httpClient.get(`/test?key=${key}`)
}
