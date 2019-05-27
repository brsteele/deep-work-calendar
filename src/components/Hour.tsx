import React from 'react';
import './dailyCalendar.css';

const Hour: React.FunctionComponent<Props> = ({ time, am }) => {
  if (time > 12) {
    time -= 12;
  } else if (time === 0) {
    time = 12;
  }
  return (
    <>
      <div>
        <span> {time}:00 </span> {am ? 'AM' : 'PM'}
      </div>
      <div>{time}:30</div>
    </>
  );
};

interface Props {
  time: number;
  am: boolean;
}

export default Hour;
