import React from 'react'

export default function CustomButton({color, onClick}) {
  return (
    <button
    style={{ backgroundColor: color}}
    onClick={() => onClick(color)}
    >
        {color}
    </button>
  )
}
