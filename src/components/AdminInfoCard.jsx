import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineCog } from 'react-icons/hi'
import bg_pattern from '../assets/images/Double Bubble Outline Pattern.png'

function AdminInfoCard ({ icon, title, number, pathToSettings, status }) {
  return (
    <div className='adminCard w-full h-full relative flex items-center justify-center'>
      <div className='absolute left-0 top-0 w-full h-full '>
        <img src={bg_pattern} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='cardGradient w-full h-full relative px-[8%] py-[5%] flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
              status === 1
                ? `bg-light-green`
                : status === 2
                ? `bg-light-yellow`
                : `bg-grey-bg`
            }`}
          >
            {icon}
          </div>
          <Link to={pathToSettings}>
            <HiOutlineCog size={20} />
          </Link>
        </div>
        <div className=''>
          <div className='font-light text-sm'>{title}</div>
          <div className='text-4xl font-medium'>{number}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminInfoCard
