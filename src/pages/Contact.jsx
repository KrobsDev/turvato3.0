import React, { useState } from 'react'

function Contact (props) {
  const [isActive, setisActive] = useState()

  const handleActive = index => {
    setisActive(index)
  }

  // button list
  const buttons = ['Hello', 'Welcome', 'Stop']

  return (
    <div>
      {/* series of buttons */}
      {buttons.map((element, index) => (
        <button
          key={index}
          className={`one bg-gray-400 px-8 py-2 m-8 ${
            index === isActive ? 'bg-black text-white' : ''
          }`}
          onClick={() => handleActive(index)}
        >
          {element}
        </button>
      ))}
    </div>
  )
}

export default Contact
