import React from 'react';
import { Fragment } from 'react';
import Navbar from './components/UI/Navbar';
import Header from './components/UI/Header';
import UserList from './components/ListComponents/UserList';
import { TaskProvider } from './components/ListComponents/TaskContext';
import TaskCounter from './components/TaskManager/TaskCounter';



const App = () => {
  return (
    <Fragment>
      <TaskProvider>
        <Navbar/>
        <TaskCounter/>
        <Header/>
        <UserList/>
      </TaskProvider>
    </Fragment>
  )
}

export default App;