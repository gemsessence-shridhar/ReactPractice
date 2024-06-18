const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...todos,
        action.newTodo,
      ]
    }
    case 'changeCompletion': {
      const targetTodo = todos.find((todo) => todo.id === action.todoId)
      const changedTodo = { ...targetTodo, isCompleted: action.isCompleted }
      const remainingTodos = todos.filter((todo) => todo.id !== action.todoId)
      return [...remainingTodos, changedTodo];
    }
    case 'updated': {
      const targetTodo = todos.find(todo => todo.id === action.todoId)
      targetTodo.title = action.todoTitle;
      return todos.map(todo => {
        if (todo.id === action.todoId) {
          return targetTodo;
        } else {
          return todo;
        }
      })
    }
    case 'deleted': {
      return todos.filter(todo => todo.id !== action.todoId)
    }
  }
}

export default todoReducer;
