import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { useTaskReducer } from '../hooks/useTaskReducer';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useTaskReducer();

  const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};