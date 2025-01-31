import React, { memo } from "react"

// Memoized Component
const MemoizedTask = memo(({ task }) => (
  <div>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
  </div>
))

export default MemoizedTask

