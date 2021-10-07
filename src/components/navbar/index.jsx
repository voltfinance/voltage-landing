import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import useOutsideClick from '@/hooks/useOutsideClick.jsx';

import logo from '@/assets/logo.svg';
import AnimatedNavbar from '@/components/navbar/AnimatedNavbar';
import SelectLanguage from '../shared/select_language';
import MobileMenu from './MobileMenu';
import { FormattedMessage } from 'react-intl';

function Header({ history }) {
  const [isOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const isWhite = !history.location.pathname.includes('about');

  useOutsideClick(hamburgerRef, () => {
    if (isOpen) {
      setMenuOpen(false);
    }
  });

  const homePage = () => history.push('/');
  return (
    <header className='header__wrapper'>
      <div className='header'>
        <div onClick={homePage} className='header__logo'>
          <img alt='logo' src={logo} />
        </div>
        <MobileMenu />
        <div
          className={classNames(
            'header__nav grid-x align-middle align-justify',
            { header__nav__open: isOpen }
          )}
        >
          <div className='header__link__wrapper '>
            <AnimatedNavbar duration={300} />
            <div className='nav__item ' onClick={homePage}>
              <a
                rel='noreferrer noopener'
                className={classNames('text text--active', {
                  'text--white': isWhite,
                })}
                target='_blank'
                href='/'
              >
                <FormattedMessage defaultMessage='Home' />
              </a>
            </div>
            <div className='nav__item'>
              <a
                rel='noreferrer noopener'
                className={classNames('text', { 'text--white': isWhite })}
                target='_blank'
                href='https://fuse.cash/'
              >
                <FormattedMessage defaultMessage='Fuse Cash' />
              </a>
            </div>
            <div className='nav__item'>
              <a
                rel='noreferrer noopener'
                className={classNames('text', { 'text--white': isWhite })}
                target='_blank'
                href='https://app.fuse.fi/#/home'
              >
                <FormattedMessage defaultMessage='FuseFi Dashboard' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
