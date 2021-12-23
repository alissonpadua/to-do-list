import styled, { css } from 'styled-components';

interface ContainerProps {
  focused: boolean;
  filled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232229;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232229;
  color: #666360;

  ${props =>
    props.focused &&
    css`
      border: 2px solid red;
      color: red;
    `}

  ${props =>
    props.filled &&
    css`
      color: red;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    width: 100%;
    color: #fff;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
