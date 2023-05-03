// wrapper containing components for name, photo, and typing(s) of each bird in the dex

import './image-wrapper.css';

import TypeIconContainer from './type-icon-container'
import BirdName from "./bird-name";
import BirdImage from "./bird-image";
// import BirdCall from './bird-call';

const ImageWrapper = (props) => {
    let name = props.name
    let image = props.image
    let bird_type1 = props.bird_type1
    let bird_type2 = props.bird_type2
    // let call = props.call

    return (
        <div className="image-wrapper">
        <BirdName name={name} />
        <BirdImage image={image} name={image} />
        {/* <BirdCall call={call} /> */}
        <TypeIconContainer bird_type1={bird_type1} bird_type2={bird_type2}/>
      </div>
    )
}

export default ImageWrapper;