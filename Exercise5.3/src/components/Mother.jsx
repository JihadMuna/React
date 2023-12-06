import React from 'react';
import Child from './Child';
import './Mother.css';

const Mother = () => {
  const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];

  return (
    <div className='mother'>
      <h2>A Tale of Five Balloons</h2>
      <div className='balloons'>
      {kids.map((kid, index) => (
        <Child key={index} name={kid.name} color={kid.color} />
      ))}
      </div>
    </div>
  );
};

export default Mother;
