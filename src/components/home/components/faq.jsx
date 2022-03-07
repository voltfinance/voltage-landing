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
    title: 'What is the Fuse Ecosystem Round, and how long will it last?',
    content:
      'The Fuse Ecosystem Round is the Public sale for Fuse ecosystem users. During this event, the Fuse community can swap their Fuse tokens for Volt tokens. The sale will be for 24 hours or until all tokens are sold out.'
  },
  {
    title: 'Do I  still need $FUSE after I acquire $VOLT?',
    content:
      'Yes! $FUSE is the native token of the Fuse blockchain. You will still need Fuse in order to pay for gas on your transactions.'
  },
  {
    title: 'Are there any fees associated with this platform?',
    content: 'Every transaction on Volt Finance will be subjected to a .3% fee.'
  },
  {
    title: 'What is the purpose of holding VOLT?',
    content:
      'You can stake your VOLT in a single stake pool. By staking Volt, you receive a yield and the ability to govern the Voltage platform at large. Voltage is a relatively newer platform, therefore many features will need to be implemented in the near future.'
  },
  {
    title: 'Can I still use Volt Finance without owning any $VOLT?',
    content: ' Of course! You do not need the $VOLT token to use Volt Finance.'
  }
]

function Faqs () {
  const [val, setValue] = useState(0)
  const onChange = id => setValue(id[0])

  return (
    <section className='faqs'>
      <img className='rocket' src={rocket} />
      <div className='title'>
        {isMobile ? 'FAQ' : 'Frequently Asked Questions'}
      </div>
      <Accordion allowZeroExpanded onChange={onChange} preExpanded={[0]}>
        {data.map(({ title, content }, index) => (
          <AccordionItem key={index} uuid={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>{title}</div>
                <img
                  src={FaqBtn}
                  className={classNames({ rotate: index === val })}
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Faqs
