import React from 'react'

var replace = require('string-replace-to-array')

function SectionContent ({ preTitle, header, content, colored }) {
  return (
    <div>
      <div className='pre_title'>{preTitle}</div>
      <p className='sectionTitle text-dark-blue'>
        {header.includes(colored)
          ? replace(
              header,
              colored,
              <span className='text-orange-bg'>{colored}</span>
            )
          : ''}
      </p>
      <p className='font-light leading-7 opacity-60'>{content}</p>
    </div>
  )
}

export default SectionContent
