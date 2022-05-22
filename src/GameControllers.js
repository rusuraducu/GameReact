import React, { useReducer, useEffect } from 'react';
import { Flex, Button } from 'theme-ui';

function GameControllers({ startGame, stopGame }) {
  return (
    <Flex mt={20} sx={{ justifyContent: 'center', alignItem: 'center' }}>
      <Button
        sx={{ display: 'flex', justifyContent: 'center' }}
        pl={25}
        pr={25}
        mr={3}
        onClick={() => startGame()}
      >
        Start
      </Button>
      <Button
        sx={{ display: 'flex', justifyContent: 'center' }}
        pl={25}
        pr={25}
        onClick={() => stopGame()}
      >
        {' '}
        Stop{' '}
      </Button>
    </Flex>
  );
}

export default GameControllers;
