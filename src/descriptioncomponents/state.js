// React module for the state/region component 
import React from "react";
import "./state.css";


const State = (props) => {
    let state_image = props.state_image 

    return (
        <React.Fragment>
        <div id="state">
            Region: <strong className="state">{props.state}</strong>
        </div>
        <div id="state_image_wrapper">
            <img
              src={state_image}
              alt={"the region"}
              className="state_image"
            />
        </div>
        </React.Fragment>
    );
};

export default State;