import React from 'react'
import { useState } from 'react'

export default function BoxAnimation() {
const [box, setBox] = useState('true');

  return (
    <div>
      <div className='box'>{box}</div>
    </div>
  )
}
