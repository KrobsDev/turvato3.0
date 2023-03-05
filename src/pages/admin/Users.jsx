import React, { useEffect, useMemo, useState } from 'react'
import AdminRight from '../../components/AdminRight'
import { getUsers } from '../../api/utils/Users'
import Table from '../../components/Table'
import Pagination from '../../components/Pagination'

let PageSize = 12

function Users () {
  const [users, setUsers] = useState([])
  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)
  // get users
  useEffect(() => {
    // get users data
    getUsers().then(response => {
      setUsers(response.data)
      // console.log(response.data)
    })
  }, [])

  // table pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    // sort the table data
    const sortedData = Array.isArray(users)
      ? users.sort((a, b) => {
          if (a.user_id < b.user_id) {
            return -1
          }
          if (a.user_id > b.user_id) {
            return 1
          }
          return 0
        })
      : []

    return sortedData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, users])

  return (
    <div>
      <AdminRight>
        <p>Manage Users</p>

        {/* users displayed in table */}
        <Table theads={['Image', 'Name', 'Email', 'Phone Number']}>
          {currentTableData.map(user => {
            return (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.user_image}</td>
                <td>{user.user_fname + user.user_mname + user.user_lname}</td>
                <td>{user.user_email}</td>
                <td>{user.phone_number}</td>
                {/* <td>{user.user_type}</td> */}
                <td className='flex gap-4'>
                  {/* <Link to={`edit/${user.user_id}`}> */}
                  {/* <MdEdit
                    onClick={() => handleOpenEditModal(user.user_id)}
                  /> */}
                  {/* </Link> */}
                  {/* <MdDelete onClick={() => handleDelete(user.user_id)} /> */}
                </td>
              </tr>
            )
          })}
        </Table>

        {/* pagination buttons */}
        {Array.isArray(users) ? (
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={users.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        ) : null}
      </AdminRight>
    </div>
  )
}

export default Users
