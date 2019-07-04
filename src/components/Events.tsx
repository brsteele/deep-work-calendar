import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import Event from './Event';

const Events: React.FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const debouncedHandleWindowResize = useCallback(
    debounce(() => {
      handleWindowResize(setWindowWidth);
    }, 200),
    []
  );

  const eventsRef: React.RefObject<HTMLDivElement> = React.createRef();

  useEffect(() => {
    setWindowWidth(document.body.clientWidth);
    window.addEventListener('resize', debouncedHandleWindowResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleWindowResize);
    };
  }, [debouncedHandleWindowResize]);

  return (
    <div ref={eventsRef} className="days" id="events">
      <Event windowWidth={windowWidth} />
    </div>
  );
};

const handleWindowResize = (callBack: (height: number) => void) => {
  callBack(document.body.clientWidth);
};

export default Events;
