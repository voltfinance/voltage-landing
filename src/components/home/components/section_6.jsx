import medium from '@/assets/medium-icon.png';
import github from '@/assets/github-icon.png';
import twitter from '@/assets/twitter-icon.png';
import telegram from '@/assets/telegram-icon.png';
import discord from '@/assets/discord-icon.png';
import React from 'react';

const SectionFive = () => {
  return (
    <section className='communities' id='communities'>
      <div className='communities__content grid-container'>
        <h1 className='communities__title'> Join the Fuse.Fi community</h1>

        <div className='communities__container'>
          <a
            href=' https://github.com/fuseio/fuseswap-interface'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='communities__boxInner'>
              <div className='communities__inner'>
                <img src={github} />
                <span className='communities__spanInner'>Github</span>
              </div>
              <p className='communities__check'>Check the progress</p>
            </div>
          </a>
          <a
            href='https://twitter.com/Fuse_Fi'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='communities__boxInner'>
              <div className='communities__inner'>
                <img src={twitter} />
                <span className='communities__spanInner'>Twitter</span>
              </div>
              <p className='communities__check'>Follow the latest news</p>
            </div>
          </a>
          <a
            href='https://t.me/fuseswap'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='communities__boxInner'>
              <div className='communities__inner'>
                <img src={telegram} />
                <span className='communities__spanInner'>Telegram</span>
              </div>
              <p className='communities__check'>Join the community</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
