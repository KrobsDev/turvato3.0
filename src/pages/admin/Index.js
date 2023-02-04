import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

function Index () {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {/* content */}
      <div className='admin_right border border-black float-right'>
        {' '}
        hekko
      </div>
    </div>
  )
}

export default Index
