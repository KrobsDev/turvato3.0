import React from 'react'

function FooterLink ({ heading, links }) {
  return (
    <div>
      <p className='text-dark-blue text-xl mb-3'>{heading}</p>
      {/* links */}
      {links.map((element, index) => (
        <p key={index} className='py-2 text-sm font-light'>
          {element}
        </p>
      ))}
    </div>
  )
}

export default FooterLink
