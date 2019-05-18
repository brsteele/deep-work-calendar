import React, { useState, useRef } from 'react';
import { string } from 'prop-types';

const Header: React.FunctionComponent<Props> = ({ user }) => {
  const { firstName, lastName, userName } = user;
  return <header>Header goes here</header>;
};

interface Props {
  user: User;
}

interface User {
  firstName: string;
  lastName: string;
  userName: string;
}

export default Header;
