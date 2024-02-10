import logo from "./logo.svg";
import "./App.css";
import "./style/body.css";
import "./style/footer.css";
import "./style/header.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

const boxes = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [winner, setWinner] = useState("");
  const [boxValues, setBoxValues] = useState(boxes);
  const [player, setPlayer] = useState("X");
  function clickNewGame() {
    setBoxValues(boxes);
    setWinner("");
    setPlayer("X");
  }
  return (
    <div className="App">
      <Header clickNewGame={clickNewGame} />
      <Body
        setWinner={setWinner}
        boxValues={boxValues}
        setBoxValues={setBoxValues}
        player={player}
        setPlayer={setPlayer}
        winner={winner}
      />
      <Footer winner={winner} player={player} />
    </div>
  );
}

export default App;
