// ToppingsList.jsx
import React from 'react';

const ToppingsList = ({ toppings }) => {
  return (
    <div className="toppings-list">
      <h4>Selected Toppings:</h4>
      <ul>
        {toppings.map((topping, index) => (
          <li key={index}>{topping.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToppingsList;
