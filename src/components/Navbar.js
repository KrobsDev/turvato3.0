import React from 'react'

function Navbar () {
  return (
    <div className=' w-full h-24 absolute'>
      <div className=' w-3/4 h-full mx-auto flex items-center justify-between relative'>
        <div className='logo text-black text-xl'>Turvato</div>
        {/* nav links */}
        <ul className='flex gap-12'>
          <li className='links'>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <button className='border border-red-900 px-8 py-3 rounded-md'>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
