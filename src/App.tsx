import React from 'react';
import * as sc from './App.StyledComponents';
import DailyCalendar from './components/DailyCalendar';

const App: React.FC = () => {
  return (
    <sc.AppContainer>
      <sc.Reset />
      <sc.CalendarContainer>
        <DailyCalendar />
      </sc.CalendarContainer>
    </sc.AppContainer>
  );
};

export default App;
