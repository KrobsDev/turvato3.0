import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

function AdminRight ({ children }) {
  // hamburger menu state
  return (
    <div className='admin_right relative py-8 overflow-hidden'>
      {/* header */}
      <div className='header px-[4%] fixed py-4 top-0 right-0 mx-auto flex items-center justify-between'>
        {/* burger */}
        <div className='flex items-center gap-8'>
          <BiMenu size={30} className='text-orange-bg cursor-pointer' />

          <div className=''>
            <p className='font-light text-black'>Dashboard</p>
            <p className='font-light text-xs'>3rd March 2023</p>
          </div>
        </div>

        {/* profile */}
        <div className='flex items-center gap-2'>
          <div className='w-[45px] h-[45px] border border-black rounded-full flex items-center justify-center'></div>
          <div className=''>
            <div className='flex items-center gap-4'>
              <p className='font-light'>Akwasi Asante-Krobea</p>
              <RiArrowDropDownLine />
            </div>
            <p className='text-xs font-light'>Admin</p>
          </div>
        </div>
      </div>
      <div className='px-[4%] pt-14'>{children}</div>
    </div>
  )
}

export default AdminRight
