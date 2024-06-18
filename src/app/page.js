"use client"

import { useReducer } from "react";
import { orderBy } from "lodash";
import TodoList from "@/components/todo/TodoList";
import Clock from '@/components/clock';
import todoReducer from '@/reducers/todo';
import styles from "../styles/todos/list.module.css";

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
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

  const handleTodoChange = (event, todoId) => {
    dispatch({
      type: 'changeCompletion',
      todoId: todoId,
      isCompleted: event.target.checked
    });
  }

  const handleTodoUpdate = (todoId, todoTitle) => {
    dispatch({
      type: 'updated',
      todoId: todoId,
      todoTitle: todoTitle
    });
  }

  const handleTodoDelete = (todoId) => {
    dispatch({
      type: 'deleted',
      todoId: todoId
    });
  }

  return (
    <div className={`flex flex-col justify-center items-center gap-4`}>
      {/* <Clock /> */}

      <form className="border-2 border-gray-800 rounded-lg p-4 w-50" onSubmit={handleFormSubmit}>
        <input type="text" name="title" className="border-2 rounded mr-4" />
        <input type="submit" value="submit" />
        </form>

      <h1 className="mb-8">My Todos</h1>
      {todos.length > 0 && (
        <TodoList
          todos={orderBy(todos, ['id'])}
          handleTodoChange={handleTodoChange}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoDelete={handleTodoDelete}
        />
      )}
    </div>
  )
}
export default Todo;
