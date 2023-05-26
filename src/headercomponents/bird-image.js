// module for displaying bird image from JSON

import React from "react";
import "./bird-image.css";

const BirdImage = (props) => {
  let image = props.image;
  let name = props.name;

  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      id="img-name-wrapper"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={image} alt={"an image of a " + name} className="bird-image" />
      
      {isHovering && (<div key={name} id="bird-name-hover">
        {name}
      </div>)}
    </div>
  );
};

export default BirdImage;
