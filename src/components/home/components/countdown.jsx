import React from 'react'
import Countdown from 'react-countdown'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'
import classNames from 'classnames'
import { START_TIME } from '@/constants'

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

function CountDown ({ date = START_TIME, completeComponent, isSmall = false }) {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        return completed
          ? completeComponent
          : (
            <div className={classNames('countdown', { 'countdown--small': isSmall })}>
              <Starts isSmall={isSmall} />
              <div className={classNames('content', { 'content--small': isSmall, 'content--large': !isSmall })}>
                <div>{!isSmall && <>Be part of <br /> Voltage Finance <br /></>} {days !== 0 && <>{days} days<br /></>} {hours}:{minutes}:{seconds}</div>
              </div>
            </div>
            )
      }}
    />
  )
}

export default CountDown
