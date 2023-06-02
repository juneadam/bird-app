import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BirdDisplay from './bird-display';



function App() {
  const [birds, setBirds] = useState([]);
  // new code
  // new state variable to store filtered birds based on search query
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBirds, setFilteredBirds] = useState([]);
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);


  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    if (query === '') {
      setFilteredBirds(birds);
    } else {
      const filteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBirds(filteredBirds);
    }
    setCurrentBirdIndex(0);
  };

  // end new code

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/BIRDDEX.json');
        setBirds(response.data.data);
        setFilteredBirds(response.data.data); //new line of code
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