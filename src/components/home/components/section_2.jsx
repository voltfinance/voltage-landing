import React from 'react'
import computer from '@/assets/images/computer.png'
import apple from '@/assets/images/appstore.png'
import google from '@/assets/images/googleplay.png'
import star from '@/assets/images/star.svg'
import { isMobile } from 'react-device-detect'

function Supercharge () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '5%', left: '10%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '40%', left: '2%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '12%', right: '9%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '42%', right: '5%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '65%', right: '13%' }}
      />
    </>
  )
}

function SuperchargeModile () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', bottom: '-1%', left: '10%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '20%', left: '2%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '1%', right: '9%' }}
      />
    </>
  )
}

function Secion2 () {
  return (
    <section className='section_2'>
      {isMobile ? <SuperchargeModile /> : <Supercharge />}
      <div className='title'>Supercharge your experience with Fuse Cash</div>
      <div className='subtitle'>Imagine being in full control of your finances while earning the highest interest <br /> rate to date. Voltage is a non-custodial platform that brings cutting edge finacial <br /> tools to your fingertips.</div>
      <img className='image' src={computer} />
      <div className='stores'>
        <a rel='noreferrer noopener' target='_blank' href='https://play.google.com/store/apps/details?id=io.fuse.cash'>
          {' '}
          <img src={google} />
        </a>
        <a rel='noreferrer noopener' target='_blank' href='https://apps.apple.com/us/app/fuse-cash/id1559937899'>
          <img src={apple} />{' '}
        </a>
      </div>

    </section>
  )
}

export default Secion2
