import React from 'react'

import './NavBar.css'
import logo from '../images/lovl_logo.png'
import cartImg from '../images/_ionicons_svg_md-cart.svg'
import loginImg from '../images/arrow-in-square.svg'
import signupImg from '../images/user-plus.svg'
import langImg from '../images/_ionicons_svg_md-globe.svg'
import mailImg from '../images/mail.svg'
import notifImg from '../images/_ionicons_svg_md-notifications-outline.svg'
import userImg from '../images/user.svg'
import logoutImg from '../images/arrow-out-square.svg'
import helpImg from '../images/help-circle.svg'

const loggedIn = (
  <React.Fragment>
    <a className="messages" href="#messages">
      <img alt="Messages" src={mailImg} />
    </a>
    <a className="notifications" href="#notifications">
      <img alt="Notifications" src={notifImg} />
    </a>
    <a className="profile" href="#profile">
      <img alt="Profile" src={userImg} />
    </a>
    <a className="logout" href="#logout">
      <img alt="Log Out" src={logoutImg} />
    </a>
    <a className="help" href="#help">
      <img alt="Help" src={helpImg} />
    </a>
  </React.Fragment>
)

const loggedOut = (
  <React.Fragment>
    <a className="login" href="#login">Login
      <img alt src={loginImg} />
    </a>
    <a className="signup" href="#signup">Sign Up
      <img alt src={signupImg} />
    </a>
  </React.Fragment>
)

const languageHandler = (event) => {
  event.preventDefault()
  // select language
}

const NavBar = ({ user }) => (
  <nav>
    <a className="logo" href="#">
      <img alt="Logo" src={logo} />
    </a>
    <a className="buy-credits" href="#buy">
      <img alt src={cartImg} />
      Buy Credits
    </a>
    { user ? loggedIn : loggedOut }
    <a className="language" href="#" onClick={languageHandler}>
      <img alt src={langImg} /> EN
      <div className="arrow-down"></div>
    </a>
  </nav>
)

export default NavBar
