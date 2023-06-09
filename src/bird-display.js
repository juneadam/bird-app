// import React, { useState } from "react";
import React from "react";
import "./bird-display.css";
import ImageWrapper from "./headercomponents/image-wrapper";
import DescriptionWrapper from "./descriptioncomponents/description-wrapper";

function BirdDisplay({ birds, currentBirdIndex, setCurrentBirdIndex }) {
  const currentBird = birds[currentBirdIndex];

  const handleNextBird = () => {
    setCurrentBirdIndex((currentIndex) => (currentIndex + 1) % birds.length);
  };

  const handlePreviousBird = () => {
    setCurrentBirdIndex((currentIndex) => (currentIndex - 1 + birds.length) % birds.length);
  };
  
// React will automatically pass the current state value (in this case, the current index) 
// as the first parameter to the arrow function. 
// In this case, it will pass the current value of currentBirdIndex as currentIndex.


// visual feedback on the D-Pad when the birds list is filtered from the search, other 
// visual feedback

// look up how to build accessible carousel - aria-role

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
                <button
                  className="arrow-button previous-button"
                  onClick={handlePreviousBird}
                ></button>
                <button
                  className="arrow-button next-button"
                  onClick={handleNextBird}
                ></button>
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




// old code:

// function BirdDisplay({ birds }) {

  // const [currentBirdIndex, setCurrentBirdIndex] = useState(0);


//   const [currentBirdIndex, setCurrentBirdIndex] = useState(0);

//   const handleNextBird = () => {
//     setCurrentBirdIndex((currentBirdIndex + 1) % birds.length);
//   };

//   const handlePreviousBird = () => {
//     setCurrentBirdIndex((currentBirdIndex - 1 + birds.length) % birds.length);
//   };


  // const [currentBirdIndex, setCurrentBirdIndex] = useState(0);
  // const currentBird = birds[currentBirdIndex];

    // useEffect(() => {
  //   const updateBirdIndex=() => {
  //     setCurrentBirdIndex(0)
  //   } 
  //   updateBirdIndex();
  // }, [searchQuery])

  // function getRndBird(birds) {
  //   return Math.floor(Math.random() * birds.length);
  // }

    // const currentBird = filteredBirds[currentBirdIndex];