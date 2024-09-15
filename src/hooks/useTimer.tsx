import {useState, useEffect} from 'react';

const useTimer = (initialTime: number, interval = 1000) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: string | number | NodeJS.Timeout | undefined;

    if (isRunning) {
      timerId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - interval);

        if (timeLeft <= 0) {
          setIsRunning(false);
          clearInterval(timerId);
        }
      }, interval);
    }

    return () => clearInterval(timerId);
  }, [isRunning, interval, timeLeft]);

  const startTimer = () => {
    setTimeLeft(initialTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return {timeLeft, isRunning, startTimer, stopTimer};
};

export default useTimer;
