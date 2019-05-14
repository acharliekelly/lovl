import React from 'react'

import './LandingPage.css'
import SearchBar from './SearchBar'

function LandingPage () {
  return (
    <div className="splash">
      <div className="overlay">
        <div className="main-title">
          <div>Learn and Teach,</div>
          <div>Whenever Wherever</div>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}

export default LandingPage
