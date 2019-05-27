import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const Events: React.FunctionComponent = () => {
  console.log('foo');
  const [windowWidth, setWindowWidth] = useState(0);

  const ahandleWindowResize = debounce(() => {
    handleWindowResize(setWindowWidth);
  }, 500);

  const eventsRef: React.RefObject<HTMLDivElement> = React.createRef();

  useEffect(() => {
    setWindowWidth(document.body.clientWidth);
    window.addEventListener('resize', ahandleWindowResize);
    return () => {
      window.removeEventListener('resize', ahandleWindowResize);
    };
  }, []);

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
