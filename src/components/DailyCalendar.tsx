import React from 'react';
import Hour from './Hour';
import './dailyCalendar.css';
import Events from './Events';

const HOURS_IN_CALENDAR = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5'];

const DailyCalendar: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="timings">
        {HOURS_IN_CALENDAR.map(hour => {
          const isAM = parseInt(hour) >= 8 && parseInt(hour) !== 12;
          return <Hour time={hour} am={isAM} key={hour} />;
        })}
      </div>
      <Events />
      <div className="timer-line" />
    </div>
  );
};

export default DailyCalendar;
