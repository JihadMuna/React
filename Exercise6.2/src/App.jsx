import { useState } from 'react'
import './App.css'

function ShowHideComponent() {
  const [visible, setVisible] = useState(false);
 
  const changeVisibility = () => {
    setVisible(!visible);
  };

  const box = <div className='box'></div>

  return (
    <div>
      <button onClick={changeVisibility}>Show/Hide</button>
      {visible && box}
    </div>
  );
}

function App() {
  return (
    <>
    <h1>Hide And Seek!</h1>
      <div className="card">
      <ShowHideComponent />
      </div>
    </>
  )
}

export default App

