import BigNumber from 'bignumber.js'

BigNumber.config({ EXPONENTIAL_AT: 100 })

export function toWei (value, decimals = 18) {
  if (!value) {
    return 0
  }
  return new BigNumber(value).multipliedBy(10 ** decimals).toString()
}

export function fromWei (value, decimals = 18) {
  if (!value) {
    return 0
  }
  return new BigNumber(value).div(10 ** decimals).toString()
}
