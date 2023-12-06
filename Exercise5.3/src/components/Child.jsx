import React from 'react';
import Balloon from './Balloon';

const Child = ({ name, color }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Balloon color={color} />
    </div>
  );
};

export default Child;
