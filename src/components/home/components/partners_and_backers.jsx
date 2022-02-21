import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import beefy from '@/assets/images/partners/beefy.png'
import quillhash from '@/assets/images/partners/quillhash.png'
import ascend from '@/assets/images/partners/ascend.png'
import bittrex from '@/assets/images/partners/bittrex.png'
import enjinstarter from '@/assets/images/partners/enjinstarter.png'
import infinity from '@/assets/images/partners/infinity.png'
import israeliBlockchain from '@/assets/images/partners/israeli_blockchain.png'
import mexc from '@/assets/images/partners/mexc.png'
import olaFinance from '@/assets/images/partners/ola_finance.png'
import poolz from '@/assets/images/partners/poolz.png'
import the_graph from '@/assets/images/partners/the_graph.png'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'

import alpha_sigma from '@/assets/images/backers/alpha_sigma.png'
import alpha_square from '@/assets/images/backers/alpha_square.png'
import angel_dao from '@/assets/images/backers/angel_dao.png'
import avg from '@/assets/images/backers/avg.png'
import banter_capital from '@/assets/images/backers/banter_capital.png'
import collider from '@/assets/images/backers/collider.png'
import crt_capital from '@/assets/images/backers/crt_capital.png'
import exnetwork_capital from '@/assets/images/backers/exnetwork_capital.png'
import gbv from '@/assets/images/backers/gbv.png'
import gda_capital from '@/assets/images/backers/gda_capital.png'
import metavest from '@/assets/images/backers/metavest.png'
import mvst from '@/assets/images/backers/mvst.png'
import node from '@/assets/images/backers/node.png'
import royale from '@/assets/images/backers/royale.png'
import sheesha_finance from '@/assets/images/backers/sheesha_finance.png'
import shima from '@/assets/images/backers/shima.png'
import side_door from '@/assets/images/backers/side_door.png'
import spark from '@/assets/images/backers/spark.png'
import tech_meets from '@/assets/images/backers/tech_meets.png'
import blockchain_fund from '@/assets/images/backers/blockchain_fund.png'
import trgc from '@/assets/images/backers/trgc.png'
import triangle from '@/assets/images/backers/triangle.png'
import valhalla_capital from '@/assets/images/backers/valhalla_capital.png'
import velvet from '@/assets/images/backers/velvet.png'
import zbs_capital from '@/assets/images/backers/zbs_capital.png'
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
  the_graph,
  enjinstarter,
  poolz,
  olaFinance,
  mexc
]

const backersLogos = [
  spark,
  shima,
  collider,
  crt_capital,
  trgc,
  tech_meets,
  mvst,
  node,
  gbv,
  blockchain_fund,
  alpha_sigma,
  zbs_capital,
  gda_capital,
  sheesha_finance,
  metavest,
  alpha_square,
  banter_capital,
  velvet,
  avg,
  triangle,
  angel_dao,
  exnetwork_capital,
  royale,
  valhalla_capital,
  side_door
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
              ? <Swiper
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
              ? <Swiper
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
