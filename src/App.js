import { useState, useEffect } from 'react';

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {

  /**
   * react hook useState to set the todos to see what's stored in LocalStorage, or use blank array if no
   * localstorage data is found
   */
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos')
    // returns parsed localdata or an empty array if no local data is present
    return localData ? JSON.parse(localData) : []
  })

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

