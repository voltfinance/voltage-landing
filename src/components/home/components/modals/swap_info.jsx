import React from 'react'
import voltInfo from '@/assets/images/volt_info.png'
import docs from '@/assets/images/voltage_docs.svg'

function SwapInfoModal() {
  return (
    <div className='swap_info_modal'>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '850px' }}>
        <p style={{ textAlign: 'center', fontSize: '18px', paddingBottom: '8px' }}>The Fuse Ecosystem Round is focused on offering the community the control of Voltage.</p>
        <p style={{ textAlign: 'center', fontSize: '18px', paddingBottom: '15px' }}>The Volt tokens will have voting power and much more</p>
        <img src={voltInfo} width='685px' />

        <a rel='noreferrer noopener' target='_blank' href='https://docs.voltage.finance' className='link' style={{marginTop: '10px'}}>
          {' '}
          <img src={docs} />
          Voltage Docs →
        </a>
      </div>
    </div>
  )
}

export default SwapInfoModal
