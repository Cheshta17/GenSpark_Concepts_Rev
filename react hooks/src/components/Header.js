import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

export const Header = () => {
  const { tasks } = useTaskContext();
  const prevTaskCountRef = useRef(0);

  useEffect(() => {
    document.title = `${tasks.length} tasks`;
  }, [tasks.length]);

  useLayoutEffect(() => {
    if (tasks.length > prevTaskCountRef.current) {
      console.log('Task count increased!');
    }
    prevTaskCountRef.current = tasks.length;
  }, [tasks.length]);

  return <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Task Manager ({tasks.length} tasks)</h1>;
};