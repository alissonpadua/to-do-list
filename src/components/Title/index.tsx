import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  textColor?: string;
}

const Title: React.FC<TitleProps> = ({ textColor, children, ...rest }) => {
  return (
    <Container textColor={textColor} {...rest}>
      {children}
    </Container>
  );
};

export default Title;
