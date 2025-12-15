import React from 'react';
import './homepage.css';
import FilterBar from '/src/components/filter-ber/filter-bar.jsx';
import Trends from '/src/components/trends/trends.jsx';

import Directory from '/src/components/directory/directory.jsx';

function Homepage() {
  return (
    <div className="homepage">
   
      <FilterBar />
      <Directory />
 <Trends />
    </div>
  );
}

export default Homepage;
