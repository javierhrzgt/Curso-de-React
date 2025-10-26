import { useContext, createContext, useState } from 'react'
import Counter from './components/Counter/Counter'
import './App.css'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}>
      Cambiar tema
    </button>
  )
}

function App() {

  return (
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
  )
}

export default App
