import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'

const App = () => (
  <Container>
    <Header />
    <Route exact path="/" component={LandingPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/login" component={LoginPage} />
  </Container>
)

export default App
