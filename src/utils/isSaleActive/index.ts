import {Settings} from '../../types'
import {SettingsSale} from '../../types/setting'

export function isSaleActive(settings: Settings): settings is SettingsSale  {
  return !!settings?.percentDiscount;
}
