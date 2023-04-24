import React, { useState } from "react";
import "./type-icon-container.css";

const TypeIconContainer = (props) => {
  let bird_type1 = props.bird_type1;
  let bird_type2 = props.bird_type2;

  return (
    <div className="type-icon-container">
      <img src={bird_type1} alt={"type 1 " + bird_type1 + " icon"} className="type-icon" />
      <img src={bird_type2} alt={"type 2 " + bird_type2 + " icon"} className="type-icon" />
    </div>
  );
};

export default TypeIconContainer
