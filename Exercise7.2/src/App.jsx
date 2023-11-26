import { useState } from 'react'
import './App.css'
import CheckBoxApp from './CheckBoxApp/CheckBoxApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Check Box App</h1>
  <CheckBoxApp />
      </div>
    </>
  )
}

export default App
