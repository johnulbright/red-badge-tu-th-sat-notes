import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Reverser from './components/Reverser'

function App() {

  return (
    <div className="App">
      <h1>Hello!</h1>
     <Counter prop1={0}/>
     <Reverser />

    </div>
  )
}

export default App
