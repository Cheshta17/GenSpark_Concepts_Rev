import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';

export const TaskItem = ({ id, text, completed }) => {
  const { dispatch } = useTaskContext();

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: id })}
        style={{ marginRight: '8px' }}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    </li>
  );
};