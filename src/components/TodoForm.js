import { useState } from 'react'

function TodoForm (props) {

  const [value, setValue] = useState('')

  function handleFormSubmit (event) {
    event.preventDefault()
    props.saveTodo(value)

    // clear the input field by setting value to empty string
    setValue('')
  }

  function handleOnInputchange (event) {
    setValue(event.target.value)
  }

  return (
    <form
      className='form'
      onSubmit={handleFormSubmit}
    >
      <label htmlFor='newTodoInput'>Add a new Todo:</label>

      <input
        type='text'
        placeholder='e.g: Clean up this code!'
        id='newTodoInput'
        value={value}
        onChange={handleOnInputchange}
      />

      <p className='small'>Tip: Press Enter to add your new todo</p>
    </form>
  )
}

export default TodoForm