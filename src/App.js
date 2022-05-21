import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';
import Pi from './Pi';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';

export default function App() {
  const Game = () => {
    const gameRef = useRef(null);
    const [count, setCount] = useState(0);

    const startGame = () => {
      gameRef.current.startGame();
    };

    const stopGame = () => {
      gameRef.current.stopGame();
    };

    const handleCounterChange = (count) => {
      console.log(count);
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

  return <Game />;
}
