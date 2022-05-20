import React from 'react';
import './style.css';
import React, { useEffect, useState } from 'react';
import Pi from './Pi';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
  };

  const stopGame = () => {
    setIsPlaying(false);
  };

  const handleCounterChange = (count) => {
    console.log(count);
    setCount(count);
  };

  return (
    <div>
      <GameCounter handleCounterChange={handleCounterChange} />
      <GameControllers
        startGame={startGame}
        stopGame={stopGame}
        isPlaying={isPlaying}
      />

      <GameResult isPlaying={isPlaying} count={count} />
      {/* <Pi /> */}
    </div>
  );
}
