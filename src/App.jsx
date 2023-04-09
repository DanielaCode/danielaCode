import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GeneralProvider from './providers/GeneralProvider'
import RefProvider from './providers/RefProvider'

function App() {
  return (
    <GeneralProvider>
      <RefProvider>
      <div className="App">
        <HomePage/>
      </div>
      </RefProvider>
    </GeneralProvider>
  )
}

export default App
