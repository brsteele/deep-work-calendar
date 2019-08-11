import React from 'react';
import * as sc from './App.StyledComponents';
import Reset from './styledComponents/reset';
import Event from './components/Event';

const App: React.FC = () => {
  return (
    <sc.AppContainer>
      <Reset />
      <sc.Fonts />
      <Event
        type={'focus'}
        handleClick={() => console.log('something something')}
        eventInfo={{
          title: 'Focused Event',
          description: 'some description'
        }}
      />
    </sc.AppContainer>
  );
};

export default App;
