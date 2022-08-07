import {SaleError} from '../../types/sale'

export function getMessageAddSaleError(error: SaleError) {
  switch (error) {
    case 'bad_input':
      return 'Не верно указаны параметры'
    case 'inventory_not_loaded':
    case 'item_not_recieved':
    case 'item_not_in_inventory':
      return 'update inventory'
    case 'no_description_found':
      return 'стим не вернул описание предмета попробуйте позже'
    case 'item_not_inserted':
      return 'не удалось выставить на продажу'
    case 'bad_request':
     return 'Неверно указана цена или вообще не указана'
    default:
     return 'unknown'
  }
}
