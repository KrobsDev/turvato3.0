import React from 'react'

function Table ({ children, theads }) {
  return (
    <div>
      <div className='prod_table w-full mt-8 '>
        <table className='w-full' id='prod_table_content'>
          <thead>
            <tr className='border border-black py-4 px-8 bg-dark-blue text-white text-left'>
              <th>ID</th>
              {theads &&
                theads.map((element, index) => {
                  return <th>{element}</th>
                })}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
