import React, { useMemo } from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { tasks, filter, dispatch } = useTaskContext();

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div>
      <ul style={{ marginBottom: '16px' }}>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
      <div>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          style={{ marginRight: '8px', padding: '4px 8px', backgroundColor: '#f0f0f0', border: 'none' }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          style={{ marginRight: '8px', padding: '4px 8px', backgroundColor: '#f0f0f0', border: 'none' }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
          style={{ padding: '4px 8px', backgroundColor: '#f0f0f0', border: 'none' }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};