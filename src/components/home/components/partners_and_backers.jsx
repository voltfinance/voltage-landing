import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import beefy from '@/assets/images/partners/beefy.png'
import quillhash from '@/assets/images/partners/quillhash.png'
import ascend from '@/assets/images/partners/ascend.png'
import bittrex from '@/assets/images/partners/bittrex.png'
import infinity from '@/assets/images/partners/infinity.png'
import israeliBlockchain from '@/assets/images/partners/israeli_blockchain.png'
import mexc from '@/assets/images/partners/mexc.png'
import olaFinance from '@/assets/images/partners/ola_finance.png'
import poolz from '@/assets/images/partners/poolz.png'
import theGraph from '@/assets/images/partners/the_graph.png'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'

import alphaSigma from '@/assets/images/backers/alpha_sigma.png'
import alphaSquare from '@/assets/images/backers/alpha_square.png'
import angelDao from '@/assets/images/backers/angel_dao.png'
import aria from '@/assets/images/backers/aria.png'
import banterCapital from '@/assets/images/backers/banter_capital.png'
import collider from '@/assets/images/backers/collider.png'
import crtCapital from '@/assets/images/backers/crt_capital.png'
import exnetworkCapital from '@/assets/images/backers/exnetwork_capital.png'
import gbv from '@/assets/images/backers/gbv.png'
import gdaCapital from '@/assets/images/backers/gda_capital.png'
import metavest from '@/assets/images/backers/metavest.png'
import mvst from '@/assets/images/backers/mvst.png'
import node from '@/assets/images/backers/node.png'
import sheeshaFinance from '@/assets/images/backers/sheesha_finance.png'
import shima from '@/assets/images/backers/shima.png'
import sideDoor from '@/assets/images/backers/side_door.png'
import spark from '@/assets/images/backers/spark.png'
import techMeets from '@/assets/images/backers/tech_meets.png'
import blockchainFund from '@/assets/images/backers/blockchain_fund.png'
import trgc from '@/assets/images/backers/trgc.png'
import valhallaCapital from '@/assets/images/backers/valhalla_capital.png'
import zbsCapital from '@/assets/images/backers/zbs_capital.png'
import { isMobile } from 'react-device-detect'

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

const inverstorsLogos = [
  beefy,
  quillhash,
  ascend,
  bittrex,
  infinity,
  israeliBlockchain,
  theGraph,
  poolz,
  olaFinance,
  mexc
]

const backersLogos = [
  spark,
  shima,
  collider,
  crtCapital,
  trgc,
  techMeets,
  mvst,
  node,
  gbv,
  blockchainFund,
  alphaSigma,
  zbsCapital,
  gdaCapital,
  sheeshaFinance,
  metavest,
  alphaSquare,
  banterCapital,
  aria,
  angelDao,
  exnetworkCapital,
  valhallaCapital,
  sideDoor
]

function PartnersAndBackers () {
  return (
    <>
      <section className='inverstors'>
        {!isMobile && <PassiveIncome />}
        <div className='title'>Partners</div>
        <div className='subtitle'>Our partners have been instrumental in allowing us to deliver a superior product. <br /> Voltage will remove many hurdles allowing other projects on the Fuse Network to grow.</div>
        <div className='images'>
          {
            isMobile
              ? (
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay
                  centeredSlides
                  modules={[Autoplay]}
                >
                  {
                    inverstorsLogos.map((logo, key) => (
                      <SwiperSlide key={key}><img src={logo} /></SwiperSlide>
                    ))
                  }
                </Swiper>
                )
              : inverstorsLogos.map((logo, key) => (
                <div className='image' key={key}>
                  <img src={logo} />
                </div>
              ))
          }
        </div>
      </section>

      <section className='backers'>
        <div className='title'>Backers</div>
        <div className='images'>
          {
            isMobile
              ? (
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay
                  centeredSlides
                  modules={[Autoplay]}
                >
                  {
                    backersLogos.map((logo, key) => (
                      <SwiperSlide key={key}><img src={logo} /></SwiperSlide>
                    ))
                  }
                </Swiper>
                )
              : backersLogos.map((logo, key) => (
                <div className='image' key={key}>
                  <img src={logo} />
                </div>
              ))
          }
        </div>

      </section>
    </>
  )
}

export default PartnersAndBackers
