import React from 'react'

function PageSection ({ children, flex = true, height }) {
  return (
    <div
      className={`${height ? height : 'h-screen '} relative overflow-hidden`}
    >
      <div
        className={`w-3/4 h-full mx-auto flex items-center ${
          flex ? 'justify-between' : 'justify-center'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default PageSection
