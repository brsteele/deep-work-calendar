import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Reset = createGlobalStyle`${reset}`;
export const AppContainer = styled.div`
  background: rgba(45, 45, 45, 1);
  min-height: 100vh;
`;
export const CalendarContainer = styled.div`
  width: 100%;
  background-color: rgba(75, 75, 75, 1);
`;
