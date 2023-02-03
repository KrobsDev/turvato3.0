import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { useCookies } from 'react-cookie'

function Navbar () {
  // get the cookie from the browser and store it in the auth context
  const [cookies, setCookies, removeCookies] = useCookies(['auth_token'])
  // call the auth context to get the auth tokens
  const { setAuth } = useContext(AuthContext)
  const { auth } = useContext(AuthContext)

  // setAuth to the cookie
  useEffect(() => {
    setAuth({ token: cookies['auth_token'] })
    return () => {
      // cleanup function
    }
  }, [cookies, setAuth])

  // console.log(auth.token)

  // logout function
  const logout = () => {
    // console.log('logged out')
    removeCookies('auth_token', { path: '/' })
  }

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
        {auth.token ? (
          <button
            className='bg-orange-bg rounded-md text-white px-8 py-2 '
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : (
          <Link to={`/signin`}>
            <button className='bg-orange-bg rounded-md text-white px-8 py-2 '>
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
