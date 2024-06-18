"use client"
import { useState } from "react";

const Todo = ({
  id,
  title,
  details,
  isCompleted,
  dueDate,
  handleTodoChange,
  handleTodoUpdate,
  handleTodoDelete
}) => {
  const [currentTodoTitle, setCurrentTodoTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    handleTodoUpdate(id, currentTodoTitle);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={title}
        className="mr-2"
        checked={isCompleted}
        onChange={(event) => handleTodoChange(event, id)}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={currentTodoTitle}
          onChange={(e) => setCurrentTodoTitle(e.target.value)}
        />
      ) : (
        isCompleted ? <del>{title}</del> : title 
      )}

      <button className="border p-1" onClick={handleEdit}>Edit</button>
      <button className="border p-1" onClick={() => handleTodoDelete(id)}>Delete</button>
    </li>
  )
}
export default Todo;
