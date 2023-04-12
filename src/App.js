import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BirdDisplay from './bird-display';

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/birds.json');
        setBirds(response.data.data);
        console.log('Response data: ', response.data);
        console.log('birds: ', birds);
      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);

  console.log('rendering app with birds: ', birds); 
  
  return (
    <div>
      <h1>Birds Information</h1>
      {birds.length > 0 ? (
        <BirdDisplay birds={birds} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;


// import birds from './birds.json';
// return (
//   <div>
//     <h1>Birds Information</h1>
//     <h1>bethany is learning</h1>
//     <BirdDisplay bird={currentBird} />
//     <button onClick={handleNextBird}> next bird </button>
//   </div>
// );
// };
