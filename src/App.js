import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BirdDisplay from './bird-display';



function App() {
  const [birds, setBirds] = useState([]);
  // new code
  // new state variable to store filtered birds based on search query
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBirds, setFilteredBirds] = useState([]);

  // function getRndBird(birds) {
  //   return Math.floor(Math.random() * birds.length);
  // }

  // const [currentBirdIndex, setCurrentBirdIndex] = useState(getRndBird(birds));
  // const currentBird = filteredBirds[currentBirdIndex];

  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);


  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    if (query === '') {
      setFilteredBirds(birds);
      // setCurrentBirdIndex(getRndBird(birds));
    } else {
      const newFilteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBirds(newFilteredBirds);
    }
    setCurrentBirdIndex(0);
  };

  // end new code

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/BIRDDEX.json');
        const birdsFetched = response.data.data
        const shuffledBirds = [...birdsFetched].sort(() => Math.random() - 0.5)
        setBirds(shuffledBirds);
        setFilteredBirds(shuffledBirds); //new line of code
      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);
  
//   return (
//     <div>
//       {birds.length > 0 ? (
//         <BirdDisplay birds={birds} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

return (
  <div>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search bird name..."
    />
    {filteredBirds.length > 0 ? (
      <BirdDisplay
        birds={filteredBirds}
        currentBirdIndex={currentBirdIndex}
        setCurrentBirdIndex={setCurrentBirdIndex}
      />
    ) : (
      <p>No matching birds found.</p>
    )}
  </div>
);
}

export default App;