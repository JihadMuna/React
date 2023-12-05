import React, { useState, useEffect } from 'react';
import './GetJoke.css';

export default function GetJoke() {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const getRandomJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error('Error fetching random joke:', error));
  };

  const getJokeByCategory = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => res.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error(`Error fetching ${category} joke:`, error));
  };

  return (
    <div>
      <button onClick={getRandomJoke}>Get A Random Joke!</button>
      <h3>{joke}</h3>

      <div>
        <h4>Categories:</h4>
        <ul>
          {categories.map((category) => (
            <li className='categories' key={category} onClick={() => getJokeByCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}