import React, { useState, useEffect } from "react";
import "./timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleStart() {
    if (!isRunning) {
      setIsRunning(true);
    }
  }
  function handlePause() {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }

  function handleReset() {
    clearInterval(intervalId);
    setSeconds(0);
    setIsRunning(false);
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>{seconds} seconds</p>
      <button onClick={handleStart} className="start-button">
        Start
      </button>
      <button onClick={handlePause} className="pause-button">
        Pause
      </button>
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
    </div>
  );
}

export default Timer;
