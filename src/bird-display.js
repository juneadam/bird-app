import React, { useState } from "react";
import "./bird-display.css";
import ImageWrapper from "./headercomponents/image-wrapper";
import DescriptionWrapper from "./descriptioncomponents/description-wrapper";

function BirdDisplay({ birds }) {
  function getRndBird(birds) {
    return Math.floor(Math.random() * birds.length);
  }

  const [currentBirdIndex, setCurrentBirdIndex] = useState(getRndBird(birds));
  const currentBird = birds[currentBirdIndex];

  const handleNextBird = () => {
    setCurrentBirdIndex((currentBirdIndex + 1) % birds.length);
  };

  const handlePreviousBird = () => {
    setCurrentBirdIndex((currentBirdIndex - 1 + birds.length) % birds.length);
  };

  return (
    <React.Fragment>
      <div id="bird-display-container">
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
                  state_image={currentBird.state_image}
                  ability_name={currentBird.ability_name}
                  ability_text={currentBird.ability_text}
                  weight={currentBird.weight}
                  long={currentBird.long}
                  wingspan={currentBird.wingspan}
                />
              </div>
            </div>
            <div className="button-wrapper">
              <div className="button-container">
                {/* <div className="dpad-text-wrapper">
                  <p>Previous Bird</p>
                </div> */}
                <button
                  className="arrow-button previous-button"
                  onClick={handlePreviousBird}
                ></button>
                <button
                  className="arrow-button next-button"
                  onClick={handleNextBird}
                ></button>
                {/* <div className="dpad-text-wrapper">
                  <p>Next Bird</p>
                </div> */}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p className="loading-message">more birds to come</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default BirdDisplay;
