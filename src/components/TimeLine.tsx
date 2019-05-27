import React, { useEffect, useState } from 'react';

const TimeLine = () => {
  const [elapsedPercent, updateElapsedPercent] = useState(
    calculateElapsedPercent(new Date())
  );

  useEffect(() => {
    const updater = setInterval(() => {
      updateElapsedPercent(calculateElapsedPercent(new Date()));
    }, 300000);
    return () => {
      clearInterval(updater);
    };
  }, [elapsedPercent]);

  const style = {
    top: `${elapsedPercent * 100}%`
  };

  return <div className="timer-line" style={style} />;
};

const calculateElapsedPercent = (timeOfDay: Date): number => {
  const MINUTES_IN_DAY = 24 * 60;
  const elapsedTimeInMinutes =
    timeOfDay.getHours() * 60 + timeOfDay.getMinutes();
  return elapsedTimeInMinutes / MINUTES_IN_DAY;
};

export default TimeLine;
