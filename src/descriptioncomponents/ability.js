// React component for ability data from JSON file for bird dex

import React from "react";
import "./ability.css";


const Ability = (props) => {

    return (
    <React.Fragment>
        <div id="ability-title">
            Ability: <strong className="ability-title">{props.ability_name}</strong>
        </div>
        <div id="ability-text">
            <i className="ability-description">{props.ability_text}</i>
        </div>
    </React.Fragment>
    )
}

export default Ability;