import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <p>Task List</p>
    </div>
  );
};

export default TaskList;
