import React from 'react'
import { createPortal } from "react-dom"
import './Modal.scss'

function Modal(isOn) {
  if (isOn.isOn) {
    return createPortal(
      <div className="modal-wrapper">
        <div className="modal">
          <h3 className="modal__title">Natijalar</h3>
        </div>
      </div>,
      document.body
    )
  }
  return null
}

export default Modal