import './App.css'

const data = ["Hello", "World"];

const number1 = 5;
const number2 =6;
const sum = number1+number2;

const string = "I love React!"
const stringLength = string.length;

function App() {

  return (
    <>

<h1>{data[0]} {data[1]}</h1>

<h2>{number1} + {number2} = {sum}</h2>

<p>The string's length is {stringLength}</p>
    </>
  )
}

export default App
