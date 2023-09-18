// Tasks.js
import React from 'react';
import SideBar from './components/SideBar';
import TaskComp from './components/TaskComp';

const Tasks = () => {
  return (
    <div className="d-flex vh-100 bg-primary">
      <SideBar />
      <TaskComp />
    </div>
  );
}

export default Tasks;
