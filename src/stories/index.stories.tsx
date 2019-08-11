import React from 'react';
import { storiesOf } from '@storybook/react';
import Event from '../components/Event';

storiesOf('Event', module)
  .add('Event', () => {
    return (
      <Event
        type={'focus'}
        handleClick={() => {
          console.log('something');
        }}
        eventInfo={{
          title: 'Focused Event',
          description: 'some description'
        }}
      />
    );
  })
  .add('Shallow', () => {
    return (
      <Event
        type={'shallow'}
        handleClick={() => {
          console.log('something');
        }}
        eventInfo={{
          title: 'Shallow Event',
          description: 'Some Description'
        }}
      />
    );
  });
