
import { useState } from 'react'

function Score() {
  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)

  function addRuns(num) {
    setRuns(runs + num)
  }

  function addWicket() {
    const newWickets = wickets + 1

    if (newWickets > 10) {
      alert("Maximum wickets reached! Score reset to 0.")
      setWickets(0)
    } else {
      setWickets(newWickets)
    }
  }

  return (
    <div>
      <center>
        <h1>Cricket Score Board</h1>

        <h2>Runs : {runs}</h2>
        <h2>Wickets : {wickets}</h2>

        {[0, 1, 2, 3, 4, 5, 6].map((num) => (
          <button key={num} onClick={() => addRuns(num)}>
            {num}
          </button>
        ))}

        <button onClick={addWicket}>Wicket</button>
      </center>
    </div>
  )
}

export default Score
