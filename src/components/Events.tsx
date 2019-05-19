import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const Events: React.FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [eventsContainerDimensions, setEventsContainerDimensions] = useState({
    height: 0,
    width: 0
  });

  const useHandleWindowResize = debounce(() => {
    handleWindowResize(setWindowWidth);
  }, 100);

  const eventsRef: React.RefObject<HTMLDivElement> = React.createRef();

  useEffect(() => {
    setWindowWidth(document.body.clientWidth);
    window.addEventListener('resize', useHandleWindowResize);
    return () => {
      window.removeEventListener('resize', useHandleWindowResize);
    };
  }, []);

  useEffect(() => {
    const {
      height,
      width
    } = (eventsRef.current as HTMLDivElement).getBoundingClientRect();
    setEventsContainerDimensions({ height, width });
  }, [windowWidth]);

  return (
    <div ref={eventsRef} className="days" id="events">
      <div className="event">
        <div className="title">{windowWidth}</div>
      </div>
    </div>
  );
};

const handleWindowResize = (callBack: (height: number) => void) => {
  callBack(document.body.clientWidth);
};

export default Events;
