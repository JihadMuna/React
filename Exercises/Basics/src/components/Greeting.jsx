import React, { useState} from 'react'

export default function Greeting({userName}) {
  return (
    <div>
      <p>Welcome {userName}</p>
    </div>
  )
}
