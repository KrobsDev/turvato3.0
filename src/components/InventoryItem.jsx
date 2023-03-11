import React from 'react'

function InventoryItem ({ icon, name, count }) {
  return (
    <div>
      <div className='w-full flex items-center justify-between py-3 text-sm'>
        <div className='left flex items-center gap-2'>
          {/* icon */}
          {icon}
          <p className='font-light'>{name}</p>
        </div>
        <p className='font-medium'>{count}</p>
      </div>
    </div>
  )
}

export default InventoryItem
