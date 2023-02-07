import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import AdminRight from '../../components/AdminRight'

function Index () {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {/* content */}
      <AdminRight>
        <p>Dashboard</p>
      </AdminRight>
    </div>
  )
}

export default Index
