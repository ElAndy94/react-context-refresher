import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: 'Read the book', id: 1 },
    { title: 'Wash the car', id: 2 },
    { title: 'Write some code', id: 3 }
  ]);

  const addTask = title => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(i => i.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
