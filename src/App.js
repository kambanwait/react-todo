import { useState, useEffect } from 'react';

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  function AddTodo (todoTitle) {
    setTodos([...todos, todoTitle])
  }

  function removeTodo (todoTitle) {
    todos.splice( todos.indexOf(todoTitle), 1)
    setTodos([...todos])
  }

  return (
    <div>
      <h1>My Todos</h1>

      <TodoForm saveTodo={AddTodo} />

      {todos.map((todo, index) => (
        <Todo
          key={index.toString()}
          title={todo}
          onDelete={removeTodo}
        />
      ))}
    </div>
  );
}

export default App;

