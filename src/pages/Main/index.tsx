import React, { useContext, useState } from 'react';
import { BiTask } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';

import TodoContext from '../../context/todo';

import Card from '../../components/Card';
import Deck from '../../components/Deck';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Button from '../../components/Button';

import { Container } from './styles';

const Main: React.FC = () => {
  const { tasks, addNewTask } = useContext(TodoContext);
  const [description, setDescription] = useState<string>('');

  const addTask = () => {
    addNewTask(description);
    setDescription('');
  };

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
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Button
          onClick={() => addTask()}
          background="red"
          color="white"
          icon={MdAdd}
        />
      </div>
      <Deck>
        {tasks.map(task => (
          <Card disabled={task.validated} task={task} key={task.id} />
        ))}
      </Deck>
    </Container>
  );
};

export default Main;
