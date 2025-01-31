import React, { useRef } from "react"

// Uncontrolled Component
const UncontrolledTaskForm = ({ onSubmit }) => {
  const titleRef = useRef()
  const descriptionRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    })
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={titleRef} placeholder="Task Title" required />
      <input type="text" ref={descriptionRef} placeholder="Task Description" required />
      <button type="submit">Add Task (Uncontrolled)</button>
    </form>
  )
}

export default UncontrolledTaskForm

