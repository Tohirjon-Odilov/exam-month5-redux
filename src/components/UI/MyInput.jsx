import React from 'react'
import search from './../../assets/img/search.svg'


function MyInput({ ...props }) {
  return (
    <form {...props} >
      <input type="search" placeholder="Search" />
      <button type="submit"><img src={search} alt="search" /></button>
    </form>
  )
}

export default MyInput