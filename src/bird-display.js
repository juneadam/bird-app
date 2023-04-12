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
          <p>{currentBird.description}</p>
          <button onClick={handleNextBird}>Next</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BirdDisplay;


// ------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';

// function BirdDisplay({birds}) {
//   const [currentBird, setCurrentBird] = useState(null);

//   useEffect(() => {
//     if (birds.length > 0) {
//       setCurrentBird(birds[0]);
//     }
//   }, [birds]);

//   const handleNext = () => {
//     const currentIndex = birds.indexOf(currentBird);
//     if (currentIndex < birds.length - 1) {
//       setCurrentBird(birds[currentIndex + 1]);
//     } else {
//       setCurrentBird(birds[0]);
//     }
//   }

//   return (
//     <div>
//       {currentBird ? (
//         <>
//           <h1>{currentBird.name}</h1>
//           <img src={currentBird.image} alt={currentBird.name} />
//           <p>{currentBird.description}</p>
//           <button onClick={handleNext}>Next</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default BirdDisplay;

// --------------------------------------------------------------------







// function BirdDisplay({birds}) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const bird = birds[currentIndex];

//   console.log(birds[0])
  
//   const handleNextClick = () => {
//     if (currentIndex === birds.data.length -1) {
//       setCurrentIndex(0); //loop back to beginning
//     } else {
//       setCurrentIndex(currentIndex +1);
//       }
//     };

//   return (
//     <div>
//       <h1>{bird.name}</h1>
//       <img src={bird.image} alt={bird.name} />
//       <p>{bird.description}</p>
//       <button>Next</button>
//     </div>
//   );
// }

// export default BirdDisplay;


// chatGPT copy paste this code
// give one json object bird to chatGPT - this is one of many in an array
// how to click next to give a random json bird
// this code is problematic because its expecting one bird but is displaying all birds
