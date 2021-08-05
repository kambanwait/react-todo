/**
 * Modal pop up to confirm if user wants to delete the Todo
 * @param todoTitle - Props.String
 * @param onCancel - Props.function
 * @param onConfirmDeleteClick - Props.function
 * @returns {Modal component}
*/

// destructure props passed in to save writing `props.xyz` multiple times
function Modal ({ todoTitle, onCancel, onConfirmDeleteClick }) {
  return (
      <div className='modal'>

        <p>Are you sure you want to delete: <strong>"{todoTitle}"</strong> ?</p>

        <button className='btn btn--alt' onClick={onCancel}>Cancel</button>

        <button className='btn' onClick={() => onConfirmDeleteClick(todoTitle)}>Confirm</button>

      </div>
    )
  }

export default Modal