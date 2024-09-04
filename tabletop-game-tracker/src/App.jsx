import { useState } from "react"
import PlayerView from "./components/playerView"
import Middleview from "./components/Middleview"

function App() {

  const [vp, setVp] = useState(0)

  const handleVpClick = (x) => {
    setVp(vp + x)
  }

  return (
    <>
      <div>
        <h1>Test</h1>
      </div>
      <div>
        <PlayerView/>
        <Middleview/>
        <PlayerView/>
      </div>
      
    </>
  )
}

export default App
