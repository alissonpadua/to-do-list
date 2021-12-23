import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  background: string;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  background: none;
  padding: 10px;
  border: 0;
  font-weight: bolder;
  font-size: 24px;
  transition: outline 2s;
  border-radius: 5px;
  color: ${props => props.color};
  background: ${props => props.background};

  &:hover {
    background-color: ${props => shade(0.1, props.background)};
  }
  &:disabled {
    color: #ddd;
  }
  svg {
    align-self: center;
  }
`;
