import React from 'react';
import './App.css';

export function Box1() {
  return (
    <div className='box1'>
      <Box2 />
    </div>
  );
}

export function Box2() {
  return (
    <div className='box2'>
      <Box3 />
    </div>
  );
}

export function Box3() {
  return (
    <div className='box3'>
      <Box4 />
      <Box4 />
    </div>
  );
}

export function Box4() {
  return (
    <div className='box4'>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Box1 />
    </>
  );
}