import { useContext } from "react";
import { orderBy } from "lodash";
import { TodosContext } from '@/contexts/TodosContext';
import Todo from "./Todo";

const TodoList = () => {
  const todos = useContext(TodosContext);
  const orderedTodos = orderBy(todos, ['id']);

  if (todos.length <= 0) {
    return null;
  }

  return (
    <>
      <h1 className="mb-8">My Todos</h1>
      <ul>
        {orderedTodos.map((todo, index) => (
          <Todo key={`todo-${index}`} {...todo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;
