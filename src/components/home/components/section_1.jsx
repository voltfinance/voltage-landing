import React from 'react';

const SectionOne = () => {
  return (
    <section className='section-A'>
      <div className='section-A__wrapper'>
        <div className='section-A__container'>
          <div className='section-A__main'>
            <h1 className='main_title'>Consumer Friendly DeFi</h1>
            <div className='section-A__text-container'>
              <p className='section-A__text'>
                <span>fuse.Fi</span> brings unprecedented DeFi capabilities to
                the mainstream via the consumer-friendly Fuse Cash mobile app.
              </p>
              <p className='section-A__text'>
                Built atop the powerful Fuse blockchain and ecosystem,{' '}
                <span>fuse.Fi</span> enables anyone to carry the power of DeFi
                in their pocket.
              </p>
              <p className='section-A__text'>
                <span>Fuse.fi </span> DAO coming soon, join our channel in the
                meantime to participate and get updated.
              </p>
              <div className='section-A__buttons'>
                <a className='section-A__primaryButton'>
                  Learn More&nbsp;
                  <span className='section-A__buttonSoon'>(soon)</span>
                </a>
                <a className='section-A__secondaryButton'>Enter App</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
