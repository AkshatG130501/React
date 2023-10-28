import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'



function App() {
  let [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter+1)
  }

  const remove = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter : {counter} </h2>
      <button onClick={add}>Plus</button>
      <button onClick={remove}>Minus</button>
    </>
  )
}

export default App
