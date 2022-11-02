import React from 'react'

function Plaque ({ icon, text }) {
  return (
    <div>
      <div className='border border-dark-blue my-4 rounded-sm w-32 flex items-center justify-center'>
        <div className='flex gap-2 items-center px-4 py-4'>
          <div className='icon text-orange-bg2'>{icon}</div>
          <p className='text-sm text-dark-blue'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Plaque
