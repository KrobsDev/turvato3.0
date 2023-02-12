import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthProvider'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

function AdminSidebar () {
  // get the cookies
  const [cookies, , removeCookies] = useCookies(['auth_token'])
  // call the auth context to get the auth tokens
  const { auth, setAuth } = useContext(AuthContext)

  //   navigator
  const navigate = useNavigate()

  // setAuth to the cookie
  useEffect(() => {
    setAuth({ token: cookies['auth_token'] })
  }, [auth.token, cookies, setAuth])

  // logout function
  const logout = () => {
    // remove cookies on logout
    removeCookies('auth_token', { path: '/' })
    navigate('/')
  }

  //   logout function
  return (
    <div className='h-screen md:w-[15%] 2xl:w-[12%] border border-red-900 absolute'>
      <aside className='border border-black w-full p-8 h-full float-left'>
        Admin
        {/* links */}
        <div className='h-full flex flex-col justify-between'>
          <div className='flex flex-col py-14 gap-8 admin_links w-fit'>
            <Link to={'/admin'}>Dashboard</Link>
            <Link to={'/admin/products'}>Edit Products</Link>
            <Link>Users</Link>
          </div>
          {/* logout */}
          <button className='mb-8 w-fit' onClick={() => logout()}>
            Logout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default AdminSidebar
