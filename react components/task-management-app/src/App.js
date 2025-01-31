import React, { useState } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import TaskContainer from "./containers/TaskContainer"
import PureTaskCounter from "./components/PureTaskCounter"
import withLogging from "./components/withLogging"
import Button from "./components/Button"

const LoggedTaskContainer = withLogging(TaskContainer)

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }])
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <LoggedTaskContainer tasks={tasks} addTask={addTask} />
        <PureTaskCounter count={tasks.length} />
        <Button onClick={() => console.log("Tasks:", tasks)}>Log Tasks</Button>
      </div>
    </ErrorBoundary>
  )
}

export default App

