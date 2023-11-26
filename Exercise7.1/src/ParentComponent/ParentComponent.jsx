import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { useState } from 'react';

export default function ParentComponent() {
    
const colors = ["blue","red","yellow"];
const [selectedColor, setSelectedColor] = useState(null);

const handelButtonClick = (color) => {
    setSelectedColor(color)
}

  return (
    <div>
      {colors.map((color, index) => (
        <CustomButton
        key={index}
        color={color}
        onClick={handelButtonClick}
        />
      ))}
      {selectedColor && (
        <p>Selected color: {selectedColor}</p>
      )}
    </div>
  )
}
