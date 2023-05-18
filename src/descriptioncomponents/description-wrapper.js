// React module for wrapper component for the bottom half/description area of the bird dex

import React from "react";
import DescriptionBox from "./description-box";
import Ability from "./ability";
import State from "./state";
import DeetsWrapper from "./deets-wrapper";
import "./description-wrapper.css";

const DescriptionWrapper = (props) => {
  let deetsObj = {
    "length": props.long,
    "weight": props.weight,
    "wingspan": props.wingspan
  }

  console.log(deetsObj)

  return (
    <div id="description-wrapper">
      <DescriptionBox description={props.description} />
      <Ability ability_name={props.ability_name} ability_text={props.ability_text} />
      <State state={props.state} state_image={props.state_image} />
      <DeetsWrapper deets={deetsObj} />
    </div>
  );
};

export default DescriptionWrapper;
