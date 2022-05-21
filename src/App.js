import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';
import { Box, Flex, Card, Text } from 'theme-ui';
import fontawesome from '@fortawesome/fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(faMinus, faPlus);

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
    <>
      <Card mt={10} mb={20} mr={20} ml={20}>
        <GameCounter handleCounterChange={handleCounterChange} />
        <GameControllers startGame={startGame} stopGame={stopGame} />
      </Card>
      <GameResult ref={gameRef} count={count} />
    </>
  );
};
