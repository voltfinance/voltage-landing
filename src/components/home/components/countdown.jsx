import React from 'react'
import Countdown from 'react-countdown'
import star from '@/assets/images/star.svg'
import classNames from 'classnames'
import { START_TIME } from '@/constants'
import { useModal } from 'react-modal-hook'
import ReactModal from 'react-modal'
import SwapInfoModal from './modals/swap_info'
import info from '@/assets/images/info.svg'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'

function Starts () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '9%', left: '10%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '7%', left: '35%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '5%', right: '5%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '4%', left: '5%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '20%', right: '5%' }}
      />
    </>
  )
}

function CountDown ({ date = START_TIME, completeComponent, isSmall = false }) {
  const ref = React.useRef(null)
  useOutsideClick(ref, () => hideModal())

  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      style={{
        overlay: {
          background: 'rgb(0 0 0 / 57%)',
          backdropFilter: 'blur(1px)'
        },
        content: {
          color: 'white',
          border: 'none',
          background: 'transparent',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0px'
        }
      }}
    >
      <SwapInfoModal />
    </ReactModal>
  ))

  return (
    <Countdown
      date={date}
      renderer={({
        completed,
        formatted: { days, hours, minutes, seconds }
      }) => {
        return completed ? (
          completeComponent
        ) : (
          <div
            ref={ref}
            className={classNames('countdown', { 'countdown--small': isSmall })}
          >
            {!isSmall && <Starts />}
            <div
              className={classNames('content', {
                'content--small': isSmall,
                'content--large': !isSmall
              })}
            >
              <div>
                <div className='title'>
                  Ecosystem round at: 08.03.2022 12:00 UTC
                  <br />
                </div>
                <div className='timer'>
                  {days !== 0 && <>{days} days </>} {hours}:{minutes}:{seconds}
                  <small>s</small>
                </div>
              </div>
            </div>
            {!isSmall && (
              <div className='info' onClick={showModal}>
                <span>
                  More Info <img src={info} />
                </span>{' '}
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

export default CountDown
