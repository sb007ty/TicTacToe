import React from "react";

function Footer(props) {
  let gameWinner = null;
  const { player } = props;
  if (props.winner === "X") {
    gameWinner = "Winner is X";
  } else if (props.winner === "O") {
    gameWinner = "Winner is O";
  } else if (props.winner === "Draw") {
    gameWinner = "Match Drawn";
  }
  return (
    <div className="footer">
      {!gameWinner && (
        <>
          {player === "X" && (
            <span className="player-footer">Next Player: X</span>
          )}
          {player === "O" && (
            <span className="player-footer">Next Player: O</span>
          )}{" "}
        </>
      )}
      {gameWinner && <span className="winner-footer">{gameWinner}</span>}
    </div>
  );
}

export default Footer;
