import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'

function App() {
  const [playerArray, setPlayerArray] = useState([
    { name: 'Anni', score: 20 },
    { name: 'Lucia', score: 30 },
  ])

  return (
    <div className="App">
      <div className="App__Player-container">
        {playerArray.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onMinusClick={() => handleMinusClick(index)}
            onPlusClick={() => handlePlusClick(index)}
          />
        ))}
      </div>

      <Button onClick={handleResetScoreClick}>Reset Scores</Button>
      <Button onClick={handleResetAllClick}>Reset All</Button>
      <PlayerForm onSubmit={handleNewPlayer}></PlayerForm>
    </div>
  )

  function handleMinusClick(index) {
    const playerToUpdate = playerArray[index]
    setPlayerArray([
      ...playerArray.splice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...playerArray.splice(index + 1),
    ])
  }

  function handlePlusClick(index) {
    const playerToUpdate = playerArray[index]
    setPlayerArray([
      ...playerArray.splice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
      ...playerArray.splice(index + 1),
    ])
  }

  function handleResetAllClick() {
    setPlayerArray([])
  }

  function handleResetScoreClick() {
    setPlayerArray(playerArray.map(player => ({ ...player, score: 0 })))
  }

  function handleNewPlayer(name) {
    setPlayerArray([...playerArray, { name, score: 0 }])
  }
}

export default App
