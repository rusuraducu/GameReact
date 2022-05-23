import './style.css';
import React, { useRef, useState } from 'react';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';
import { Container, Card, Flex, Text, Box } from 'theme-ui';

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

  function Header() {
    return (
      <Flex
        sx={{
          backgroundColor: '#ededed',
          height: '270px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text sx={{ fontSize: '15em', fontWeight: '900' }}> &#960; </Text>
      </Flex>
    );
  }

  return (
    <Container sx={{ width: '70vw', justifyContent: 'center' }} bg="muted">
      <Header />
      <Flex
        sx={{
          flexDirection: 'column',
          width: '30vw',
          marginLeft: '25%',
        }}
      >
        <Flex sx={{ flexDirection: 'column' }}>
          <Flex sx={{ justifyContent: 'center' }}>
            <h1>
              <Text pt={3} pb={3}>
                Display the first n-digits of &#960;
              </Text>
            </h1>
          </Flex>
          <Card sx={{ width: '100%' }}>
            <GameCounter handleCounterChange={handleCounterChange} />
            <GameControllers startGame={startGame} stopGame={stopGame} />
          </Card>
        </Flex>
        <Flex mt={4}>
          <GameResult ref={gameRef} count={count} />
        </Flex>
      </Flex>
    </Container>
  );
};
