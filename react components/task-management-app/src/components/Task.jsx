import React from "react"
import PropTypes from "prop-types"

// Functional Component
const Task = ({ task }) => (
  <div>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default Task

