import { useCallback } from 'react'
import { useWeb3Context } from '../context/web3'

const FUSE_CHAIN = {
  chainId: '0x7a',
  chainName: 'Fuse Network',
  nativeCurrency: {
    name: 'Fuse',
    symbol: 'FUSE',
    decimals: 18
  },
  rpcUrls: ['https://rpc.fuse.io'],
  blockExplorerUrls: ['https://explorer.fuse.io']
}

export default function useSwitchNetwork () {
  const { web3 } = useWeb3Context()

  return useCallback(async () => {
    if (!web3) return

    try {
      await web3.currentProvider.request({
        method: 'wallet_addEthereumChain',
        params: [FUSE_CHAIN]
      })
    } catch (error) {
      console.error('Failed to switch network', error)
    }
  }, [web3])
}
