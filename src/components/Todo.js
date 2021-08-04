import { useState } from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo (props) {

  const [ isModalOpen, setModalIsOpen] = useState(false)

  function deleteHandler () {
    setModalIsOpen(true)
  }

  function closeModal () {
    setModalIsOpen(false)
  }

  function confirmTodoDelete () {
    props.onDelete(props.title)
    closeModal()
  }

  return (
    <div className='card'>

      <h3>{props.title}</h3>

      <div className='actions'>
        <button onClick={deleteHandler} className='btn'>Delete</button>
      </div>

      {/* Modal */}
      { isModalOpen &&
        <Modal
          todoTitle={props.title}
          onCancel={closeModal}
          onConfirmDeleteClick={confirmTodoDelete}
        />
      }

      {/* Backdrop */}
      { isModalOpen && <Backdrop onClick={closeModal} /> }

    </div>
  )
}

export default Todo