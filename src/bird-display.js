import React, { useState, useEffect } from "react";
import "./bird-display.css";
import ImageWrapper from "./headercomponents/image-wrapper";
import DescriptionWrapper from "./descriptioncomponents/description-wrapper";

function BirdDisplay({ birds }) {
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);
  const currentBird = birds[currentBirdIndex];

  const handleNextBird = () => {
    setCurrentBirdIndex((currentBirdIndex + 1) % birds.length);
  };

  return (
    <React.Fragment>
      {currentBird ? (
        <React.Fragment>
          <div id="current-bird">
            <div id="overflow-wrapper">
              <ImageWrapper
                name={currentBird.name}
                image={currentBird.image}
                call={currentBird.call}
                bird_type1={currentBird.bird_type1}
                bird_type2={currentBird.bird_type2}
              />
              <DescriptionWrapper
                description={currentBird.description}
                state={currentBird.state}
                ability_name={currentBird.ability_name}
                ability_text={currentBird.ability_text}
                weight={currentBird.weight}
                length={currentBird.length_}
                wingspan={currentBird.wingspan}
              />
              <div id="description-wrapper">
                <p>{currentBird.description}</p>
                <p>{currentBird.state}</p>
                <p>{currentBird.ability}</p>
                <p>{currentBird.weight}</p>
                <p>{currentBird.length_}</p>
                <p>{currentBird.wingspan}</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleNextBird}>Next</button>
          </div>
        </React.Fragment>
      ) : (
        <p className="loading-message">more birds to come</p>
      )}
    </React.Fragment>
  );
}

export default BirdDisplay;
