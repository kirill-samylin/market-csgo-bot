import {Settings} from '../../types'

export function isValidSetting(userSettings: Settings): boolean {
  if (userSettings.key.length < 10) {
    return false
  }
  if (!userSettings.onSendOffer) {
    return false
  }
  return true
}
