"use client"
import { useState, useContext } from "react";
import { TodoDispatchContext } from "@/contexts/TodosContext";

const Todo = ({
  id,
  title,
  details,
  isCompleted,
  dueDate,
}) => {
  const dispatch = useContext(TodoDispatchContext);

  const [currentTodoTitle, setCurrentTodoTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleTodoChange = (event) => {
    dispatch({ type: 'changeCompletion', todoId: id, isCompleted: event.target.checked });
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
    dispatch({ type: 'updated', todoId: id, todoTitle: currentTodoTitle });
  }

  const handleTodoDelete = () => {
    dispatch({ type: 'deleted', todoId: id });
  }

  return (
    <li>
      <input
        type="checkbox"
        value={title}
        className="mr-2"
        checked={isCompleted}
        onChange={(event) => handleTodoChange(event)}
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
      <button className="border p-1" onClick={handleTodoDelete}>Delete</button>
    </li>
  )
}
export default Todo;
