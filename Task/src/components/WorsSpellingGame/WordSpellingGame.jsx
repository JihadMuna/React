import React, { useState, useEffect, useRef } from 'react';
import './WordSpellingGame.css';

const WordSpellingGame = () => {
  const words = ['APPLE', 'HOUSE', 'MILK', 'BANANA', 'LIFE'];

  const [word, setWord] = useState('');
  const [userInput, setUserInput] = useState(Array(word.length).fill(''));
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    fetchRandomWord();
  }, []); // Empty dependency array ensures this effect runs only on mount

  const fetchRandomWord = () => {
    // Pick a random word from the array
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    // Convert the word to uppercase for consistency
    setWord(randomWord.toUpperCase());
    setUserInput(Array(randomWord.length).fill(''));
    setGameOver(false);
    setFeedback('');
  };

  const handleInputChange = (index, value) => {
    if (!gameOver) {
      const newUserInput = [...userInput];
      newUserInput[index] = value.toUpperCase();
      setUserInput(newUserInput);
    }
  };

  const checkWord = () => {
    const userEnteredWord = userInput.join('');
    if (userEnteredWord === word) {
      setFeedback('Correct! Well done.');
      setGameOver(true);
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };

  useEffect(() => {
    if (!gameOver) {
      const nextIndex = userInput.findIndex((value) => value === '');
      if (nextIndex !== -1) {
        inputRefs.current[nextIndex].focus();
      } else {
        checkWord();
      }
    }
  }, [userInput, gameOver]);

  return (
    <div className="word-spelling-game">
      <h2>Word Spelling Game</h2>
      <div className="word-display">
        {word.split('').map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={userInput[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(inputRef) => (inputRefs.current[index] = inputRef)}
            disabled={gameOver}
          />
        ))}
      </div>
      <button onClick={gameOver ? fetchRandomWord : checkWord}>
        {gameOver ? 'Next Word' : 'Check Spelling'}
      </button>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default WordSpellingGame;
