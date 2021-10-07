import React from 'react';
import DownloadAppStore from '@/assets/download-app-store.png';
import DownloadGooglePlay from '@/assets/download-google-play.png';
import Divider from '@/assets/divider.svg';
import Mobile from '@/assets/mobile.png';

const SectionTwo = () => {
  return (
    <>
      <section className='section_2'>
        <div className="section_2__container">
          <div className="section_2__content">
            <h2 className='section_2__title'>Fuse Cash App</h2>
            <p className="section_2__text">
              <span>Welcome to DeFi in your pocket.</span>
            </p>
            <p className="section_2__text">
              The Fuse Cash app is your gateway to powerful DeFi capabilities all wrapped in a simple,
              consmer-friendly interface that’s as easy to use as Venmo.
            </p>
            <img className="section_2__divider" src={Divider} alt='' />
            <p className="section_2__text">Download Now</p>
            <div className="section_2__app_download">
              <img src={DownloadAppStore} alt='' />
              <img src={DownloadGooglePlay} alt='' />
            </div>
          </div>
          <div className="section_2__mobile">
            <img src={Mobile} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
