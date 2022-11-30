import React, { useState } from 'react'
import * as api from '../server/utils/Users'
function Contact (props) {
  // fetch all users from the api
  const handleClick = () => {
    // console.log('hello')
    api.getUsers()
  }

  return (
    <div>
      {/* create a button to perform the get request */}
      <button
        className='bg-green-400 py-3 px-8 absolute top-44 rounded-lg cursor-pointer'
        onClick={() => handleClick()}
      >
        {' '}
        Click me
      </button>
    </div>
  )
}

export default Contact
