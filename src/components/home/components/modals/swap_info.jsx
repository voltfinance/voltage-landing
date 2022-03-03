import React from 'react'
import voltInfo from '@/assets/images/volt_info.png'
import docs from '@/assets/images/voltage_docs.svg'

function SwapInfoModal () {
  return (
    <div className='swap_info_modal'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={voltInfo} width='685px' />
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
