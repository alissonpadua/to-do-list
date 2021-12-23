import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
  color: string;
  background: string;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  color,
  background,
  ...rest
}) => {
  return (
    <Container {...rest} color={color} background={background}>
      <Icon size={30} />
    </Container>
  );
};

export default Button;
