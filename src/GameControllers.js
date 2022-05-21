import React, { useReducer, useEffect } from 'react';

function GameControllers({ startGame, stopGame }) {
  return (
    <>
      <button onClick={() => startGame()}> Start </button>
      <button onClick={() => stopGame()}> Stop </button>
    </>
  );
}

export default GameControllers;
