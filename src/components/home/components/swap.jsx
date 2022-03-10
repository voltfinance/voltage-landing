import React from 'react'
import Countdown from 'react-countdown'
// import { useWeb3Context } from '@/context/web3'
// import useSwitchNetwork from '@/hooks/useSwitchNetwork'
import { isMobile } from 'react-device-detect'
// import { START_TIME, END_TIME } from '@/constants'
// import MyCountDown from './countdown'
// import Card from './volt_sale_card'
// import SuccessfulPurchaseModal from './modals/successful_purchase_modal'

import logo from '@/assets/images/voltage_logo.svg'
// import fuseLogo from '@/assets/images/fuse_logo.png'
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

function Thanks () {
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
        >
          <a
            rel='noreferrer noopener' target='_blank'
            href='http://vesting.voltage.finance'
          >
            Start claiming
          </a>
        </button>
        <a
          rel='noreferrer noopener'
          target='_blank'
          href='https://docs.voltage.finance/tokenomics'
        >
          Learn about Volt
        </a>
      </div>
    </div>
  )
}

// function SwitchToFuse () {
//   const switchNetwork = useSwitchNetwork()
//   return (
//     <div className='switch_to_fuse'>
//       <div className='content'>
//         <div className='logo'>
//           <img src={fuseLogo} />
//         </div>
//         <div className='texts'>Switch to Fuse Network</div>
//       </div>
//       <div className='actions'>
//         <button
//           className='button button--primary'
//           onClick={switchNetwork}
//         >
//           Switch
//         </button>
//       </div>
//     </div>
//   )
// }

function SoldOut () {
  return (
    <div className='soldout'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='round'>Fuse Ecosystem Round</div>
        <div className='sold'>Sold out</div>
        <div className='tnx'>Thank you for being part of Voltage finance</div>
      </div>
    </div>
  )
}

function Swap ({ formRef }) {
  // const { account, chainId } = useWeb3Context()
  return (
    <div className='swap' ref={formRef}>
      {isMobile ? <EcosystemMobile /> : <Ecosystem />}
      {/* <div className='title'>Fuse Ecosystem Round</div> */}
      <div className='swap__wrapper'>
        <Countdown
          date={1646913600000}
          renderer={({ completed }) => completed ? <Thanks /> : <SoldOut />}
        />
        {/* <MyCountDown
          date={START_TIME}
          completeComponent={
            <Countdown
              date={END_TIME}
              renderer={({ completed }) => completed
                ? account
                    ? (
                      <SuccessfulPurchaseModal
                        isOpen
                        closeModal={() => console.log('Close')}
                        account={account}
                        purchaseAmount={0}
                        tokenAmount={1}
                      />
                      )
                    : <NotConncted />
                : account ? chainId !== 122 ? <SwitchToFuse /> : <Card /> : <NotConncted />}
            />
          }
        /> */}
      </div>
    </div>
  )
}

export default Swap
