import { useCallback } from 'react'
import { useWeb3Context } from '../context/web3'

export default function useAddToken () {
  const { web3 } = useWeb3Context()

  return useCallback(async () => {
    if (!web3) return

    try {
      await web3.currentProvider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4',
            symbol: 'VOLT',
            decimals: 18,
            image: '',
          }
      }})
    } catch (error) {
      console.error('Failed to add token', error)
    }
  }, [web3])
}
