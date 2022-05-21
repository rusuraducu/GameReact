import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';
import { Container, Card, Flex, Text, Box } from 'theme-ui';
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
    <Container
      sx={{ width: '800px', border: '1px solid red', justifyContent: 'center' }}
      bg="muted"
    >
      <Box>
        <Flex
          sx={{
            flexDirection: 'column',
            width: '400px',
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
      </Box>
    </Container>
  );
};
