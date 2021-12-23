import React from 'react';
import { BiTask } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';

import Card from '../../components/Card';
import Deck from '../../components/Deck';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Button from '../../components/Button';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Title textColor="red">TO-DO LIST</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '25px',
          marginBottom: '25px',
        }}
      >
        <Input
          name="description"
          id="description"
          icon={BiTask}
          placeholder="Type the Task Description"
        />
        <Button background="red" color="white" icon={MdAdd} />
      </div>
      <Deck>
        <Card description="task 1" />
        <Card description="task 2" />
        <Card description="task 3" />
      </Deck>
    </Container>
  );
};

export default Main;
