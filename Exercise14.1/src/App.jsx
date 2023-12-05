import { useState } from 'react'
import './App.css'
import GetJoke from './components/GetJoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<GetJoke />
    </>
  )
}

export default App
