// module for displaying bird image from JSON

import './bird-image.css';

const BirdImage = (props) => {
    let image = props.image
    let name = props.name

  return (
    <img
      src={image}
      alt={"an image of a " + name}
      className="bird-image"
    />
  );
};

export default BirdImage;