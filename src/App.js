import { useState } from 'react'
import './App.css'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [playerArray, setPlayerArray] = useState([
    { name: 'Anni', score: 20 },
    { name: 'Lucia', score: 30 },
  ])

  return (
    <div className="App">
      {playerArray.map(player => (
        <Player key={player.name} name={player.name} score={player.score} />
      ))}
      <Button onClick={handleResetScoreClick}>Reset Scores</Button>
      <Button onClick={handleResetAllClick}>Reset All</Button>
      <PlayerForm></PlayerForm>
    </div>
  )

  function handleResetAllClick() {
    setPlayerArray([])
  }

  function handleResetScoreClick() {
    setPlayerArray(playerArray.map(player => ({ ...player, score: 0 })))
  }
}

export default App
