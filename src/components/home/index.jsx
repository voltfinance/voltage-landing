import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import Secion2 from './components/section_2'
import Secion3 from './components/section_3'
// import Inverstors from './components/inverstors'
import Faqs from './components/faq'
import Swap from './components/swap'
import Timeline from './components/Timeline'
import Footer from './footer'
import Header from './header'

import starsAnimationData from '@/assets/lotties/stars.json'
import lightingAnimationData from '@/assets/lotties/lighting.json'
import smokeAnimationData from '@/assets/lotties/smoke.json'
import underline from '@/assets/images/underline.png'

const HomePage = () => {
  const starsRef = useRef(null)
  const lightingRef = useRef(null)
  const smokeRef = useRef(null)
  const { animate } = useSelector((state) => state.animation)

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
        <Header />
        <div className='homepage'>
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
      <Swap />
      {/* <Inverstors /> */}
      <Faqs />
      <Footer />
    </>
  )
}

export default HomePage
