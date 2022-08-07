type Status = {
  user_token: boolean
  trade_check: boolean
  site_online: boolean
  site_notmpban: boolean
  steam_web_api_key: boolean
}

export function getErrorMessageTest(status: Status): string {
  if (!status.steam_web_api_key) {
    return 'Please install api key !'
  }
  if (!status.site_online) {
    return `You don't online !`
  }
  if (!status.site_notmpban) {
    return `Bot banned !`
  }
  if (!status.trade_check) {
    return `Trade not working !`
  }
  if (!status.user_token) {
    return `Trade link don't install !`
  }
  return 'bride'
}
