import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BirdDisplay from './bird-display';



function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/BIRDDEX.json');
        setBirds(response.data.data);

      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);
  
  return (
    <div>
      {birds.length > 0 ? (
        <BirdDisplay birds={birds} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;