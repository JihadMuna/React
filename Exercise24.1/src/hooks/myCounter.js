import { useState } from "react"

const myCounter = () => {
const [count, setCount] = useState(0);

const addOne = () => {
   setCount(count + 1);
}

const removeOne = () => {
setCount(count- 1)
}

const double = () => {
setCount(count * 2)
}

const divide = () => {
setCount(count / 2)
}

    return {count, addOne, removeOne, double, divide};
}

export default myCounter;