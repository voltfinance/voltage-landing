import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { isMobile } from 'react-device-detect'
import rocket from '@/assets/images/rocket-swing.svg'
import FaqBtn from '@/assets/images/faq_button.svg'
import classNames from 'classnames'

const data = [
  {
    title: 'Do I still need $FUSE after I acquire $VOLT?',
    content: 'Yes! $FUSE is the native token of the Fuse blockchain. You will still need Fuse in order to pay for gas on your transactions.'
  },
  {
    title: 'Are there any fees associated with this platform?',
    content: 'Every transaction on Volt Finance will be subjected to a .3% fee. There are two smaller fees that combine to make up the total fee. The first is a .25% fee that is given to liquidity providers in the form of VOLT tokens and a 0.05% fee that is sent to the xVOLT pool. This fee is used to buy back VOLT tokens periodically. So when you exchange your xVOLT for VOLT, you\'ll get more VOLT than what you started with.'
  },
  {
    title: 'What is the purpose of holding VOLT?',
    content: 'You can stake your VOLT in a single stake pool to earn xVOLT. Since this is a single-stake pool all impermanent loss potential is removed. xVOLT has built into its contract to buy back VOLT periodically increasing the ratio of VOLT to xVOLT over time.'
  },
  {
    title: 'Can I still use Volt Finance without owning any $VOLT?',
    content: ' Of course! You do not need the $VOLT token to use Volt Finance.'
  },
  {
    title: 'How long is the FUSE/VOLT token swap available?    ',
    content: '24 Hours'
  }
]

function Faqs () {
  const [val, setValue] = useState(0)
  const onChange = (id) => setValue(id[0])

  return (
    <section className='faqs'>
      <img
        className='rocket'
        src={rocket}
      />
      <div className='title'>{isMobile ? 'FAQ' : 'Frequently Asked Questions'}</div>
      <Accordion
        allowZeroExpanded
        onChange={onChange}
        preExpanded={[0]}
      >
        {
          data.map(({ title, content }, index) => (
            <AccordionItem key={index} uuid={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div>{title}</div>
                  <img src={FaqBtn} className={classNames({ rotate: index === val })} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  {content}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </section>
  )
}

export default Faqs
