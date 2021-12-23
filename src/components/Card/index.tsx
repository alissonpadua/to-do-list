import React, { useContext } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { GoDiffRemoved } from 'react-icons/go';

import TodoContext from '../../context/todo';

import Button from '../Button';

import { Container, Controls } from './styles';

interface Task {
  id: string;
  description: string;
  validated: boolean;
}

interface CardProps {
  task: Task;
  disabled: boolean;
}

const Card: React.FC<CardProps> = ({ task, disabled }) => {
  const { removeTask, approveTask } = useContext(TodoContext);

  return (
    <Container>
      <h3>{task.description}</h3>
      <Controls disabled={disabled}>
        {!task.validated && (
          <Button
            disabled={task.validated}
            onClick={() => approveTask(task.id)}
            background="#fff"
            color="green"
            icon={FiCheckSquare}
          />
        )}
        {task.validated && <FiCheckSquare size={30} />}
        <Button
          onClick={() => removeTask(task.id)}
          background="#fff"
          color="red"
          icon={GoDiffRemoved}
        />
      </Controls>
    </Container>
  );
};

export default Card;
