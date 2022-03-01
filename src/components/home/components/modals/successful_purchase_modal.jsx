import React from 'react'
import Modal from 'react-modal'
import boltIcon from '@/assets/images/bolt.svg'

const modalStyle = {
  overlay: {
    background: 'rgba(0,0,0,0.75)'
  },
  content: {
    background: 'transparent',
    color: 'white',
    border: 'none',
    padding: '0px'
  }
}

function SuccessfulPurchaseModal ({ isOpen, closeModal, account, purchaseAmount, tokenAmount }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel='Purchase successful'
    >
      <div className='successful_purchase_modal__body'>
        <div className='successful_purchase_modal__icon'>
          <img src={boltIcon} alt='bolt' />
        </div>
        <p><b>You participated in the auction successfully with his address:</b> {account} <b>with this amount:</b> {purchaseAmount}</p>
        <p><b>Your tokens will be vested, here is a guide on how to access them:</b> {tokenAmount}</p>
        <button className='button button--primary' onClick={closeModal}>Ok</button>
      </div>
    </Modal>
  )
}

export default SuccessfulPurchaseModal
