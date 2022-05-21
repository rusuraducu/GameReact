import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import * as PiCalculator from './algorithm/PiCalculator.js';
import { Spinner, Card, Text, Flex } from 'theme-ui';

const GameResult = forwardRef(({ count }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [digits, setDigits] = useState([]);
  const [pi, setPi] = useState([]);

  useImperativeHandle(ref, () => ({
    startGame() {
      if (!isPlaying) {
        setDigits([]);
        resetStates(true);
        setPi(PiCalculator.calculateNthDigitsOfPi(count + 1));
      }
    },

    stopGame() {
      if (isPlaying) {
        resetStates(false);
      }
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      if (isPlaying && pi.length !== digits.length) {
        let tempDigits = [...digits, pi[currentIndex]];
        setDigits(tempDigits);
        setCurrentIndex(currentIndex + 1);
      } else if (isPlaying) {
        resetStates(false);
      }
    }, 100);
  }, [pi, isPlaying, digits]);

  const resetStates = (isPlaying) => {
    setCurrentIndex(0);
    setIsPlaying(isPlaying);
    setPi([]);
  };

  return (
    <Card>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <DigitRender value="3." />
        {digits.map((digit, index) => (
          <DigitRender value={digit} key={index} />
        ))}

        {isPlaying && pi.length !== digits.length ? (
          <DigitRender
            value={<Spinner sx={{ height: 'auto', width: 'auto' }} />}
            isSpinner={true}
          />
        ) : null}
      </Flex>
    </Card>
  );
});

const DigitRender = ({ value, isSpinner }) => {
  return (
    <Flex
      sx={{
        height: '25px;',
        width: '15px',
        justifyContent: 'space-around',
      }}
    >
      {isSpinner ? value : <Text sx={{ fontSize: 3 }}>{value}</Text>}
    </Flex>
  );
};

export default GameResult;
