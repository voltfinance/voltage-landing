import { Link } from 'react-router-dom'

function MainHeader () {
  return (
    <header className='header'>
      <nav className='header__list'>
        <Link className='header__item header__link' to='/pricing'>Pricing</Link>
        <a className='header__item header__link' target='_blank' rel='noopener noreferrer' href='https://docs.fuse.io'>Docs</a>
        <button className='header__item header__signin'>Sign in</button>
        <button className='header__item header__connect'>Fuse netwrok</button>
      </nav>
    </header>
  )
}

export default MainHeader
