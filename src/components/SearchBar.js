import React from 'react'

import './SearchBar.css'

const searchHandler = (event) => {
  event.preventDefault()
  // perform search
}

const SearchBar = () => (
  <form id="searchForm" className="search-bar">
    <input type="text" className="search-text" id="searchField" placeholder="Search for courses, tutors" />
    <a className="btn" href="#search" onClick={searchHandler}>&nbsp;</a>
  </form>
)

export default SearchBar
