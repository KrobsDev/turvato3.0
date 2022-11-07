import React from 'react'

function Navbar () {
  return (
    <div className=' w-full h-24 absolute z-50'>
      <div className=' w-3/4 h-full mx-auto flex items-center justify-between relative'>
        <div className='logo text-white text-xl font-bold'>Turvato</div>
        {/* nav links */}
        <ul className='flex gap-12 text-white'>
          <li className='links'>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <button className='border border-white text-white px-8 py-3 rounded-md'>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
