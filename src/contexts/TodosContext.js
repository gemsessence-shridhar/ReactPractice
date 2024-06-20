import { createContext, useReducer } from "react";
import todoReducer from "@/reducers/todo";

export const TodosContext = createContext();
export const TodoDispatchContext = createContext();

const initialTodos = [
  {
    id: "1",
    title: "Todo 1",
    isCompleted: false,
    dueDate: new Date()
  },
  {
    id: "2",
    title: "Todo 2",
    isCompleted: false,
    dueDate: new Date()
  }
]

const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)

  return (
    <TodosContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;


