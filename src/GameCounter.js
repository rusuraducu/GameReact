import React, { useReducer, useEffect, useState } from 'react';

function GameCounter({ handleCounterChange, isPlaying }) {
  const MINIMUM_DIGITS = 2;
  const [count, setCounter] = useState(MINIMUM_DIGITS);
  const [state, dispatch] = useReducer(reducer, count);

  useEffect(() => handleCounterChange(count), [count]);

  function handleDispatchedEvent(actionType) {
    switch (actionType) {
      case 'increment':
        setCounter(count + 1);
        break;
      case 'decrement':
        const newValue = count === MINIMUM_DIGITS ? MINIMUM_DIGITS : count - 1;
        setCounter(newValue);
        break;
      default:
        throw new Error();
    }
  }

  function reducer(count, action) {
    if (!isPlaying) {
      handleDispatchedEvent(action.type);
    }
  }

  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input type="number" value={count} />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default GameCounter;
