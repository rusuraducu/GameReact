import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import * as lib from './algorithm/PiCalculator.js';

const GameResult = forwardRef(({ count }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [digits, setDigits] = useState([]);
  const [pi, setPi] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    startGame() {
      if (!isPlaying) {
        setDigits([]);
        resetStates(true);
        setPi(lib.calculateNthDigitsOfPi(count));
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
    <div>
      <div> 3. </div>
      {digits.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
      {isPlaying && pi.length !== digits.length ? (
        <span class="loader" style={{ with: 10 }}></span>
      ) : null}
    </div>
  );
});

export default GameResult;
