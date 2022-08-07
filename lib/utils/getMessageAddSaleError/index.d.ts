import { SaleError } from '../../types/sale';
export declare function getMessageAddSaleError(error: SaleError): "unknown" | "Не верно указаны параметры" | "update inventory" | "стим не вернул описание предмета попробуйте позже" | "не удалось выставить на продажу" | "Неверно указана цена или вообще не указана";
