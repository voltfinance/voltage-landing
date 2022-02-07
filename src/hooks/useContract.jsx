import { useMemo } from 'react'
import { useWeb3Context } from '../context/web3'
import ERC20_ABI from '../constants/abis/erc20.json'
import TOKEN_SALE_ABI from '../constants/abis/tokenSale.json'

export function useContract (address, ABI) {
  const { web3 } = useWeb3Context()

  return useMemo(() => {
    if (web3 && address && ABI) {
      return new web3.eth.Contract(ABI, address)
    } else {
      return null
    }
  }, [address, web3, ABI])
}

export function useTokenContract (address) {
  return useContract(address, ERC20_ABI)
}

export function useTokenSaleContract (address) {
  return useContract(address, TOKEN_SALE_ABI)
}
