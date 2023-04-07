import React, { useState, useEffect } from 'react';

function Bird() {
  const [bird, setBird] = useState(null);

  useEffect(() => {
    fetch('/birds')
      .then(response => response.json())
      .then(data => setBird(data[0]));
  }, []);

  if (!bird) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{bird.name}</h1>
      <img src={bird.image} alt={bird.name} />
      <p>{bird.description}</p>
      <button>Next</button>
    </div>
  );
}

export default Bird;
