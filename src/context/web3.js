import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import Web3Modal from 'web3modal'
import Web3 from 'web3'

const Web3Context = createContext({})

export function Web3Provider ({ children }) {
  const [provider, setProvider] = useState(null)
  const [web3Data, setWeb3Data] = useState(null)

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true
  })

  const onConnect = useCallback(async provider => {
    const web3 = new Web3(provider)

    const accounts = await web3.eth.getAccounts()

    const account = accounts[0]

    const chainId = await web3.eth.getChainId()

    setWeb3Data({
      web3,
      account,
      chainId
    })

    if (!provider.on) return

    provider.on('close', () => {
      setWeb3Data(null)
    })

    provider.on('accountsChanged', accounts => {
      setWeb3Data(state => ({
        ...state,
        account: accounts[0]
      }))
    })

    provider.on('chainChanged', chainId => {
      setWeb3Data(state => ({
        ...state,
        chainId: web3.utils.hexToNumber(chainId)
      }))
    })
  }, [])

  web3Modal.on('connect', provider => {
    setProvider(provider)
    onConnect(provider)
  })

  web3Modal.on('disconnect', () => {
    setProvider(null)
  })

  const toggleWeb3Modal = useCallback(() => {
    web3Modal.toggleModal()
  }, [])

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      web3Modal.connect()
    }
  }, [])

  return (
    <Web3Context.Provider
      value={{
        provider,
        toggleWeb3Modal,
        ...web3Data
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3Context () {
  return useContext(Web3Context)
}
