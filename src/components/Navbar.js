import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { useCookies } from 'react-cookie'
import { useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar () {
  // get the cookie from the browser and store it in the auth context
  const [cookies, , removeCookies] = useCookies(['auth_token'])
  // call the auth context to get the auth tokens
  const { auth, setAuth } = useContext(AuthContext)

  const { pathname } = useLocation()

  // array of routes
  const withoutNavRoutes = ['/admin']

  // location

  // setAuth to the cookie
  useEffect(() => {
    setAuth({ token: cookies['auth_token'] })
  }, [auth.token, cookies, setAuth])

  // logout function
  const logout = () => {
    // remove cookies on logout
    removeCookies('auth_token', { path: '/' })
  }

  if (withoutNavRoutes.some(item => pathname.includes(item))) {
    return null
  } else {
    return (
      <div className=' w-full h-24 absolute z-[99999]'>
        <div className=' w-full h-full px-[10%] text-white mx-auto flex items-center justify-between relative'>
          <div className='logo text-xl font-bold'>Turvato</div>
          {/* nav links */}
          <ul className='hidden md:flex gap-12  text-sm font-light'>
            <li className='links'>
              <Link to={`/`}>Home</Link>
            </li>
            <li className='links'>
              <Link to={`/shop`}>Shop</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li className='links'>
              <Link to={`/pricing`}>Pricing</Link>
            </li>
          </ul>
          <div className='hidden md:flex'>
            {auth.token ? (
              <button
                className='border border-white rounded-full text-white px-8 py-2 '
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <Link to={`/signin`}>
                <button className='bg-orange-bg rounded-full text-white px-8 py-2 '>
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* show menu icon */}
          <AiOutlineMenu className='md:hidden' />
        </div>
      </div>
    )
  }
}

export default Navbar
