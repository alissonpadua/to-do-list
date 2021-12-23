import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { FiCheckSquare } from 'react-icons/fi';

import Button from '../Button';

import { Container, Controls } from './styles';

interface CardProps {
  description: string;
}

const Card: React.FC<CardProps> = ({ description }) => {
  return (
    <Container>
      <h3>{description}</h3>
      <Controls>
        <Button background="#fff" color="green" icon={FiCheckSquare} />
        <Button background="#fff" color="red" icon={BsTrash} />
      </Controls>
    </Container>
  );
};

export default Card;
