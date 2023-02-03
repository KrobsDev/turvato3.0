import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

function Index () {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      Welcome to the admin page {auth.user_id + ' and ' + auth.user_role}
    </div>
  )
}

export default Index
