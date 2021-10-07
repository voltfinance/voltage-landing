import React from 'react';
import classNames from 'classnames';

import { withRouter } from 'react-router';

function NavbarItem({
  onMouseEnter,
  index,
  title,
  children,
  history,
  currentIndex,
}) {
  const isWhite = !history.location.pathname.includes('about');

  return (
    <li className='nav__item'>
      <button className={classNames('text', { 'text--white': isWhite })}>
        {title}
      </button>
    </li>
  );
}

export default withRouter(NavbarItem);
