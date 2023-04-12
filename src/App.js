import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BirdDisplay from './bird-display.js';


function App() {
  const [birds, setBirds] = useState({});

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/birds.json');
        setBirds(response.data);
      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);

console.log(birds)

  return (
    <div>
      <h1>Birds Information</h1>
      <h1>bethany is learning</h1>
      <BirdDisplay birds={birds} />
    </div>
  );
};

export default App;

// import {useEffect, useState} from 'react';
// import birdsData from './data/birds.json';

  // useEffect(() => {
  //   fetch('/birds')
  //     .then(response => response.json())
  //     .then(data => setBird(data[0]));
  // }, []);



  
  // if (!bird) {
  //   return <div>more bird info to come</div>;
  // }