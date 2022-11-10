import React, { useEffect, useRef } from 'react'
import search from './../../assets/img/search.svg'


function MyInput({ ...props }) {
  const { className, isOn } = props
  const value = useRef()
  useEffect(() => {
    // console.log(value.current.value);
  }, [])
  return (
    <>
      <form className={className}>
        <input type="search" ref={value} onClick={() => isOn(prev => !prev)} required placeholder="Search" />
        <button type="submit"><img src={search} alt="search" /></button>
      </form>
    </>

  )
}

export default MyInput