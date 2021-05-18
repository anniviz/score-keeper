import logo from './logo.svg'
import './App.css'
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('click')}>hello</Button>
    </div>
  )
}

export default App
