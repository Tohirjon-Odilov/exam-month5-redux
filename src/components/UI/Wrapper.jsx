import React from 'react'

function Wrapper({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default Wrapper