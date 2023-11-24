import React from 'react'
import './container.css'

function Container({children}) {
  return (
    <div className='flex'>
     
        {children}
    </div>
  )
}

export default Container
