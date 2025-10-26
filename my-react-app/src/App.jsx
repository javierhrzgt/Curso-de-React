import Card from './components/card'
import './App.css'

function App() {
  const items = ["React","JavaScript","Vite","CSS"]

  return (
    <section>
      <h1>Hola Mundo</h1>
      <Card title="Card 1" description={"Esta es la descripcion"}/>
      <Card title="Card 2" description={"Esta es la descripcion"}/>
      <Card title="Card 3" description={"Esta es la tercera card"}/>

      <ul>
        {
          items.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </section>

  )
}

export default App
