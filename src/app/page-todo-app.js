"use client"

import TodosContextProvider from '@/contexts/TodosContext';
import AddTodo from '@/components/todo/AddTodo';
import TodoList from "@/components/todo/TodoList";

const Todo = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-4`}>
      <TodosContextProvider>
        <AddTodo />
        <TodoList />
      </TodosContextProvider>
    </div>
  )
}
export default Todo;
