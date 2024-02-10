import React from "react";

function Header({ clickNewGame }) {
  return (
    <div className="header">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={clickNewGame}>New Game</button>
    </div>
  );
}

export default Header;
