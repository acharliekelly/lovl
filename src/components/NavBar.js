import React from 'react'

import './NavBar.css'
import logo from '../images/lovl_logo.png'
import cartImg from '../images/_ionicons_svg_md-cart.svg'
import loginImg from '../images/arrow-in-square.svg'
import signupImg from '../images/user-plus.svg'
import langImg from '../images/_ionicons_svg_md-globe.svg'

const loggedIn = (
  <React.Fragment>
    { /* TODO: authenticated links */}
  </React.Fragment>
)

const loggedOut = (
  <React.Fragment>
    <a className="login" href="#">Login
      <img alt src={loginImg} />
    </a>
    <a className="signup" href="#">Sign Up
      <img alt src={signupImg} />
    </a>
  </React.Fragment>
)

const NavBar = ({ user }) => (
  <nav>
    <a className="logo" href="#">
      <img alt="Logo" src={logo} />
    </a>
    <a className="buy-credits" href="#">
      <img alt src={cartImg} />
      Buy Credits
    </a>
    { user ? loggedIn : loggedOut }
    <a className="language" href="#">
      <img alt src={langImg} /> EN
      <div className="arrow-down"></div>
    </a>
  </nav>
)

export default NavBar
