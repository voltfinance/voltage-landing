import React from 'react'
import voltInfo from '@/assets/images/volt_info.png'
import docs from '@/assets/images/voltage_docs.svg'

function SwapInfoModal () {
  return (
    <div className='swap_info_modal'>
      <div className='swap_info_modal__container'>
        <p className='swap_info_modal__title'>The fuse ecosystem round is focused on offering the communty the <br />control of voltage. The volt tokens will have voing power and much more.</p>
        <img className='swap_info_modal__info_img' src={voltInfo} />
        <div className='swap_info_modal__actions'>
          <a rel='noreferrer noopener' target='_blank' href='https://medium.com/fusenet/one-for-all-and-all-for-one-%EF%B8%8F-843f11b779f2' className='link'>
            <span>Read more about the auction here</span>
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://docs.voltage.finance' className='docs'>
            <img src={docs} />
            <span>Voltage Docs →</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SwapInfoModal
