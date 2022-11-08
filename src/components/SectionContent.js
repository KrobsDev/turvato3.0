import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

var replace = require('string-replace-to-array')

function SectionContent ({
  preTitle,
  header,
  content,
  colored,
  cButton,
  twhite = false
}) {
  return (
    <div>
      <div className={`pre_title ${twhite ? 'text-white' : 'text-black'}`}>
        {preTitle}
      </div>
      <p
        className={`sectionTitle w-4/5 ${
          twhite ? 'text-white' : 'text-dark-blue'
        }`}
      >
        {header.includes(colored)
          ? replace(
              header,
              colored,
              <span key={0} className='text-orange-bg'>
                {colored}
              </span>
            )
          : ''}
      </p>
      <p className='font-light leading-7 my-2 opacity-60 w-4/5'>{content}</p>
      {/* display custom button if it exists */}
      {cButton ? (
        <div className='flex items-center gap-2'>
          <div className='icon w-[50px] h-[50px] bg-orange-bg rounded-full flex items-center justify-center'>
            <RiArrowRightLine color='white' size={24} />
          </div>
          <p className=''>{cButton}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SectionContent
