import { useState } from 'react'
import { data } from './data'
import './App.css'

export const MainComponent = () => {
  // Utility function: Get objects born before 1990
  const getObjectsBefore1990 = () => {
    return data.filter((item) => parseInt(item.birthday.split('-')[2]) < 1990);
  };

  // State to store modified data
  const [modifiedData, setModifiedData] = useState(getObjectsBefore1990);

  // Utility function: Get an array of all names
  const getAllNames = () => {
    return data.map((item) => item.name);
  };

// Name component
const Name = ({ names }) => {
  console.log(names);
  return (
    <div>
      <h2>Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

// Card component
const Card = ({ objects }) => {
  console.log(objects);
  return (
    <div>
      <h2>Objects Born Before 1990:</h2>
      {objects.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Birthday: {item.birthday}</p>
          <p>Favorite Meats: {item.favoriteFoods.meats.join(", ")}</p>
          <p>Favorite Fish: {item.favoriteFoods.fish.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

  return (
    <div>
      {/* Name component */}
      <Name names={getAllNames()} />

      {/* Card component */}
      <Card objects={modifiedData} />
    </div>
  );
};

function App() {

  return (
  < MainComponent />
  )

}

export default App
