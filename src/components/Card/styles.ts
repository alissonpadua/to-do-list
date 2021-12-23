import styled, { css } from 'styled-components';

interface CardProps {
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 5px;
`;

export const Controls = styled.div<CardProps>`
  display: flex;
  margin-left: 20px;
  align-items: center;

  ${props =>
    props.disabled &&
    css`
      gap: 10px;
    `}
`;
