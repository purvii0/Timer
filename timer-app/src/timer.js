import React, { useState, useEffect, useRef } from "react";
import "./timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  // const headingref = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRunning]);

  function handleStart() {
    if (!isRunning) {
      setIsRunning(true);
    }
  }
  function handlePause() {
    if (isRunning) {
      clearInterval(intervalId.current);
      setIsRunning(false);
    }
  }

  function handleReset() {
    clearInterval(intervalId.current);
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
