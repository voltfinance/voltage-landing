import React from 'react';
import FooterLogo from '@/assets/logo';

function Footer() {
  return (
    <footer className='footer__wrapper '>
      <div className='footer'>
        <img src={FooterLogo} width='150px' />
      </div>
      <div className='footer__copy'>© 2021 Fuse.Fi</div>
    </footer>
  );
}

export default Footer;
