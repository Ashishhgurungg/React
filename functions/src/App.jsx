import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  function show (event){
    console.log(event.target.textContent);
  }

  return (
    <div>
      <button onClick={function (e) {
        show(e);
      }}>Cick</button>
    </div>
  )
}

export default App
