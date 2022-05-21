import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';
import Pi from './Pi';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';

export default function App() {
  return <Board />;
}

const Board = () => {
  const gameRef = useRef(null);
  const [count, setCount] = useState(0);

  const startGame = () => {
    gameRef.current.startGame();
  };

  const stopGame = () => {
    gameRef.current.stopGame();
  };

  const handleCounterChange = (count) => {
    setCount(count);
  };

  return (
    <div>
      <GameCounter handleCounterChange={handleCounterChange} />
      <GameControllers startGame={startGame} stopGame={stopGame} />

      <GameResult ref={gameRef} count={count} />
    </div>
  );
};
