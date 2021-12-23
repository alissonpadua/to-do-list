import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

interface Task {
  id: string;
  description: string;
  validated: boolean;
}

interface TodoProps {
  tasks: Task[];
  // eslint-disable-next-line no-unused-vars
  addNewTask(description: string): void;
  // eslint-disable-next-line no-unused-vars
  removeTask(id: string): void;
  // eslint-disable-next-line no-unused-vars
  approveTask(id: string): void;
}

const TodoContext = createContext<TodoProps>({} as TodoProps);

export const TodoContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = (description: string): void => {
    if (!description || description === '') {
      toast.error('You should fill the Task Description field');
    } else {
      const newTask = {
        id: `${Math.random()}-task-id`,
        description,
        validated: false,
      };
      setTasks([{ ...newTask }, ...tasks]);
    }
  };

  const removeTask = (id: string): void => {
    const newTaskArray = tasks.filter(task => task.id !== id);
    setTasks([...newTaskArray]);
  };

  const approveTask = (id: string): void => {
    const mutableTasks = [...tasks];
    const task = mutableTasks.find(t => t.id === id);

    if (!task) {
      toast.error('Task not found');
    } else {
      task.validated = true;
      setTasks([...mutableTasks]);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addNewTask,
        removeTask,
        approveTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
