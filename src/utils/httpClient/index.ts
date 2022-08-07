import axios from 'axios'
import {API_BASE_URL} from '../../constants'

export const httpClient = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
})

httpClient.interceptors.response.use(
  ({data}) => {
    return data
  },
  error => ({ success: false, error: error.message })
)
