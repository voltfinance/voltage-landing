import React from 'react'
import Countdown from 'react-countdown'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'
import classNames from 'classnames'

function Starts ({ isSmall }) {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '10%', left: '18%' }}
      />
      <img
        src={isSmall ? star : planet}
        style={{ position: 'absolute', top: '5%', right: '5%' }}
      />
      {
        !isSmall && (

          <img
            src={star}
            style={{ position: 'absolute', bottom: '4%', left: '5%' }}
          />
        )
      }
      <img src={star} style={{ position: 'absolute', bottom: '9%', right: '5%' }} />
    </>
  )
}

const startDate = 1646748000000

function CountDown ({ completeComponent, isSmall = false }) {
  return (
    <Countdown
      date={startDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        return completed
          ? completeComponent
          : (
            <div className={classNames('countdown', { 'countdown--small': isSmall })}>
              <Starts isSmall={isSmall} />
              <div className={classNames('content', { 'content--small': isSmall, 'content--large': !isSmall })}>
                <div>{days !== 0 && `${days} days`} {hours}:{minutes}:{seconds}</div>
              </div>
            </div>
            )
      }}
    />
  )
}

export default CountDown
