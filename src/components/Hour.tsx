import React from 'react';
import './dailyCalendar.css';

const Hour: React.FunctionComponent<Props> = ({ time, am }) => {
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
  time: string;
  am: boolean;
}

export default Hour;
