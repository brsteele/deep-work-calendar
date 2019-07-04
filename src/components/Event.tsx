import React from 'react';

const Event: React.FunctionComponent<Props> = ({ windowWidth }) => {
  return (
    <div className="event">
      <div className="title">{windowWidth}</div>
    </div>
  );
};

interface Props {
  windowWidth: number;
}

export default Event;
