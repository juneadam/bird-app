// module to handle the bird call from the JSON file
import React from "react";
import "./bird-call.css";


const BirdCall = (props) => {

    return (
        <div id="bird-call">
            <audio key={props.name} controls>
            <source src={props.call} />
            </audio>
        </div>
    )
}

export default BirdCall;