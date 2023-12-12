import React from 'react'
import myCounter from '../hooks/myCounter'

const Counter = () => {
    const {count, addOne, removeOne, double, divide} = myCounter(0);
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={double}>Double</button>
      <button onClick={divide}>Divide</button>
    </div>
  )
}

export default Counter
