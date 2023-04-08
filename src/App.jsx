import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GeneralProvider from './providers/GeneralProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GeneralProvider>
      <div className="App">
        <HomePage/>
      </div>
    </GeneralProvider>
  )
}

export default App
