import { useState } from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

/**
 * TodoCard that displays passed in title and handles modal to confirm/cancel deletion of To do
 * @param {String} title the To do title passed in from the parent
 * @param {Function} onDelete the function to handle the deletion of the To do
 */
function Todo ({ title, onDelete }) {

  const [ isModalOpen, setModalIsOpen] = useState(false)

  function deleteHandler () {
    setModalIsOpen(true)
  }

  function closeModal () {
    setModalIsOpen(false)
  }

  function confirmTodoDelete () {
    onDelete(title)
    closeModal()
  }

  return (
    <li className='list__item'>

      <h3 className='list__header'>{title}</h3>

      <div className='list__actions'>
        <button onClick={deleteHandler} className='btn'>Delete</button>
      </div>

      {/* Modal */}
      { isModalOpen &&
        <Modal
          todoTitle={title}
          onCancel={closeModal}
          onConfirmDeleteClick={confirmTodoDelete}
        />
      }

      {/* Backdrop */}
      { isModalOpen && <Backdrop onClick={closeModal} /> }

    </li>
  )
}

export default Todo