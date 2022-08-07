import {httpClient} from '../../utils/httpClient'
import {SaleError} from '../../types/sale'

type ApiAddToSaleResponseSuccess = {
  success: true
  item_id: number
}
/*
* bad_input - не верно указаны параметры
* inventory_not_loaded - необходимо обновить инвентарь
* item_not_recieved - необходимо обновить инвентарь
* no_description_found - стим не вернул описание предмета попробуйте позже
* item_not_inserted - не удалось выставить на продажу
* item_not_in_inventory — Предмет не найден в инвентаре, попробуйте сначала обновить его с помощью метода UpdateInventory и подождать 10-20 секунд перед повторной попыткой.
* bad_request — Неверно указана цена или вообще не указана
*/
type ApiAddToSaleResponseError = {
  success: false,
  error: SaleError
}

type ApiAddToSaleResponse = ApiAddToSaleResponseSuccess | ApiAddToSaleResponseError

export function apiAddToSale(key: string, id: string, price: number): Promise<ApiAddToSaleResponse> {
  return httpClient.get(`/add-to-sale?key=${key}&id=${id}&price=${price * 100}&cur=RUB`)
}
