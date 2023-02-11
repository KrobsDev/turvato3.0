import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Product (props) {
  return (
    <div className='w-full h-[350px] rounded-md bg-white shadow-xl'>
      {/* hidden field for the product id */}
      <input type='hidden' value={props.id} />
      {/* image part */}
      <div className='w-full h-2/3 rounded-tl-md rounded-tr-md relative'>
        <img
          src={props.image ? props.image : ''}
          alt=''
          className='w-full h-full object-cover rounded-tl-md rounded-tr-md'
        />

        {/* pricing tag */}
        <div className='absolute bg-white shadow-sm flex items-center justify-center px-4 py-1 top-5 right-5 rounded-full'>
          <span className='text-xs'>
            {props.pricing === 0 || !props.pricing
              ? 'Free'
              : '$' + props.pricing}
          </span>
        </div>
      </div>

      {/* content */}
      <div className='content px-4 py-2 flex flex-col gap-2'>
        {/* tag */}
        <p className='uppercase opacity-40 font-light text-xs'>{props.cat}</p>

        {/* text */}
        <Link to={'/'} className='font-light'>
          {props.title}
        </Link>

        {/* downloads */}
        <div className='flex items-center gap-2'>
          {/* download icon */}
          <AiOutlineDownload />
          <span className='font-light text-sm text-orange-bg'>
            +{props.downloads}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product
