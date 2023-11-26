import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CounterComponent() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const decrementCounter = () => {
    if (counter > -10) {
      setCounter(counter - 1)
    }
  }

  let labelColor;
  if (counter > 0) {
    labelColor = 'green';
  } else if (counter < 0) {
    labelColor = 'red';
  } else {
    labelColor = 'black';
  }

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    <label className='label' style={{ color: labelColor}}>{counter}</label>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
     <CounterComponent />
      </div>
    </>
  )
}

export default App
