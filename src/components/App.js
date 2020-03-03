import React from 'react';

import Header from './Header';
import TaskForm from './TaskForm';
import TaskListContextProvider from '../context/TaskListContext';
import TaskList from './TaskList';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;

//rafce
