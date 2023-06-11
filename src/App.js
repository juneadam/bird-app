import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'
import BirdDisplay from './bird-display';


function useBirds() {
  const [birds, setBirds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBirds, setFilteredBirds] = useState(birds);
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

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('/BIRDDEX.json');
        const birdsFetched = response.data.data
        const shuffledBirds = [...birdsFetched].sort(()=> Math.random() - 0.5)
        setBirds(shuffledBirds); // factor out?, not currently being used
        setFilteredBirds(shuffledBirds);
      } catch (error) {
        console.error('Error fetching birds:', error);
      }
    };

    fetchBirds();
  }, []);

  return {
    filteredBirds,
    currentBirdIndex,
    setCurrentBirdIndex,
    searchQuery,
    setSearchQuery,
    handleSearchInputChange,
  };
}

// separation of concerns

function App() {
  const {
    filteredBirds,
    currentBirdIndex,
    setCurrentBirdIndex,
    searchQuery,
    setSearchQuery,
    handleSearchInputChange,
  } = useBirds();

return (
  <div>
     <input
      type="text"
      className='searchBar'
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Type bird name..."
    />
     {filteredBirds.length > 0 ? (
      <BirdDisplay
        birds={filteredBirds}
        currentBirdIndex={currentBirdIndex}
        setCurrentBirdIndex={setCurrentBirdIndex}
        setSearchQuery={setSearchQuery}
      />
    ) : (
      <p>No matching birds found.</p>
    )}
   </div>
 );
}

export default App;
