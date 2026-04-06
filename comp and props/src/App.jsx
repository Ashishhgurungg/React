import React from 'react'
import './App.css';
import Card from './components/Card.jsx';
const App = () => {
  return (
    <div className='div'>
      <h1>hey from App</h1>
      <Card user="John Doe" age={30}></Card>
    </div>
  )
}

export default App