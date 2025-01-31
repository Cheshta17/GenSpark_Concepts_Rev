import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Statistics } from './components/Statistics';

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Header />
        <TaskForm />
        <TaskList />
        <Statistics />
      </div>
    </TaskProvider>
  );
}

export default App;