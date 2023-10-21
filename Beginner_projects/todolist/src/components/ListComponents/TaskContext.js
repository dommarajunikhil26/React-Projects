// TaskContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedNumberOfTasks, setCompletedNumberOfTasks] = useState(0);
  const [countOfPendingTasks, setCountOfPendingTasks] = useState(0);

  return (
    <TaskContext.Provider
      value={{
        totalTasks,
        setTotalTasks,
        completedNumberOfTasks,
        setCompletedNumberOfTasks,
        countOfPendingTasks,
        setCountOfPendingTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
