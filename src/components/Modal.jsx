import React from 'react'
import { MdClose } from 'react-icons/md'

function Modal ({ children, setShow, title }) {
  // state to check modal state
  //   const [show, setShow] = useState(false)

  return (
    <div className='absolute inset-0 transition-all backdrop-brightness-50 flex items-center overflow-hidden justify-center w-full h-full'>
      <div className='p-8 bg-white '>
        <div className='mb-2 flex items-center justify-between'>
          <p className='text-xl'>{title}</p>
          <MdClose
            className='cursor-pointer'
            onClick={() => {
              setShow(false)
            }}
          />
        </div>
        <hr className='w-full border border-gray-100 mb-6' />
        {children}
      </div>
    </div>
  )
}

export default Modal
