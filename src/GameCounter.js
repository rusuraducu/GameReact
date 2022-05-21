import React, { useReducer, useEffect, useState } from 'react';
import { Input, Button, Box, Flex } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GameCounter({ handleCounterChange }) {
  const MINIMUM_DIGITS = 2;
  const [count, setCounter] = useState(MINIMUM_DIGITS);
  const reducer = (count, action) => {
    handleDispatchedEvent(action.type);
  };

  const [state, dispatch] = useReducer(reducer, count);
  useEffect(() => handleCounterChange(count), [count]);

  function handleDispatchedEvent(actionType) {
    switch (actionType) {
      case 'INCREMENT':
        setCounter(count + 1);
        break;
      case 'DECREMENT':
        const newValue = count === MINIMUM_DIGITS ? MINIMUM_DIGITS : count - 1;
        setCounter(newValue);
        break;
      case 'RESET':
        setCounter(MINIMUM_DIGITS);
        break;
      default:
        throw new Error();
    }
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex mt={2} mb={3}>
        Number of digits
      </Flex>

      <Flex>
        <Button
          mr={2}
          sx={circleButton}
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          <FontAwesomeIcon
            sx={{ fontWeight: '900' }}
            icon="fa-solid fa-minus"
          />
        </Button>

        <Input sx={{ width: '60px' }} type="text" value={count} />
        <Button
          ml={2}
          sx={circleButton}
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </Button>
      </Flex>
    </Flex>
  );
}

const circleButton = {
  backgroundColor: 'black',
  display: 'flex',
  height: '3vw',
  width: '3vw',
  borderRadius: '50%',
  padding: '3vw',
  fontSize: '2vw',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  border: 'none',
};

export default GameCounter;
