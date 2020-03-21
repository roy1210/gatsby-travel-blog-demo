import { window } from 'browser-monads'
import { Link } from 'gatsby'
import React from 'react'
import logo from "../../images/compass-logo.svg"
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="nav__items">
        <a href="/"
          className="nav__item--left">
          <img src={logo} alt="Traveler pack logo" className="nav__item--logo" />
        </a>

        {/* Memo: 0 means false? */}
        <Link
          className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}

export default Nav
