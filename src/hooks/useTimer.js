import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (totalDuration) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  const timerRef = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }, [setSeconds, setIsRunning]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(totalDuration);
  }, [setIsRunning, setSeconds]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  useEffect(() => {
    return () => timerRef && clearInterval(timerRef.current);
  }, []);

  return {
    isRunning,
    seconds,
    start,
    stop,
  };
};

export default useTimer;
