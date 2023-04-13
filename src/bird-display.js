import React, { useState, useEffect } from 'react';

function BirdDisplay({birds}) {
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);
  const currentBird = birds[currentBirdIndex];

  const handleNextBird = () => {
    setCurrentBirdIndex((currentBirdIndex + 1) % birds.length);
  };
  
  return (
    <div>
      {currentBird ? (
        <div>
          <h1>{currentBird.name}</h1>
          <img src={currentBird.image} alt={currentBird.name} />
          <img src={currentBird.bird_type1} />
          <p>{currentBird.description}</p>
          <p>{currentBird.state}</p>
          <p>{currentBird.ability}</p>
          <p>{currentBird.weight}</p>
          <p>{currentBird.length_}</p>
          <p>{currentBird.wingspan}</p>
          <button onClick={handleNextBird}>Next</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BirdDisplay;