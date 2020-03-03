import React, { useContext } from 'react';

import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {
  const { removeTask } = useContext(TaskListContext);

  const deleteItem = id => {
    removeTask(id);
  };

  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button
          className='btn-delete task-btn'
          onClick={() => {
            deleteItem(task.id);
          }}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        <button className='btn-edit task-btn'>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
