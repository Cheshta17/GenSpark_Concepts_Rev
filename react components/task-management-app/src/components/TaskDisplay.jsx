import React from "react"

// Presentational Component
const TaskDisplay = ({ task }) => (
  <div>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <span>Status: {task.completed ? "Completed" : "Pending"}</span>
  </div>
)

export default TaskDisplay

