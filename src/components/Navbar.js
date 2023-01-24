import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div className=' w-full h-24 absolute z-[99999]'>
      <div className=' w-full h-full px-[10%] text-white mx-auto flex items-center justify-between relative'>
        <div className='logo text-xl font-bold'>Turvato</div>
        {/* nav links */}
        <ul className='flex gap-12  text-sm font-light'>
          <li className='links'>
            <Link to={`/`}>Home</Link>
          </li>
          <li className='links'>
            <Link to={`/`}>Shop</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact Us</Link>
          </li>
          <li className='links'>
            <Link to={`/`}>Pricing</Link>
          </li>
        </ul>
        <Link to={`/signin`}>
          <button className='bg-orange-bg rounded-md text-white px-8 py-2 '>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
