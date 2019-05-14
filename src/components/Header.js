import React from 'react'
import { Nav } from 'react-bootstrap'

import './Header.css'

const Header = (
  <header className="topnav">
    <Nav defaultActiveKey="/">
      <Nav.Item className="logo">
        <Nav.Link href="/">
          <img src="images/lovl_logo.png" alt="Logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="buy-credits" href="/buy">Buy Credits</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="login-link" href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="signup-link" href="/signup">Sign Up</Nav.Link>
      </Nav.Item>
      {/* language component */}
      <div className="lang">EN</div>
    </Nav>
  </header>
)

export default Header
