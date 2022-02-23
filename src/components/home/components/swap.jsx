import React from 'react'
import { useWeb3Context } from '@/context/web3'
import { isMobile } from 'react-device-detect'
import Card from './volt_sale_card'
import logo from '@/assets/images/voltage_logo.svg'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'
import rocket from '@/assets/images/rocket.svg'

function Ecosystem () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '15%', left: '18%' }}
      />
      <img
        src={planet}
        style={{ position: 'absolute', top: '15%', right: '20%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '0%', left: '5%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '65%', right: '5%' }}
      />
      <img
        src={rocket}
        style={{ position: 'absolute', top: '50%', right: '10%' }}
      />
      <img
        src={rocket}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'rotate(180deg)'
        }}
      />
    </>
  )
}

function EcosystemMobile () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '5%', right: '66%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '7%', right: '40%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '9%', right: '9%' }}
      />
    </>
  )
}

function NotConncted () {
  const { toggleWeb3Modal } = useWeb3Context()
  return (
    <div className='emptystate'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='texts'>
          <div>Here you can claim your tokens as they unlock. Thank you for being a part of our ecosystem!</div>
        </div>
      </div>
      <div className='actions'>
        <button
          className='button button--primary'
          onClick={toggleWeb3Modal}
        >
          Connect wallet
        </button>
        <a
          rel='noreferrer noopener'
          target='_blank'
          href='https://docs.fuse.io'
        >
          Learn about Volt
        </a>
      </div>
    </div>
  )
}

function Swap () {
  const { account } = useWeb3Context()
  return (
    <div className='swap'>
      {isMobile ? <EcosystemMobile /> : <Ecosystem />}
      {account && <div className='title'>Fuse Ecosystem Round</div>}
      <div className='swap__wrapper'>
        {account ? <Card /> : <NotConncted />}
      </div>
    </div>
  )
}

export default Swap
