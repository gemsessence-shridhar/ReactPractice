"use client"

import { useContext } from "react";
import { TodosContext, TodoDispatchContext } from "@/contexts/TodosContext";

const AddTodo = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodoDispatchContext);

  const initializeTodoObject = () => {
    return {
      id: todos.length + 1,
      isCompleted: false
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const todoObject = initializeTodoObject()
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      todoObject[key] = value;
    })

    dispatch({ type: 'added', newTodo: todoObject });
    event.target.reset();
  }

  return (
    <form className="border-2 border-gray-800 rounded-lg p-4 w-50" onSubmit={handleFormSubmit}>
      <input type="text" name="title" className="border-2 rounded mr-4" />
      <input type="submit" value="submit" />
    </form>
  )
}

export default AddTodo;
