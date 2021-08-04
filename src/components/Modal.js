/**
 *
 * @param todoTitle - Props.String
 * @param onCancel - Props.function
 * @param onConfirmDeleteClick - Props.function
 * @returns {Modal component}
 */function Modal ({ todoTitle, onCancel, onConfirmDeleteClick }) {

  return (
      <div className='modal'>

        <p>Are you sure you want to delete: <strong>"{todoTitle}"</strong> ?</p>

        <button className='btn btn--alt' onClick={onCancel}>Cancel</button>

        <button className='btn' onClick={() => onConfirmDeleteClick(todoTitle)}>Confirm</button>

      </div>
    )
  }

export default Modal