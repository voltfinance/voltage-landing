import React from 'react'
import Tokenmoics from '@/assets/tokenmoics-pie.png';
import Documentation from '@/assets/documentation.png';
import Roadmap from '@/assets/roadmap.png';
const cards = [
  {
    icon: Tokenmoics,
    title: 'Tokenmoics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
  },
  {
    icon: Documentation,
    title: 'Documentation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
  },
  {
    icon: Roadmap,
    title: 'Roadmap',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
  },

]

function Card({ icon, description, title, link = '#' }) {
  return (
    <div className='card'>
      <div className='card__icon'>
        <img src={icon} alt='icon' />
      </div>
      <div className='card__title'>
        {title}
      </div>
      <div className='card__description'>
        {description}
      </div>
      <a
        rel='noreferrer noopener' target='_blank'
        href={link}
        className="card__button"
      >
        Learn More
      </a>
    </div>
  )
}
const SectionThree = () => {
  return (
    <section className='section_3'>
      <h2 className="section_3__title">
        Learn More
      </h2>
      <div className="section_3__cards_container">
        {cards.map((card, index) => (<Card key={index} {...card} />))}
      </div>
    </section>
  )
}

export default SectionThree
