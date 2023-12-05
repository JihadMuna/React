import React, { useState, useEffect } from 'react'
import './BoxAnimation.css'

export default function BoxAnimation({ size }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return isVisible ? <div className={`box ${size}`}></div> : null;
};

