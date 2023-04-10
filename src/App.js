import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {useEffect, useState} from 'react';
import BirdDisplay from './bird-display.js';
// import birdsData from './data/birds.json';

function App() {
  const [birds, setBirds] = useState({});
  // useEffect(() => {
  //   fetch('/birds')
  //     .then(response => response.json())
  //     .then(data => setBird(data[0]));
  // }, []);


  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/birds.json');
        setBirds(response.data.data);
      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);

console.log(birds)

  // if (!bird) {
  //   return <div>more bird info to come</div>;
  // }
  return (
    <div>
      <h1>Birds Information</h1>
      <h1>bethany is learning</h1>
      <BirdDisplay birds={birds} />
    </div>
  );
};

export default App;
