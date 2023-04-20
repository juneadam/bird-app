// module for React component containing description info for bird dex

const DescriptionBox = (props) => {
  return (
    <div>
      <div id="description">{props.description}</div>
    </div>
  );
};

export default DescriptionBox;