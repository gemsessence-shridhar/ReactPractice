import Todo from "./Todo";

const TodoList = ({ todos, handleTodoChange, handleTodoUpdate, handleTodoDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={`todo-${index}`}
          handleTodoChange={handleTodoChange}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoDelete={handleTodoDelete}
          {...todo} 
        />
      ))}
    </ul>
  )
}

export default TodoList;
