import React from 'react';

import SearchBar from './SearchBar';

function LandingContent (props) {
  return (
    <React.Fragment>
      <div className="splash">
        <div className="overlay">
          <div className="main-title">
            <div>Learn and Teach,</div>
            <div>Whenever Wherever</div>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="courseGrid">
        <div className="next">Here&apos;s what you can learn next...</div>
        { /* placeholder for course grid */ }
      </div>
    </React.Fragment>
  );
}

export default LandingContent;
