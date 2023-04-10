import React, { useState, useEffect } from 'react';

function BirdDisplay({birds}) {
  console.log(bird)
  // const bird = birds[0]
  return (
    <div>
      <h1>{bird.name}</h1>
      <img src={bird.image} alt={bird.name} />
      <p>{bird.description}</p>
      <button>Next</button>
    </div>
  );
}

export default BirdDisplay;


// chatGPT copy paste this code
// give one json object bird to chatGPT - this is one of many in an array
// how to click next to give a random json bird
// this code is problematic because its expecting one bird but is displaying all birds
