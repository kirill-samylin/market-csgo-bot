import {httpClient} from '../../utils/httpClient'

type SetApiKeyResponse = {
  success: boolean
}

export function apiSetApiKey(key: string, apiKey: string): Promise<SetApiKeyResponse> {
  return httpClient.get(`/set-steam-api-key?key=${key}&steam-api-key=${apiKey}`)
}
