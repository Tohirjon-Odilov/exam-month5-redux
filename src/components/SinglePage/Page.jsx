import React from 'react'
import { Outlet } from "react-router-dom"

function Page() {
  return (
    <>
      <h4>salom</h4>
      <Outlet />
    </>
  )
}

export default Page