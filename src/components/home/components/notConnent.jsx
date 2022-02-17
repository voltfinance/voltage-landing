import React from 'React'
import logo from '@/assets/images/voltage_logo.svg'
import { useWeb3Context } from '@/context/web3'

function NotConnted () {
  const { account, toggleWeb3Modal } = useWeb3Context()
  return (
    <div className='emptystate'>
      <div className='emptystate__content'>
        <div>
          <img src={logo} width='180px' />
        </div>
        <div className='texts'>
          <div>
            Here you can claim your tokens as they unlock. Thank you for being a part of our ecosystem!
          </div>
          <span>
            500 Volt tokens available to unvest
          </span>
        </div>

        <div className='actions'>
          <button
            className='button button--primary'
            onClick={toggleWeb3Modal}
          >
            Connect wallet
          </button>
          <a rel='noreferrer noopener' target='_blank' href='https://docs.fuse.io'>Learn about Volt</a>
        </div>
      </div>
    </div>
  )
}

export default NotConnted
