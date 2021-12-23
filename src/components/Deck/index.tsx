import React from 'react';

import { Container } from './styles';

const Deck: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Deck;
