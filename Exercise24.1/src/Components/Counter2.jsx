import React from 'react'
import myCounter from '../hooks/myCounter'

const Counter2 = () => {
    const {count, addOne, removeOne, double, divide} = myCounter(0);
  return (
    <div>
      <h2>Count2 = {count}</h2>
      <button onClick={addOne}>Increase</button>
      <button onClick={removeOne}>Decrement</button>
      <button onClick={double}>Double Count</button>
      <button onClick={divide}>Divide Num</button>
    </div>
  )
}

export default Counter2
