import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './index.css';
import { useGlobalContext } from './Contex'
const Modal = () => {

  const {isModalOpen,closeModal} = useGlobalContext()
   
  return (
  <div className={`${isModalOpen?"modal-overlay show-modal":"modal-overlay"}`}>

    <div className="modal-container">
        <h2>modal</h2>

     <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes/>
     </button>
    </div>
  </div>
  )
}

export default Modal
