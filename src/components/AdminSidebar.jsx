import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { MdDashboard, MdOutlineReviews, MdPayment } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { BsBoxSeam, BsClipboardCheck } from 'react-icons/bs'
import { VscRequestChanges } from 'react-icons/vsc'
import { CiLogout } from 'react-icons/ci'
import { BiMenu } from 'react-icons/bi'

function AdminSidebar () {
  // get the cookies
  const [cookies, , removeCookies] = useCookies(['auth_token'])
  // call the auth context to get the auth tokens
  const { auth, setAuth } = useContext(AuthContext)
  // accordion state
  const [isOpen, setIsOpen] = useState(false)
  // nav menu clicked state
  const [isClicked, setIsClicked] = useState(0)
  // hamburger menu state
  const [burgerOpen, setBurgerOpen] = useState(false)

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

  // list of all sidebar links
  const sideLinks = [
    <Link to={'/admin'}>
      <MdDashboard size={20} />
      <span>Dashboard</span>
    </Link>,
    <Link to={'/admin/users'}>
      <FaUsers size={20} />
      <span>Users</span>
    </Link>,
    <div className='acc'>
      <button
        className='accordion p-0 text-left'
        id='accordion'
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBoxSeam size={20} />
        Products
      </button>

      {/* accordion content */}

      <div
        className={`${
          isOpen ? 'h-48' : 'h-0'
        } accordion_content transition-[height] overflow-hidden flex justify-center flex-col gap-8 pl-2  w-full`}
      >
        <Link to={'/admin/products'}>Products</Link>
        <Link to={'/admin/categories'}>Categories</Link>
        <Link to={'/admin/types'}>Types</Link>
      </div>
    </div>,
    <Link to={'/admin/'}>
      <BsClipboardCheck size={20} />
      <span>Orders</span>
    </Link>,
    <Link to={'/admin/'}>
      <MdPayment size={20} />
      <span>Payments</span>
    </Link>,
    <Link to={'/admin/'}>
      <MdOutlineReviews size={25} />
      <span>Reviews</span>
    </Link>,
    <Link to={'/admin/'}>
      <VscRequestChanges size={20} />
      <span>Requests</span>
    </Link>
  ]

  // function to control sidemenu
  const handleSideMenu = () => {
    // setIsOpen(!isOpen)
    console.log('burger' + burgerOpen)
  }

  //   logout function
  return (
    <div className='h-screen w-[15%] 2xl:w-[10%] bg-green-bg text-white float-left'>
      <aside className='w-full p-8 h-full float-left'>
        Turvato
        {/* links */}
        <div className='h-full flex flex-col justify-between'>
          <div className='flex flex-col py-14 gap-12 admin_links w-fit'>
            {sideLinks.map((navItem, index) => {
              return (
                <div
                  key={index}
                  className={isClicked === index ? `opacity-100` : `opacity-70`}
                  onClick={() => setIsClicked(index)}
                >
                  {navItem}
                </div>
              )
            })}
          </div>
          {/* logout */}
          <button className='mb-8 lgout w-fit' onClick={() => logout()}>
            <CiLogout size={20} />
            Logout
          </button>
        </div>
      </aside>
      {/* header */}
      <div className='header text-black px-[4%] fixed py-4 top-0 right-0 mx-auto flex items-center justify-between'>
        {/* burger */}
        <div className='flex items-center gap-8'>
          <BiMenu
            onClick={() => handleSideMenu()}
            size={30}
            className='text-orange-bg cursor-pointer'
          />

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
              {/* <RiArrowDropDownLine /> */}
            </div>
            <p className='text-xs font-light'>Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
