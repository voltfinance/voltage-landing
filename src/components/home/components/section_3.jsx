import React from 'react'
import { useSpring, animated } from 'react-spring'
import farm from '@/assets/images/farm.png'
import lend from '@/assets/images/lend.png'
import stake from '@/assets/images/stake.png'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'
import { isMobile } from 'react-device-detect'

const cards = [
  {
    title: 'Farm',
    image: farm
  },
  {
    title: 'Lend',
    image: lend
  },
  {
    title: 'Stake',
    image: stake
  }
]

function Card ({ title, image }) {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    from: { transform: 'scale(0.99)' },
    config: { tension: 400, mass: 2, velocity: 5 }
  }))

  const updateHover = hovering => ({ transform: `scale(${hovering ? 1.03 : 1})` })
  return (
    <animated.div
      onMouseEnter={() => set(updateHover(true))}
      onMouseLeave={() => set(updateHover(false))}
      style={props}
      className='card'
    >
      <div className='image'>
        <img src={image} alt='card_image' />
      </div>
      <h2 className='title'>{title}</h2>
    </animated.div>
  )
}

function PassiveIncome () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', top: '29%', left: '19%' }}
      />
      <img
        src={planet}
        style={{ position: 'absolute', top: '65%', left: '12%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '97%', left: '19%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '24%', right: '19%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '50%', right: '12%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', top: '80%', right: '19%' }}
      />
    </>
  )
}

function PassiveIncomeMobile () {
  return (
    <>
      <img
        src={star}
        style={{ position: 'absolute', bottom: '5%', right: '40%' }}
      />
      <img
        src={star}
        style={{ position: 'absolute', bottom: '12%', right: '9%' }}
      />
    </>
  )
}

function Secion3 () {
  return (
    <section className='section_3'>
      {isMobile ? <PassiveIncomeMobile /> : <PassiveIncome />}
      <div className='section_3__title'>Create passive income</div>
      <div className='section_3__subtitle'>Let’s face it, we all want our money to stretch further. Explore your <br /> options to earn competitive yields with us below.</div>
      <div className='section_3__learnmore'>
        <a
          rel='noreferrer noopener' target='_blank'
          href='http://docs.voltage.finance'
          className='button button--primary'
          style={{
            width: '280px',
            margin: 'auto',
            lineHeight: '58px',
            textAlign: 'center',
            fontWeight: '500'
          }}
        >
          Learn more
        </a>
      </div>
      <div className='card__container'>
        {
          cards.map((item, index) => <Card {...item} key={index} />)
        }
      </div>

    </section>
  )
}

export default Secion3
