import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div className=' w-full h-24 absolute z-[99999]'>
      <div className=' w-3/4 h-full mx-auto flex items-center justify-between relative'>
        <div className='logo text-white text-xl font-bold'>Turvato</div>
        {/* nav links */}
        <ul className='flex gap-12 text-white text-sm font-light'>
          <li className='links'>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact Us</Link>
          </li>
        </ul>
        <Link to={`/signin`}>
          <button className='border border-white text-white px-8 py-2 rounded-sm'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
