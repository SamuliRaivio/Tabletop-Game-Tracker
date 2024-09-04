import { useState } from "react"

const PlayerView = () => {

    const [vp, setVp] = useState(0)
    const [cp, setCp] = useState(0)

    const handlePlusClickVp = () => {
        setVp(vp + 1)
    }

    const handlePlusClickCp = () => {
        setCp(cp + 1)
    }




    return(
        <div>
            view
            <div>
                {vp}
                {cp}
            </div>
            <div>
                <button onClick={() => handlePlusClickVp()}>VP+</button>
                <button onClick={() => handlePlusClickCp()}>CP+</button>
            </div>
        </div>
    )
}

export default PlayerView