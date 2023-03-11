import React from 'react'

function Table ({ children, theads, id = 'ID', action = true }) {
  return (
    <div>
      <div className='prod_table w-full'>
        <table className='w-full ' id='prod_table_content'>
          <thead>
            <tr className='py-4 px-8 text-left'>
              {id && <th>{id}</th>}
              {theads &&
                theads.map((element, index) => {
                  return <th key={index}>{element}</th>
                })}
              {action && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
