import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const a= 30;
  

  return (
    <>
      <div className="cont">
      <h1>Vite + React</h1>
      <p>{10*10}% for JSX</p>
      <p>{a}</p>
      <p>{ a>50 ? "Greater" : "Lesser" }</p>
      </div>
     
    </>
  )
}

export default App
