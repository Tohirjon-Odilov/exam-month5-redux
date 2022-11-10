import React, { useState } from 'react'
import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import './Modal.scss'

function Modal(isOn) {
  const { allDatas } = useSelector((state) => state.generalData)
  // const [query, setQuery] = useState("")
  // const keys = ["title"]

  // const search = (data) => {
  //   return data.filter((item => (
  //     keys.some((key) =>
  //       item[key].toLowerCase().includes(query)
  //     )
  //   )))
  // }
  // console.log(search)

  if (isOn.isOn) {
    return createPortal(
      <div className="modal-wrapper">
        <div className="modal">
          <h3 className="modal__title">Natijalar</h3>
          <div className="modal__body">
            <div className="time__wrapper">
              <h4>Post title</h4>
              <span>September 24.2020</span>
            </div>
            <p>Post description Post description Post descri...</p>
          </div>
        </div>
      </div>,
      document.body
    )
  }
  return null
}

export default Modal