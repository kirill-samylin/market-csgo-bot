import {Settings} from '../../types'

export function installUserSettings(setting: Settings, userSetting: Settings) {
  Object.assign(setting, userSetting)
}
