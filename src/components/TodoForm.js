import { useState } from 'react'

/**
 * To do form holds and handles the input form at the top of the app where users can add a to do
 * @param {Object} props contains function from praent app.js to call when want to save a to do (props.saveTodo).
 * pass in the value from the input field
 * @returns {JSX.Element}
 * @constructor
 */
function TodoForm (props) {

  const [value, setValue] = useState('')

  function handleFormSubmit (event) {
    event.preventDefault()

    // check to see if the input is empty, if so, return immediately
    // Todo: highlight error to user when no text is entered, useState to control error state?
    if (value.trim() === "") return false

    // send the new value to the props function in app.js
    props.saveTodo(value)

    // clear the input field by setting value to empty string
    setValue('')
  }

  // each time a user types into the input field, we fire an event to update the value in our state
  function handleOnInputChange (event) {
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