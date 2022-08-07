export function toMakeDiscount(price: number, salePercent: number) {
  return price > 100 ?
    Math.round(price * (1 - salePercent / 100)) :
    price - 1
}
