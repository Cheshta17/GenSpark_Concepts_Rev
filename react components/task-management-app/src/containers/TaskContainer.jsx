import React from "react"
import TaskList from "../components/TaskList"
import TaskForm from "../components/TaskForm"
import UncontrolledTaskForm from "../components/UncontrolledTaskForm"

const TaskContainer = ({ tasks, addTask }) => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <UncontrolledTaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default TaskContainer

