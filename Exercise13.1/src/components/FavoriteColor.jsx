import React, { useEffect, useState } from 'react'

export default function FavoriteColor() {
    const [color, setColor] = useState('Red');
    useEffect(() => {
        setTimeout(() => {
            setColor('Blue');
        }, 1000);
    })
  return (
    <div>
      <h1>My favourite color is : {color}</h1>
    </div>
  )
}
