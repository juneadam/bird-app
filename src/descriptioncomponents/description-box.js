// module for React component containing description info for bird dex
import "./description-box.css";

const DescriptionBox = (props) => {
  return (
    <div>
      <div id="description">{props.description}</div>
    </div>
  );
};

export default DescriptionBox;