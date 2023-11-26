import './App.css'
import React from 'react'
import Container from './Components/Container'

function Button({name,styleBtn}) {
  return (
    <button style={styleBtn}>{name}</button>
  )
}

function App() {

  return (
    <Container>
<Button name={"Important"} styleBtn={{fontWeight:"bold"}}/>
<Button name={"Not Important"} />
    </Container>
  )
}

export default App
  