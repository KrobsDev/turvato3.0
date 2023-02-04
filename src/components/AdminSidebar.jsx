import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar () {
  return (
    <div className='h-screen md:w-[15%] 2xl:w-[12%] border border-red-900 absolute'>
      <aside className='border border-black w-full p-8 h-full float-left'>
        Admin
        {/* links */}
        <div className='flex flex-col py-14 gap-8 admin_links w-fit'>
          <Link to={'/admin'}>Dashboard</Link>
          <Link to={'/admin/products'}>Products</Link>
          <Link>Users</Link>
        </div>
      </aside>
    </div>
  )
}

export default AdminSidebar
