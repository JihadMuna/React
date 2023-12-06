// 

import { useState } from 'react'
import './App.css'
import WordSpellingGame from './components/WorsSpellingGame/WordSpellingGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WordSpellingGame />
    </>
  )
}

export default App
