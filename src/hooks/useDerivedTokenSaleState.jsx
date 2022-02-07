import { useWeb3Context } from '../context/web3'
import { fromWei, toWei } from '../utils/number'
import { useTokenSaleContract } from './useContract'
import useFuseBalance from './useFuseBalance'
import useSingleContractCall from './useSingleContractCall'

export default function useDerivedTokenSaleState (address, typedValue) {
  const { account } = useWeb3Context()

  const tokenSaleContract = useTokenSaleContract(address)

  const typedValueWei = toWei(typedValue, 18)

  const startTime = useSingleContractCall(tokenSaleContract, 'startTime')
  const saleDuration = useSingleContractCall(tokenSaleContract, 'saleDuration')

  const fuseBalanceWei = useFuseBalance(account)
  const fuseBalance = fromWei(fuseBalanceWei, 18)

  const maxPurchaseWei = useSingleContractCall(tokenSaleContract, 'purchaseLimit')
  const maxPurchase = fromWei(maxPurchaseWei, 18)

  const tokenAmountWei = useSingleContractCall(tokenSaleContract, 'calculateTokenAmount', [typedValueWei])
  const tokenAmount = fromWei(tokenAmountWei, 18)

  let inputError
  // TODO: handle case where sale has ended and hasn't started
  if (!address) {
    inputError = 'Select Price'
  } else if (Number(typedValue) > Number(maxPurchase)) {
    inputError = 'Amount greater than max purchase amount'
  } else if (Number(typedValue) > Number(fuseBalance)) {
    inputError = 'Insufficient balance'
  }

  return {
    startTime,
    typedValueWei,
    inputError,
    fuseBalance,
    tokenAmount
  }
}
