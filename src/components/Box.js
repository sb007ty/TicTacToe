import React from "react";

function Box(props) {
  return (
    <div className="item" id={props.index} onClick={props.onClick}>
      <span className={`item-text player-${props.value}`}> {props.value}</span>
    </div>
  );
}

export default Box;
