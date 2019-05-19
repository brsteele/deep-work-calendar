import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const Events: React.FunctionComponent = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [eventsContainerDimensions, setEventsContainerDimensions] = useState({
    height: 0,
    width: 0
  });

  const useHandleWindowResize = debounce(() => {
    handleWindowResize(setWindowHeight);
  }, 100);

  const eventsRef: any = React.createRef();

  useEffect(() => {
    setWindowHeight(document.body.clientHeight);
    window.addEventListener('resize', useHandleWindowResize);
    return () => {
      window.removeEventListener('resize', useHandleWindowResize);
    };
  }, []);

  useEffect(() => {
    const { height, width } = eventsRef.current.getBoundingClientRect();
    setEventsContainerDimensions({ height, width });
  }, [windowHeight]);

  return (
    <div ref={eventsRef} className="days" id="events">
      <div className="event">
        <div className="title">{windowHeight}</div>
      </div>
    </div>
  );
};

const handleWindowResize = (callBack: (height: number) => void) => {
  callBack(document.body.clientHeight);
};

export default Events;
