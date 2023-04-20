// React module for wrapper component for the bottom half/description area of the bird dex

import React from "react";
import DescriptionBox from "./description-box";
import Ability from "./ability";
import "./description-wrapper.css";

const DescriptionWrapper = (props) => {
  return (
    <div id="description-wrapper">
      <DescriptionBox description={props.description} />
      <Ability ability_name={props.ability_name} ability_text={props.ability_text} />
    </div>
  );
};

export default DescriptionWrapper;
