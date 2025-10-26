import Button from './components/Button'
import Counter from './components/Counter'
import './App.css'

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function App() {
  const handleClick = () => alert("Button clicked!")
  console.log(greet("Javier"));

  return (
    <>
      <Button onclick={handleClick} label={"Click me"}/>
      <Counter />
    </>
  )

}

export default App
