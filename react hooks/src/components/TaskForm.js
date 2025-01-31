import React, { useState, useCallback } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

export const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTaskContext();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (taskText.trim()) {
        dispatch({ type: 'ADD_TASK', payload: taskText.trim() });
        setTaskText('');
      }
    },
    [taskText, dispatch]
  );

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
        Add Task
      </button>
    </form>
  );
};