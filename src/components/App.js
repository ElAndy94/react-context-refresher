import React from 'react';

import TaskListContextProvider from '../context/TaskListContext';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='main'>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;

//rafce
