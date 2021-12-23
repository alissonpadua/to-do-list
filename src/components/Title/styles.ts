import styled from 'styled-components';

interface ContainerProps {
  textColor?: string;
}

export const Container = styled.h3<ContainerProps>`
  color: ${props => props.textColor || '#FFF'};
  margin-bottom: 25px;
`;
