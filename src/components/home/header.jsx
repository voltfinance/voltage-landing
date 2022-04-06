import React from 'react'
import wallet from '@/assets/images/wallet.svg'
import { useWeb3Context } from '@/context/web3'
import useSwitchNetwork from '@/hooks/useSwitchNetwork'
import useFuseBalance from '@/hooks/useFuseBalance'
import voltage from '@/assets/images/voltage_icon.png'
import { fromWei } from '@/utils/number'

function Header () {
  const { account, toggleWeb3Modal, chainId } = useWeb3Context()
  const switchNetwork = useSwitchNetwork()
  const fuseBalance = fromWei(useFuseBalance(account))

  return (
    <div className='header'>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <img className='icon' alt='voltage' src={voltage} />
        {account && (<button className='button button--network-add' onClick={switchNetwork()}>+ Add Fuse Network </button>)}
      </div>
      <div className='menu-wrap'>
        <a
          rel='noreferrer noopener' target='_blank'
          className='open_app'
          href='https://app.voltage.finance/'
        >
          Open App →
        </a>
        {!account
          ? (
            <button className='button-baseline' onClick={toggleWeb3Modal}>
              <img src={wallet} /> Connect wallet
            </button>
            )
          : chainId !== 122
            ? (
              <button className='button-baseline' onClick={switchNetwork}>
                Switch to Fuse
              </button>
              )
            : (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <button className='button-balance' style={{ borderLeft: '0px' }}>
                  {Number(fuseBalance).toFixed(2)} Fuse
                </button>
                <button className='button-web3'>
                  {account.substring(0, 6)}...{account.substring(38)}
                  <span />
                </button>
              </div>
              )}
      </div>
    </div>
  )
}

export default Header
