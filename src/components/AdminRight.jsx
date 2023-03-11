import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

function AdminRight ({ children }) {
  return (
    <div className='admin_right relative py-8 overflow-hidden'>
      <div className='px-[4%] pt-14'>{children}</div>
    </div>
  )
}

export default AdminRight
