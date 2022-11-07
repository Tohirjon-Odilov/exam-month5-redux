import React from 'react'
import { Link } from "react-router-dom"

function MyList(props) {
  return (
    <>
      <ul {...props}>
        <li><Link to={'/logout'} >Design Theory</Link></li>
        <li><Link to={'/UX'} >UX</Link></li>
        <li><Link to={'/UI'} >UI</Link></li>
        <li><Link to={'/Typography'} >Typography</Link></li>
      </ul>
    </>
  )
}

export default MyList