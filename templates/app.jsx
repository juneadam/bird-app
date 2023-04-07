import React from 'react';
import BirdDisplay from './static/templates/bird-display';
import birdsData from './data/birdsData.json';

const App = () => {
  return (
    <div>
      <h1>Bird Information</h1>
      <BirdDisplay birdsData={birdsData} />
    </div>
  );
};

export default App;
