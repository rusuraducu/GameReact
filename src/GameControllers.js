import React, { useReducer, useEffect } from 'react';
import { Flex, Button } from 'theme-ui';

function GameControllers({ startGame, stopGame }) {
  return (
    <Flex mt={20} sx={{ justifyContent: 'center', alignItem: 'center' }}>
      <Button pl={25} pr={25} mr={3} onClick={() => startGame()}>
        Start
      </Button>
      <Button pl={25} pr={25} onClick={() => stopGame()}>
        {' '}
        Stop{' '}
      </Button>
    </Flex>
  );
}

export default GameControllers;
