import React, { useState } from 'react'

export default function FeatureToggler(power, setPower) {
    
    const [power, setPower] = useState('off')

  return (
    <div>
      <button onClick={() => power == 'On'? setPower('Off') : setPower('On') }>On/Off</button>
    </div>
  )
}
