import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addOne() {
    setCount(count => count + 1)
  }

  return (
    <>
      <div className="card">

        <button onClick={addOne}>
          increment
        </button>  {count}
      </div>
    </>
  )
}

export default App

