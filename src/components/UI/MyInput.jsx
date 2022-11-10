import React, { useState } from 'react'
import search from './../../assets/img/search.svg'


function MyInput({ ...props }) {
  const { className, isOn } = props
  const [inputValue, setInputValue] = useState()

  const handleClick = ((value) => {
    setInputValue(value)
    inputValue.length + 1 && isOn(value)
  })

  console.log('first')

  return (
    <>
      <form className={className}>
        <input type="search" onChange={(e) => handleClick(e.target.value)} required placeholder="Search" />
        <button type="submit"><img src={search} alt="search" /></button>
      </form>
    </>

  )
}

export default MyInput