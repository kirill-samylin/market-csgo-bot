/*
status = 1 — Вещь выставлена на продажу.
status = 2 — Вы продали вещь и должны ее передать боту.
status = 3 — Ожидание передачи боту купленной вами вещи от продавца.
status = 4 — Вы можете забрать купленную вещь.
 */

export type Status = "1" | "2" | "3" | "4"

export type Item = {
  id: string,
  classid: string,
  instanceid: string,
  market_hash_name: string,
  market_price: number,
  tradable: number
}
