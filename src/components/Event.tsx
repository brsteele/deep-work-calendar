import React from 'react';
import { colors } from '../styledComponents/colors';
import styled from 'styled-components';

interface Props {
  type: 'focus' | 'shallow';
  handleClick: () => void;
  eventInfo: {
    title: string;
    description: string;
  };
}
const Event = ({ type, handleClick, eventInfo }: Props) => {
  return (
    <StyledEvent type={type} onClick={handleClick}>
      <h2>{eventInfo.title}</h2>
      <p>{eventInfo.description}</p>
    </StyledEvent>
  );
};

interface StyledProps {
  type: 'focus' | 'shallow';
}

const StyledEvent = styled.div`
  box-sizing: border-box;
  border: 2px solid;
  border-color: ${(props: StyledProps) => {
    return props.type === 'focus' ? colors.focusGreen : colors.shallowBrown;
  }};
  background: ${colors.white};
  padding: 10px;
  width: 850px;
  max-width: 100%;
  height: 130px;
`;

export default Event;
