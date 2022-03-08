import React from 'react'
import voltInfo from '@/assets/images/volt_info.png'

function SwapInfoModal () {
  return (
    <div className='swap_info_modal'>
      <div className='swap_info_modal__container'>
        <p className='swap_info_modal__title'>The fuse ecosystem round is focused on offering the communty the <br />control of voltage. The volt tokens will have voing power and much more.</p>
        <img className='swap_info_modal__info_img' src={voltInfo} />
        <div className='swap_info_modal__actions'>
          <a rel='noreferrer noopener' target='_blank' href='https://medium.com/@voltage.finance/guide-to-participate-in-fuse-ecosystem-round-b6d87fe92c98' className='link'>
            <span>Read more about the auction here</span>
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://docs.voltage.finance/welcome/fuse-ecosystem-round' className='docs'>
            <span>Voltage Docs →</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SwapInfoModal
