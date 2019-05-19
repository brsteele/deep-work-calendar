import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const Events: React.FunctionComponent = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [eventsContainerDimensions, setEventsContainerDimensions] = useState({
    height: 0,
    width: 0
  });
  const eventsRef: any = React.createRef();
  useEffect(() => {
    setWindowHeight(document.body.clientHeight);
    window.addEventListener('resize', debounce(dumbFunc, 100));
    return () => {
      window.removeEventListener('resize', dumbFunc);
    };
  }, []);

  useEffect(() => {
    const { height, width } = eventsRef.current.getBoundingClientRect();
    setEventsContainerDimensions({ height, width });
  }, [windowHeight]);

  const dumbFunc = () => {
    const height = document.body.clientHeight;
    setWindowHeight(height);
  };

  return (
    <div ref={eventsRef} className="days" id="events">
      <div className="event">
        <div className="title">{windowHeight}</div>
      </div>
    </div>
  );
};

export default Events;
