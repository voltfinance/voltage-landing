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
    title: `What is Fuse Ecosystem Round and for how long?`,
    content: `The Fuse Ecosystem Round is the Public sale for Fuse ecosystem users, in comparison with other public sales, this one have better unvesting period for our loyal community. The sale will be for 24 hours or until all tokens are sold out.`
  },
  {
    title: 'Do I  still need $FUSE after I acquire $VOLT?',
    content: 'Yes! $FUSE is the native token of the Fuse blockchain. You will still need Fuse in order to pay for gas on your transactions.'
  },
  {
    title: 'Are there any fees associated with this platform?',
    content: 'Every transaction on Volt Finance will be subjected to a .3% fee.'
  },
  {
    title: 'What is the purpose of holding VOLT?',
    content: 'You can stake your VOLT in a single stake pool. By holding Volt you will get much more than just yield. Voltage is just starting and extra features will be added to the platform.'
  },
  {
    title: 'Can I still use Volt Finance without owning any $VOLT?',
    content: ' Of course! You do not need the $VOLT token to use Volt Finance.'
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
