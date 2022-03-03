import React from 'react'
import boltIcon from '@/assets/images/bolt.svg'

function SuccessfulPurchaseModal ({ isOpen, closeModal, account }) {
  if (!isOpen) {
    return null
  }
  return (
    <div className='successful_purchase_modal'>
      <div className='successful_purchase_modal__body'>
        <div className='successful_purchase_modal__icon'>
          <img src={boltIcon} alt='bolt' />
        </div>
        <p><b>You participated in the auction successfully with his address:</b> {account}</p>
        <p><b>Your tokens will be vested, Here you can access the vesting interface: XXXXXX </b></p>
        <button className='button button--primary' onClick={closeModal}>Ok</button>
      </div>
    </div>
  )
}

export default SuccessfulPurchaseModal
