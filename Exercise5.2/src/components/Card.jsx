import React from 'react'
import './Card.css'

export default function Card({image ,title, description, link}) {
  return (
    <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        Learn More
      </a>
    </div>
  </div>
  )
}
