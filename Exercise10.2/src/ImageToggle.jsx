import React, { useRef } from 'react';

// Import CSS file for styling
import './ImageToggle.css'

// Find 2 color images and convert them to black and white
import image1 from './assets/pic1.jpg'
import image1inblack from './assets/pic1b.jpg'
import image2 from './assets/pic2.jpg'
import image2inblack from './assets/pic2b.jpg'


export default function ImageToggle() {
    
// Create refs for the images
const image1Ref = useRef();
const image2Ref = useRef();

// Define event handlers for hovering in and out
const handleMouseEnter = (ref, colorImage) => {
    ref.current.src = colorImage;
}

const handleMouseLeave = (ref, blackAndWhiteImage) => {
ref.current.src = blackAndWhiteImage;
}

  return (
    <div>
      {/* Attach event listeners to the images */}
      <img 
      ref={image1Ref}
      src={image1inblack}
      alt='image1'
      onMouseEnter={() => handleMouseEnter(image1Ref, image1)}
      onMouseLeave={() => handleMouseLeave(image1Ref,image1inblack)}
/>
<img 
      ref={image2Ref}
      src={image2inblack}
      alt='image2'
      onMouseEnter={() => handleMouseEnter(image2Ref, image2)}
      onMouseLeave={() => handleMouseLeave(image2Ref,image2inblack)}
/>
    </div>
  )
}
