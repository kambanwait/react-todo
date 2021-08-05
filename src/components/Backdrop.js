/**
 * Backdrop component provides the opaque black background when the modal is presented
 * @param props
 * @returns div with styling for backdrop
 */
function Backdrop (props) {
  return <div className='backdrop' onClick={props.onClick}/>
}

export default Backdrop