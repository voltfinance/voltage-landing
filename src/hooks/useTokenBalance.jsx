import { useCallback, useEffect, useState } from 'react'
import { useWeb3Context } from '../context/web3'
import { useTokenContract } from './useContract'

export default function useTokenBalance (address) {
  const { account } = useWeb3Context()
  const [balance, setBalance] = useState(null)
  const tokenContract = useTokenContract(address)

  const fetchBalance = useCallback(async () => {
    if (tokenContract) {
      const balance = await tokenContract.methods.balanceOf(account).call()
      setBalance(balance)
    }
  }, [setBalance])

  useEffect(() => {
    if (account) {
      fetchBalance()
    }
  }, [account])

  return balance
}
