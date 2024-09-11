import { useState } from "react";
import PlayerView from "./playerView";
import Middleview from "./Middleview";
import NavigateBar from "./NavigateBar";

function BattleView() {
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
      <div>
        <h1>Test</h1>
        <h3>
          {currentPlayer.name ? currentPlayer.name : "no player selected"}
        </h3>
      </div>
      <div>
        <button onClick={() => addPlayer()}>Add player</button>
      </div>
      <div>
        <Middleview
          opList={opList}
          setOpList={setOpList}
          players={players}
          currentPlayer={currentPlayer}
        />{" "}
        {players.map((p) => (
          <PlayerView key={p.id} opList={opList} player={p.name} />
        ))}
      </div>
    </>
  );
}

export default BattleView;
