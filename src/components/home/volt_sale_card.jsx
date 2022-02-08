import React, { useCallback, useState } from 'react'
import useDerivedTokenSaleState from '../../hooks/useDerivedTokenSaleState'
import useSwapCallback from '../../hooks/useSwapCallback'
import NumericalInput from '../common/numerical_input'
import Select from '../common/select'
import arrowIcon from '../../assets/images/arrow.svg'
import { useWeb3Context } from '../../context/web3'
import useSwitchNetwork from '../../hooks/useSwitchNetwork'
import { toast } from 'react-toastify'

const VoltSaleCard = () => {
  const { account, toggleWeb3Modal, chainId } = useWeb3Context()

  const [typedValue, setTypedValue] = useState()

  const [tokenSaleAddress, setTokenSaleAddress] = useState(null)

  const { tokenAmount, typedValueWei, fuseBalance, inputError } = useDerivedTokenSaleState(tokenSaleAddress, typedValue)

  const swapCallback = useSwapCallback(tokenSaleAddress)

  const switchNetwork = useSwitchNetwork()

  const tokenSaleContracts = CONFIG?.tokenSaleContracts ?? {}

  const options = Object.keys(tokenSaleContracts).map(tokenSaleContract => ({
    value: tokenSaleContracts[tokenSaleContract],
    label: tokenSaleContract
  }))

  const onMax = useCallback(() => {
    setTypedValue(fuseBalance)
  }, [fuseBalance])

  const onSwap = useCallback(async () => {
    if (!swapCallback) return

    try {
      await swapCallback(typedValueWei)

      setTypedValue(undefined)
      setTokenSaleAddress(undefined)
      toast.success('Swap successful')
    } catch (error) {
      console.error('Swap failed', error)
      toast.error('Swap failed')
    }
  }, [swapCallback, typedValueWei, setTypedValue, setTokenSaleAddress])

  return (
    <div className='eco-round-card grid-container'>

      <div className='grid-x grid-margin-x align-bottom'>
        <div className='cell small-12'>
          <NumericalInput
            label='FUSE'
            value={typedValue}
            onChange={setTypedValue}
            onMax={onMax}
            showMax
          />
        </div>
        <div className='cell small-12'>
          <Select placeholder='Choose price' defaultValue={tokenSaleAddress} onChange={(option) => setTokenSaleAddress(option.value)} options={options} />
        </div>
      </div>

      <div className='eco-round-card__arrow-icon'>
        <img src={arrowIcon} alt='arrow icon' />
      </div>

      <div className='grid-x'>
        <div className='small-24'>
          <NumericalInput
            label='VOLT'
            value={tokenAmount}
          />
        </div>
      </div>
      {!account ? (
        <button className='button button--primary' onClick={toggleWeb3Modal}>
          Connect wallet
        </button>
      ) : chainId !== 122 ? (
        <button className='button button--primary' onClick={switchNetwork}>
          Switch to Fuse
        </button>
      ) : (
        <button className='button button--primary' onClick={onSwap} disabled={!!inputError}>
          {inputError ?? 'Swap'}
        </button>
      )}
    </div>
  )
}

export default VoltSaleCard
