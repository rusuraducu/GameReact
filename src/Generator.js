import React, { useEffect, useState } from 'react';
import * as lib from './algorithm/PiCalculator.js';

function ddd() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [digits, setDigits] = useState([]);
  const [pi, setPi] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (isPlaying && pi.length !== digits.length) {
        let tempDigits = [...digits, pi[currentIndex]];
        setDigits(tempDigits);
        setCurrentIndex(currentIndex + 1);
      } else if (isPlaying) {
        setCurrentIndex(0);
        setIsPlaying(false);
        setPi([]);
      }
    }, 100);
  }, [pi, isPlaying, digits]);

  function stop() {
    if (isPlaying) {
      setCurrentIndex(0);
      setIsPlaying(false);
      setPi([]);
    }
  }

  function start() {
    if (isPlaying) {
      return;
    }
    setDigits([]);
    setPi([]);
    setCurrentIndex(0);
    setIsPlaying(true);
    var iter = lib.generateDigitsOfPi();
    const myTempArray = [];
    for (let i = 0; i < 10; i++) {
      let currentDigit = iter.next().value;
      myTempArray.push(currentDigit);
    }
    setPi(myTempArray);
  }
  return (
    <div>
      <button onClick={() => start()}> Start </button>
      <button onClick={() => stop()}> Stop </button>
      {digits.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
      {isPlaying && pi.length !== digits.length ? (
        <span class="loader" style={{ with: 10 }}></span>
      ) : null}
    </div>
  );
}
