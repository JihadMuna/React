import React from 'react';

const Balloon = ({ color }) => {
  return <div style={{ backgroundColor: color, width: '50px', height: '50px', borderRadius: '50%' }}></div>;
};

export default Balloon;
