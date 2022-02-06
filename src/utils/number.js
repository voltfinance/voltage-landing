import BigNumber from 'bignumber.js'

export function toWei (value, decimals) {
    return new BigNumber(value).div(10 ** decimals).integerValue(BigNumber.ROUND_DOWN).toString()
}

export function fromWei (value, decimals) {
    if (!value) {
        return 0
    }
    return new BigNumber(value).multipliedBy(10 ** decimals).toString()
}
