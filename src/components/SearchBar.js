import React from 'react'

import './SearchBar.css'

function SearchBar () {
  return (
    <form id="searchForm" className="search-bar">
      <input type="text" className="search-text" id="searchField" placeholder="Search for courses, tutors" />
    </form>
  )
}

export default SearchBar
