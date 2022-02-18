import { useCallback } from 'react'
import { useWeb3Context } from '../context/web3'
import { useTokenSaleContract } from './useContract'

export default function useSwapCallback (tokenSaleAddress) {
  const { account } = useWeb3Context()
  const tokenSaleContract = useTokenSaleContract(tokenSaleAddress)

  return useCallback(async (typedValueWei) => {
    if (!tokenSaleContract || !typedValueWei) return

    await tokenSaleContract.methods
      .purchaseTokens()
      .send({
        from: account,
        value: typedValueWei
      })
  }, [tokenSaleContract, account])
}
