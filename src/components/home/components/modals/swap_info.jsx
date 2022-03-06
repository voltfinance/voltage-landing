import React from 'react'
import voltInfo from '@/assets/images/volt_info.png'
import docs from '@/assets/images/voltage_docs.svg'

function SwapInfoModal () {
  return (
    <div className='swap_info_modal'>
      <div className='swap_info_modal__container'>
        <p className='swap_info_modal__title'>The Fuse Ecosystem Round is focused on offering the community the control of Voltage.</p>
        <p className='swap_info_modal__subtitle'>The Volt tokens will have voting power and much more</p>
        <img className='swap_info_modal__info_img' src={voltInfo} />
        <a rel='noreferrer noopener' target='_blank' href='https://docs.voltage.finance' className='link'>
          {' '}
          <img src={docs} />
          Voltage Docs →
        </a>
      </div>
    </div>
  )
}

export default SwapInfoModal
