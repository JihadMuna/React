// ToppingButton.jsx
import React from 'react';

const ToppingButton = ({ topping, onAddTopping }) => {
  return (
    <button className="topping-button" onClick={() => onAddTopping(topping)}>
      {topping.name}
    </button>
  );
};

export default ToppingButton;
