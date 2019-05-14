import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'

function App () {
  return (
    <div className="wrapper">
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  )
}

export default App
