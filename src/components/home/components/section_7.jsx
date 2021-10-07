import React from 'react'
import Wallet from '@/assets/wallet.png';
import Chain from '@/assets/chain.png';
import Community from '@/assets/community.png';


const cards = [
  {
    title: "Wallet Supported",
    icon: Wallet,
    count: "5",
    color: "#473660",
  },
  {
    title: "Chain Supported",
    icon: Chain,
    count: "10",
    color: "#034253",
  },
  {
    title: "Community Supported",
    icon: Community,
    count: "5K",
    color: "#0E4F3F",
  },
]

function Card({ title, icon, color, count }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: color,
      }}
    >
      <img src={icon} className='card__icon' />
      <div className="card__count">{count}</div>
      <div className="card__title">{title}</div>
    </div>
  )
}

const SectionFour = () => {
  return (
    <section className='section_7'>
      <div className="section_7__container">
        <h1 className="section_7__title">Stay updated on the latest Fuse.Fi news</h1>
        <div className="section_7__content_container">
          <input className="section_7__input" placeholder="Enter your email address" />
          <button className="section_7__button">Submit</button>
        </div>
      </div>

    </section>
  )
}

export default SectionFour
