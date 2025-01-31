import React, { useMemo } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

export const Statistics = () => {
  const { tasks } = useTaskContext();

  const stats = useMemo(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const percentComplete = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    return { totalTasks, completedTasks, activeTasks, percentComplete };
  }, [tasks]);

  return (
    <div style={{ marginTop: '16px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Statistics</h2>
      <p>Total tasks: {stats.totalTasks}</p>
      <p>Completed tasks: {stats.completedTasks}</p>
      <p>Active tasks: {stats.activeTasks}</p>
      <p>Percent complete: {stats.percentComplete.toFixed(2)}%</p>
    </div>
  );
};