import React, { useState, useEffect } from "react";
import './bird-display.css';


function BirdDisplay({ birds }) {
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);
  const currentBird = birds[currentBirdIndex];

  const handleNextBird = () => {
    setCurrentBirdIndex((currentBirdIndex + 1) % birds.length);
  };

  return (
    <React.Fragment>
      {currentBird ? (
        <div id="current-bird">
          <div id="overflow-wrapper">
            <div className="image-wrapper">
              <h1 className="bird-name">{currentBird.name}</h1>
              <img
                src={currentBird.image}
                alt={currentBird.name}
                className="bird-image"
              />
              <div className="type-icon-container">
                <img src={currentBird.bird_type1} className="type-icon" />
                <img src={currentBird.bird_type2} className="type-icon" />
              </div>
            </div>
            <p>{currentBird.description}</p>
            <p>{currentBird.state}</p>
            <p>{currentBird.ability}</p>
            <p>{currentBird.weight}</p>
            <p>{currentBird.length_}</p>
            <p>{currentBird.wingspan}</p>
          </div>
          <div>
            <button onClick={handleNextBird}>Next</button>
          </div>
        </div>
      ) : (
        <p className="loading-message">more birds to come</p>
      )}
    </React.Fragment>
  );
}

export default BirdDisplay;
