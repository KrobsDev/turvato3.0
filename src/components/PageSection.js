import React from 'react'

function PageSection ({ children }) {
  return (
    <div className='h-screen relative overflow-hidden'>
      <div className='w-4/5 h-full mx-auto flex items-center justify-between'>
        {children}
      </div>
    </div>
  )
}

export default PageSection
