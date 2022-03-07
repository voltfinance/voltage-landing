import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'
import { useSpring, animated } from 'react-spring'

import Secion2 from './components/section_2'
import Secion3 from './components/section_3'
import PartnersAndBackers from './components/partners_and_backers'
import Faqs from './components/faq'
import Swap from './components/swap'
import Timeline from './components/timeline'
import Footer from './footer'
import Header from './header'
import CountDown from './components/countdown'

import { START_TIME } from '@/constants'
import scrollAnimationData from '@/assets/lotties/scroll.json'
import starsAnimationData from '@/assets/lotties/stars.json'
import lightingAnimationData from '@/assets/lotties/lighting.json'
import smokeAnimationData from '@/assets/lotties/smoke.json'
import underline from '@/assets/images/underline.png'

const HomePage = () => {
  const starsRef = useRef(null)
  const lightingRef = useRef(null)
  const smokeRef = useRef(null)
  const { animate } = useSelector((state) => state.animation)
  const scrollRef = useRef(null)
  const formRef = useRef(null)

  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    if (scrollRef.current) {
      lottie.loadAnimation({
        animationData: scrollAnimationData,
        container: scrollRef.current,
        renderer: 'svg',
        loop: true
      })
    }
  }, [])

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

  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    from: { transform: 'scale(0.99)' },
    config: { tension: 400, mass: 2, velocity: 5 }
  }))

  const updateHover = hovering => ({ transform: `scale(${hovering ? 1.03 : 1})` })
  return (
    <>
      <section className='homepage__container'>
        <Header />
        <div className='homepage'>
          <div className='scroll' ref={scrollRef} />
          <div className='CountDown'>
            <animated.div
              onClick={() => scrollTo(formRef)}
              onMouseEnter={() => set(updateHover(true))}
              onMouseLeave={() => set(updateHover(false))}
              style={props}
            >
              <CountDown date={START_TIME} isSmall completeComponent={<></>} />
            </animated.div>
          </div>
          <img src={underline} style={{ position: 'absolute', bottom: '0%' }} />
          {!isMobile && <div className='stars' ref={starsRef} />}
          {/* {!isMobile && <div className='smoke' ref={smokeRef} />} */}
          {animate && <div className='lighting' ref={lightingRef} />}
          <div className='homepage__main grid-y align-spaced align-middle'>
            <div className='headline cell'>
              <h1 className='headline__title'>Frictionless DeFi is Here</h1>
              <p className='headline__text'>Welcome to a new era of finance</p>
            </div>
          </div>
          {isMobile && <Header />}
        </div>
      </section>
      <Secion2 />
      <Secion3 />
      <Timeline />
      <Swap formRef={formRef} />
      <PartnersAndBackers />
      <Faqs />
      <Footer />
    </>
  )
}

export default HomePage
