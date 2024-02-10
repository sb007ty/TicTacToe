import React, { useState } from "react";
import Box from "./Box";

function Body(props) {
  const { boxValues, setBoxValues, player, setPlayer, winner, setWinner } =
    props;

  const onClick = (e) => {
    if (winner) {
      alert("Start New Game");
      return;
    }
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    const newBoxValues = boxValues.map((item, index) => {
      if (e.target.id == index) {
        return player;
      }
      return item;
    });
    const gameWinner = checkWinner(newBoxValues);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoxValues.includes("")) {
      setWinner("Draw");
    }
    setBoxValues(newBoxValues);
  };
  function checkWinner(boxVals) {
    const [v1, v2, v3, v4, v5, v6, v7, v8, v9] = [...boxVals];
    if (v1 !== "" && v1 === v2 && v2 === v3) {
      return v1;
    }
    if (v4 !== "" && v4 === v5 && v5 === v6) {
      return v4;
    }
    if (v7 !== "" && v7 === v8 && v8 === v9) {
      return v7;
    }

    if (v1 !== "" && v1 === v4 && v4 === v7) {
      return v1;
    }
    if (v2 !== "" && v5 === v2 && v5 === v8) {
      return v2;
    }
    if (v3 !== "" && v3 === v6 && v6 === v9) {
      return v3;
    }

    if (v1 !== "" && v1 === v5 && v5 === v9) {
      return v1;
    }
    if (v3 !== "" && v3 === v5 && v5 === v7) {
      return v3;
    }
  }
  return (
    <div className="body">
      <div className="body-main">
        {boxValues.map((item, index) => {
          return (
            <Box key={index} index={index} value={item} onClick={onClick} />
          );
        })}
      </div>
      <div className="body-aside"></div>
    </div>
  );
}

export default Body;
