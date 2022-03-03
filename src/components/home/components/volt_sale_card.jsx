import React, { useCallback, useState, useRef } from 'react'
import useDerivedTokenSaleState from '@/hooks/useDerivedTokenSaleState'
import useSwapCallback from '@/hooks/useSwapCallback'
import NumericalInput from '@/components/common/numerical_input'
import Select from '@/components/common/select'
import arrowIcon from '@/assets/images/arrow.svg'
import info from '@/assets/images/info.svg'
import voltInfo from '@/assets/images/volt_info.png'
import docs from '@/assets/images/voltage_docs.svg'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'

import { useWeb3Context } from '@/context/web3'
import useSwitchNetwork from '@/hooks/useSwitchNetwork'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import SuccessfulPurchaseModal from './modals/successful_purchase_modal'

const VoltSaleCard = () => {
  const { account, toggleWeb3Modal, chainId } = useWeb3Context()

  const [typedValue, setTypedValue] = useState('')

  const [tokenSaleAddress, setTokenSaleAddress] = useState(null)

  const { tokenAmount, typedValueWei, fuseBalance, inputError, availableTokens } =
    useDerivedTokenSaleState(tokenSaleAddress, typedValue)

  const soldOut = Number(availableTokens) === 0

  const swapCallback = useSwapCallback(tokenSaleAddress)

  const switchNetwork = useSwitchNetwork()

  const tokenSaleContracts = CONFIG?.tokenSaleContracts ?? {}

  const options = Object.keys(tokenSaleContracts).map((tokenSaleContract) => ({
    value: tokenSaleContracts[tokenSaleContract],
    label: tokenSaleContract
  }))

  const [modalIsOpen, setIsOpen] = useState(false)
  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false)

  const onMax = useCallback(() => {
    setTypedValue(fuseBalance)
  }, [fuseBalance])

  const onSwap = useCallback(async () => {
    if (!swapCallback) return

    try {
      await swapCallback(typedValueWei)
      setTypedValue('')
      setTokenSaleAddress(null)
      setPurchaseModalIsOpen(true)
      toast.success('Purchase Successful!')
    } catch (error) {
      console.error('Swap failed', error)
      toast.error('Purchase Failed!')
    }
  }, [tokenAmount, swapCallback, typedValueWei, setTypedValue, setTokenSaleAddress])

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  const modalStyle = {
    overlay: {
      background: 'transparent'
    },
    content: {
      color: 'white',
      border: 'none',
      background: '#0B0C13',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px'
    }
  }

  const style = {
    textAlign: 'right',
    ':hover': {
      textDecoration: 'underline',
      color: '#ffffff'
    }
  }

  return (
    <>
      <SuccessfulPurchaseModal
        isOpen={purchaseModalIsOpen}
        closeModal={() => setPurchaseModalIsOpen(false)}
        account={account}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel='Voltage Info'
      >
        <div className='swap_info_modal'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={voltInfo} width='685px' />
            <a rel='noreferrer noopener' target='_blank' href='https://docs.voltage.finance' style={style}>
              {' '}
              <img src={docs} style={{ marginRight: '8px' }} />
              Voltage Docs →
            </a>
          </div>
        </div>
      </Modal>
      <div className='card grid-container'>
        <div className='grid-x grid-margin-x align-bottom'>
          <div className='cell small-24 medium-12'>
            <NumericalInput
              label='FUSE'
              value={typedValue}
              onChange={setTypedValue}
              onMax={onMax}
              showMax
            />
          </div>
          <div className='cell small-24 medium-12'>
            {
              !purchaseModalIsOpen && (
                <Select
                  placeholder='Choose price'
                  defaultValue={tokenSaleAddress}
                  onChange={(option) => setTokenSaleAddress(option.value)}
                  options={options}
                />
              )
            }
          </div>
        </div>

        <div className='card__arrow-icon'>
          <img src={arrowIcon} alt='arrow icon' />
        </div>

        <div className='grid-x'>
          <div className='small-24'>
            <NumericalInput label='VOLT' value={tokenAmount} />
          </div>
        </div>
        {
          !account
            ? (
              <button className='button button--primary' onClick={toggleWeb3Modal}>
                Connect wallet
              </button>
              )
            : chainId !== 122
              ? (
                <button className='button button--primary' onClick={switchNetwork}>
                  Switch to Fuse
                </button>
                )
              : tokenSaleAddress && soldOut
                ? (
                  <button className='button button--error' disabled>
                    This pool is fully sold
                  </button>
                  )
                : (
                  <button
                    className='button button--primary'
                    onClick={onSwap}
                    disabled={inputError}
                  >
                    {inputError ?? 'Purchase'}
                  </button>
                  )
        }
        <div className='info' onClick={openModal}>
          <span>
            More Info <img src={info} />
          </span>{' '}
        </div>
      </div>
    </>
  )
}

export default VoltSaleCard
