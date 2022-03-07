import { useCallback, useEffect, useState } from 'react'
import { useWeb3Context } from '../context/web3'

export default function useFuseBalance () {
  const { account, web3, chainId } = useWeb3Context()
  const [balance, setBalance] = useState(null)

  const fetchBalance = useCallback(
    async address => {
      if (web3 && address) {
        const balance = await web3.eth.getBalance(address)
        setBalance(balance)
      }
    },
    [setBalance, web3]
  )

  useEffect(() => {
    fetchBalance(account)
  }, [account, web3, chainId])

  return balance
}
