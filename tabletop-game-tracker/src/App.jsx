import { useState } from "react";
import PlayerView from "./components/playerView";
import Middleview from "./components/Middleview";

function App() {
  const [opList, setOpList] = useState([]);
  const [players, setpPlayers] = useState([]);

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
      </div>
      <div>
        <button onClick={() => addPlayer()}>Add player</button>
      </div>
      <div>
        <Middleview opList={opList} setOpList={setOpList} players={players} />{" "}
        {players.map((p) => (
          <PlayerView key={p.id} opList={opList} player={p.name} />
        ))}
        <PlayerView opList={opList} player={"player 1"} />
        <PlayerView opList={opList} player={"player 2"} />
      </div>
    </>
  );
}

export default App;
