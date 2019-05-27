import React from 'react';
import Hour from './Hour';
import './dailyCalendar.css';
import Events from './Events';
import TimeLine from './TimeLine';

const HOURS_IN_CALENDAR = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23
];

const DailyCalendar: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="calendarContainer">
        <div className="timings">
          {HOURS_IN_CALENDAR.map(hour => {
            const isAM = hour < 12 ? true : false;
            return <Hour time={hour} am={isAM} key={hour} />;
          })}
        </div>
        <Events />
        <TimeLine />
      </div>
    </div>
  );
};

export default DailyCalendar;
