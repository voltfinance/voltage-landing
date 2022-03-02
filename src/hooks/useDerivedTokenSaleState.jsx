import { useWeb3Context } from '../context/web3'
import { fromWei, toWei } from '../utils/number'
import { useTokenSaleContract } from './useContract'
import useFuseBalance from './useFuseBalance'
import useSingleContractCall from './useSingleContractCall'
import dayjs from 'dayjs'

export default function useDerivedTokenSaleState (address, typedValue) {
  const { account } = useWeb3Context()

  const tokenSaleContract = useTokenSaleContract(address)

  const typedValueWei = toWei(typedValue, 18)

  const startTime = useSingleContractCall(tokenSaleContract, 'startTime')
  const saleDuration = useSingleContractCall(tokenSaleContract, 'saleDuration')

  const fuseBalanceWei = useFuseBalance(account)
  const fuseBalance = fromWei(fuseBalanceWei)

  const maxPurchaseWei = useSingleContractCall(tokenSaleContract, 'purchaseLimit')
  const maxPurchase = fromWei(maxPurchaseWei)

  const tokenAmountWei = useSingleContractCall(tokenSaleContract, 'calculateTokenAmount', [typedValueWei])
  const tokenAmount = fromWei(tokenAmountWei)

  const availableTokensWei = useSingleContractCall(tokenSaleContract, 'availableTokensForSale')
  const availableTokens = fromWei(availableTokensWei)

  const currentTimestamp = dayjs().unix()

  let inputError
  if (!address) {
    inputError = 'Select Price'
  } else if (currentTimestamp < Number(startTime)) {
    inputError = 'Sale not started'
  } else if (currentTimestamp > Number(startTime) + Number(saleDuration)) {
    inputError = 'Sale ended'
  } else if (Number(typedValue) > Number(fuseBalance)) {
    inputError = 'Insufficient balance'
  } else if (Number(typedValue) > Number(maxPurchase)) {
    inputError = 'Amount greater than max purchase amount'
  } else if (Number(tokenAmount) > Number(availableTokens)) {
    inputError = 'Amount greater than available tokens for sale'
  }

  return {
    startTime,
    typedValueWei,
    inputError,
    fuseBalance,
    tokenAmount,
    availableTokens
  }
}
