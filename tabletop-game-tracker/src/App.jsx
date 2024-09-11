import { useState } from "react";
import PlayerView from "./components/playerView";
import Middleview from "./components/Middleview";
import NavigateBar from "./components/NavigateBar";
import BattleView from "./components/BattleView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  const [opList, setOpList] = useState([]);
  const [players, setpPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  const addPlayer = () => {
    const newPlayer = {
      id: players.length + 1,
      name: `player ${players.length + 1}`,
    };
    setpPlayers([...players, newPlayer]);
  };

  return (
    <>
      <Router>
        <div>
          <NavigateBar
            players={players}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        </div>

        <div>
          <Routes>
            <Route path="/battle" element={<BattleView />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
