import React, { useState, useRef } from 'react'
import NewsletterForm from './newsletter_form'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import useAddToken from '@/hooks/useAddToken.jsx'

import logo from '@/assets/images/voltage_icon.svg'
import github from '@/assets/images/github.png'
import telegram from '@/assets/images/telegram.png'
import twitter from '@/assets/images/twitter.png'
import discord from '@/assets/images/discord.png'
import medium from '@/assets/images/medium.svg'
import docs from '@/assets/images/docs.svg'

const Footer = () => {
  const [isOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const addToken = useAddToken()

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false)
    }
  })

  return (
    <div className='footer'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='menus'>
          <div className='menu'>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='#'
              style={{ color: '#8DA9BB' }}
            >
              Getting Started
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://staking.fuse.io/'
            >
              Fuse Staking
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://studio.fuse.io/'
            >
              Fuse Studio
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://fuse.cash/'
            >
              Fuse Cash
            </a>
          </div>
          <div className='menu'>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://app.voltage.finance/'
            >
              <button
                rel='noreferrer noopener'
                target='_blank'
                className='button-secondary'
                href='https://app.voltage.finance'
              >
                Open App →
              </button>
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://docs.voltage.finance'
            >
              Voltage Docs
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://form.typeform.com/to/RLauPver'
            >
              Work with us
            </a>
            <a rel='noreferrer noopener' target='_blank' onClick={addToken}>
              Add VOLT Token to your wallet
            </a>
          </div>
        </div>
        <div className='social_link_form' ref={hamburgerRef}>
          <NewsletterForm setMenuOpen={setMenuOpen} isOpen={isOpen} />
          <div className='social_icons'>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://docs.voltage.finance'
            >
              <img src={docs} style={{ width: '40px', marginRight: '10px' }} />
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://github.com/voltfinance/'
            >
              <img
                src={github}
                style={{ width: '40px', marginRight: '10px' }}
              />
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://medium.com/@voltage.finance'
            >
              <img
                src={medium}
                style={{ width: '40px', marginRight: '10px' }}
              />
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://t.me/voltage_finance'
            >
              <img
                src={telegram}
                style={{ width: '40px', marginRight: '10px' }}
              />
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://discord.gg/voltagefinance'
            >
              <img
                src={discord}
                style={{ width: '40px', marginRight: '10px' }}
              />
            </a>
            <a
              rel='noreferrer noopener'
              target='_blank'
              href='https://twitter.com/voltfinance'
            >
              <img src={twitter} style={{ width: '40px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
