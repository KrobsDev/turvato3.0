import React from 'react'

function AdminRight ({ children }) {
  return (
    <div className='admin_right border border-black float-right px-[2%] py-8 overflow-y-scroll'>
      {children}
    </div>
  )
}

export default AdminRight
