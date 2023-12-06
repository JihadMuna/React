import React, { useState } from 'react';
import ToppingButton from './ToppingButton';

const TurtleCard = ({ name, img, pizzaToppings, onAddTopping }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [showMaxMessage, setShowMaxMessage] = useState(false);

  const handleAddTopping = (topping) => {
    if (selectedToppings.length < 5) {
      setSelectedToppings([...selectedToppings, topping]);
      onAddTopping(topping);
      setShowMaxMessage(false);
    } else {
      setShowMaxMessage(true);
    }
  };

  return (
    <div className="turtle-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="topping-buttons">
        {pizzaToppings.map((topping, index) => (
          <ToppingButton key={index} topping={topping} onAddTopping={handleAddTopping} />
        ))}
      </div>
      {showMaxMessage && <p className="max-message">You can't select more than 5 toppings</p>}
    </div>
  );
};

export default TurtleCard;
