import React from 'react'
import angel from '@/assets/images/investors/angel.png'
import beefy from '@/assets/images/investors/beefy.png'
import bitrex from '@/assets/images/investors/bittrex.png'
import blockchain from '@/assets/images/investors/blockchain.png'
import colider from '@/assets/images/investors/collider.png'
import enjin from '@/assets/images/investors/enjin.png'
import graph from '@/assets/images/investors/graph.png'
import ola from '@/assets/images/investors/ola.png'
import poolz from '@/assets/images/investors/poolz.png'
import quill from '@/assets/images/investors/quill.png'
import sheesha from '@/assets/images/investors/sheesha.png'
import unknown from '@/assets/images/investors/unknown.png'
import star from '@/assets/images/star.svg'
import planet from '@/assets/images/planet.svg'

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
  angel,
  beefy,
  bitrex,
  blockchain,
  colider,
  enjin,
  graph,
  ola,
  poolz,
  quill,
  sheesha,
  unknown
]

function Inverstors () {
  return (
    <section className='inverstors'>
      <PassiveIncome />
      <div className='title'>Investors</div>
      <div className='subtitle'>Our partners have been instrumental in allowing us to deliver a superior product. <br /> Voltage will remove many hurdles allowing other projects on the Fuse Network to grow.</div>
      <div className='images'>
        {
          inverstorsLogos.map((logo, key) => (
            <div className='image' key={key}>
              <img src={logo} />
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Inverstors
