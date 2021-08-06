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

  /**
   * runs 1st time when component mounts
   * runs after the previous, each time changes/updates are made to todos (see useState above)
   */
  useEffect(() => {
    // check for any todos in an array and if any exist we store it in localstorage
    // this listens to any changes on the todos array state
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // use setTodos method from state to array ...spread in existing and new todo
  function addTodo (todoTitle) {
    setTodos([...todos, todoTitle])
  }

  // splice to remove 1st instance of toto. Splice ensures we don't delete all instances of duplicate todos
  function removeTodo (todoTitle) {
    todos.splice( todos.indexOf(todoTitle), 1)
    setTodos([...todos])
  }

  return (
    <>
      <h1>My Todos</h1>

      <TodoForm saveTodo={addTodo} />

        <ul className='list'>
        {todos && todos.map((todo, index) => (
          <Todo
            key={index.toString()}
            title={todo}
            onDelete={removeTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default App;

