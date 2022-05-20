import React, { useReducer, useEffect } from 'react';

function GameControllers({ startGame, stopGame }) {
  return (
    <div>
      <button onClick={() => startGame()}> Start </button>
      <button onClick={() => stopGame()}> Stop </button>
    </div>
  );
}

export default GameControllers;
