// React component for ability data from JSON file for bird dex

import React from "react";
import "./description-wrapper.css";


const Ability = (props) => {

    return (
    <React.Fragment>
        <div id="ability-title">
            <strong>{props.ability_name}</strong>
        </div>
        <div id="ability-text">
            <i>{props.ability_text}</i>
        </div>
    </React.Fragment>
    )
}

export default Ability;