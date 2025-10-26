import Button from './components/Button'
import './App.css'

function App() {
  const handleClick = () => {
    alert("Button clicked!")
  }
  return <Button onclick={handleClick} label={"Click me"}/>
}

export default App
