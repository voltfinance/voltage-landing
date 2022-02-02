import React, { useRef, useEffect, useState } from 'react'
import lottie from 'lottie-web'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import starsAnimationData from '@/assets/lotties/stars.json'
import lightingAnimationData from '@/assets/lotties/lighting.json'
import smokeAnimationData from '@/assets/lotties/smoke.json'
import github from '@/assets/images/github.png'
import telegram from '@/assets/images/telegram.png'
import twitter from '@/assets/images/twitter.png'
import voltage from '@/assets/images/voltage_icon.png'
import discord from '@/assets/images/discord.png'
import arrow from '@/assets/images/enter_app.png'
import NewsletterForm from './newsletter_form'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'

const HomePage = () => {
  const starsRef = useRef(null)
  const lightingRef = useRef(null)
  const smokeRef = useRef(null)
  const { animate } = useSelector(state => state.animation)
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)

  useOutsideClick(hamburgerRef, () => {
    console.log(`hamburgerRef ${isOpen}`)
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  useEffect(() => {
    if (smokeRef.current) {
      lottie.loadAnimation({
        animationData: smokeAnimationData,
        container: smokeRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true
      })
    }
  }, [])

  useEffect(() => {
    if (lightingRef.current) {
      lottie.loadAnimation({
        animationData: lightingAnimationData,
        container: lightingRef.current,
        renderer: 'svg',
        autoplay: animate,
        loop: false
      })
    }
  }, [animate])

  useEffect(() => {
    if (starsRef.current) {
      lottie.loadAnimation({
        animationData: starsAnimationData,
        container: starsRef.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [])

  return (
    <>
      <section className='homepage__container'>
        <div className='logo'>
          <img alt='voltage' src={voltage} />
          <a className='enter_app' rel='noreferrer noopener' target='_blank' href='https://app.voltage.finance'>
            <span>Enter App</span>
            <img src={arrow} />
          </a>
        </div>
        <div className='homepage'>
          {!isMobile && <div className='stars' ref={starsRef} />}
          {!isMobile && <div className='smoke' ref={smokeRef} />}
          {animate && <div className='lighting' ref={lightingRef} />}
          <div className='homepage__main grid-y align-spaced align-middle'>
            <div className='headline cell'>
              <h1 className='headline__title'>Frictionless DeFi is coming</h1>
              <p className='headline__text'>
                The DAO to bring the next billion
              </p>
            </div>
            <div ref={hamburgerRef}>
              <NewsletterForm setMenuOpen={setMenuOpen} isOpen={isOpen} />
            </div>
          </div>
        </div>
        <footer className='footer'>
          <a rel='noreferrer noopener' target='_blank' href='https://t.me/voltage_finance'>
            <img src={telegram} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://github.com/voltfinance/'>
            <img src={github} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://twitter.com/voltfinance'>
            <img src={twitter} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://discord.gg/voltagefinance'>
            <img src={discord} />
          </a>
        </footer>
      </section>
    </>
  )
}

export default HomePage
