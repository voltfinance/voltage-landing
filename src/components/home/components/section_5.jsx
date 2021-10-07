import React from 'react';
import { FormattedMessage } from 'react-intl';
import ola from '@/assets/ola.png';
import sympols from '@/assets/Symbols.png';
import ramp from '@/assets/ramp.png';
import pokt from '@/assets/pokt.png';
import zokyo from '@/assets/zokyo.png';
import zepplin from '@/assets/zepplin.png';

import coingecko from '@/assets/coingecko.png';
import defilama from '@/assets/defilama.png';
import medium from '@/assets/medium.png';
import uniswap from '@/assets/uniswap.png';
import kyber from '@/assets/kyber.png';
import inch from '@/assets/1inch.png';
import loopring from '@/assets/loopring.png';
import defipulse from '@/assets/defipulse.png';
import chain from '@/assets/0chain.png';
import key from '@/assets/2key.png';
import mantradao from '@/assets/mantradao.png';
import torus from '@/assets/torus.png';
import transak from '@/assets/transak.png';
import unstoppabledomains from '@/assets/unstoppabledomains.png';
import orion from '@/assets/orion.png';
import boson from '@/assets/boson.png';
import unmarshal from '@/assets/unmarshal.png';
import dappradar from '@/assets/dappradar.png';
import defistation from '@/assets/defistation.png';
import mintgate from '@/assets/mintgate.png';
import pancake from '@/assets/pancake-swap.png';
import krystal from '@/assets/krystal.png';
import immunefi from '@/assets/immunefi.png';
import getblock from '@/assets/getblock.png';

const largeEcoSystem = [
  {
    logo: ola,
    link: 'https://ola.finance/',
    alt: 'ola',
  },
  {
    logo: sympols,
    link: 'https://thegraph.com/',
    alt: 'graph',
  },
  {
    logo: ramp,
    link: 'https://ramp.network/',
    alt: 'ramp',
  },
  {
    logo: pokt,
    link: 'https://www.pokt.network/',
    alt: 'pokt',
  },
  {
    logo: zokyo,
    link: 'https://www.zokyo.io/',
    alt: 'zokyo',
  },
  {
    logo: zepplin,
    link: 'https://openzeppelin.com/',
    alt: 'zepplin',
  },
];

const smallEcoSystem = [
  {
    logo: coingecko,
    link: 'https://www.coingecko.com/',
    alt: 'coingecko',
  },
  {
    logo: defilama,
    link: 'https://defillama.com/home',
    alt: 'defilama',
  },
  {
    logo: medium,
    link: 'https://coinmarketcap.com/',
    alt: 'coinmarketcap',
  },
  {
    logo: uniswap,
    link: 'https://uniswap.org/',
    alt: 'uniswap',
  },
  {
    logo: kyber,
    link: 'https://kyber.network/',
    alt: 'kyber',
  },
  {
    logo: inch,
    link: 'https://1inch.io/',
    alt: 'oneinch',
  },
  {
    logo: loopring,
    link: 'https://loopring.org/',
    alt: 'loopring',
  },
  {
    logo: defipulse,
    link: 'https://defipulse.com/',
    alt: 'defipulse',
  },
  {
    logo: chain,
    link: 'https://0chain.net/',
    alt: 'zerochain',
  },
  {
    logo: key,
    link: 'https://www.2key.network/',
    alt: 'twokey',
  },
  {
    logo: mantradao,
    link: 'https://mantradao.com/',
    alt: 'mantradao',
  },
  {
    logo: torus,
    link: 'https://tor.us/',
    alt: 'torus',
  },
  {
    logo: transak,
    link: 'https://transak.com/',
    alt: 'transak',
  },
  {
    logo: unstoppabledomains,
    link: 'https://unstoppabledomains.com/',
    alt: 'unstoppabledomains',
  },
  {
    logo: orion,
    link: 'https://www.orionprotocol.io/',
    alt: 'orion',
  },
  {
    logo: boson,
    link: 'https://www.bosonprotocol.io/',
    alt: 'boson',
  },
  {
    logo: unmarshal,
    link: 'https://unmarshal.io/',
    alt: 'unmarshal',
  },
  {
    logo: dappradar,
    link: 'https://dappradar.com/',
    alt: 'dappradar',
  },
  {
    logo: defistation,
    link: 'https://www.defistation.io/',
    alt: 'defistation',
  },

  {
    logo: mintgate,
    link: 'https://mintgate.app/',
    alt: 'mintgate',
  },
  {
    logo: pancake,
    link: 'https://pancakeswap.finance/',
    alt: 'pancake',
  },
  {
    logo: krystal,
    link: 'https://krystal.app/',
    alt: 'krystal',
  },
  {
    logo: immunefi,
    link: 'https://immunefi.com/',
    alt: 'immunefi',
  },
  {
    logo: getblock,
    link: 'http://getblock.io/',
    alt: 'getblock',
  },
];

const LargeCompanyLogo = ({ logo, link, alt }) => {
  return (
    <div className='fuse_ecosysyem__logo-priority small-12 medium-6  large-4'>
      <a href={link} rel='noreferrer noopener' target='_blank'>
        <img src={logo} alt={`${alt}`} />
      </a>
    </div>
  );
};

const SmallCompanyLogo = ({ logo, link, alt }) => {
  return (
    <div className='fuse_ecosysyem__logo-small small-6 medium-4 large-2'>
      <a href={link} rel='noreferrer noopener' target='_blank'>
        <img src={logo} alt={`${alt}`} />
      </a>
    </div>
  );
};

const FuseEcosystem = (props) => {
  return (
    <section className='fuse_ecosysyem'>
      <h3 className='fuse_ecosysyem__title'>
        Our partners and Investors help
        <br /> us grow the community
      </h3>
      <div className='fuse_ecosysyem__items grid-x align-justify'>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
            {largeEcoSystem.map((logo, index) => (
              <LargeCompanyLogo key={index} {...logo} />
            ))}
          </div>
        </div>
        <div className='grid-x fuse_ecosysyem__logo-block cell'>
          <div className='grid-x fuse_ecosysyem__logo-row'>
            {smallEcoSystem.map((logo, index) => (
              <SmallCompanyLogo key={index} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuseEcosystem;
