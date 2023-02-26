import React, { useState, useMemo, useEffect } from 'react'
import AdminRight from '../../../components/AdminRight'
import Pagination from '../../../components/Pagination'
import { MdDelete, MdEdit } from 'react-icons/md'
import Modal from '../../../components/Modal'
import {
  addType,
  deleteType,
  editType,
  getAllTypes,
  getOneType
} from '../../../api/utils/Types'
import { formToJSON } from 'axios'
import Swal from 'sweetalert2'
import { deleteCategory } from '../../../api/utils/Categories'
import Table from '../../../components/Table'

let PageSize = 8

function Types () {
  const [showAddTypeModal, setShowAddTypeModal] = useState(false)
  const [showEditTypeModal, setShowEditTypeModal] = useState(false)
  const [type, setType] = useState('')
  const [types, setTypes] = useState([])
  const [typeID, setTypeID] = useState(0)
  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)

  //fetch data
  useEffect(() => {
    // get all types
    getAllTypes().then(function (response) {
      setTypes(response.data)
    })
  }, [types])

  const handleOpenAddTypeModal = () => {
    // clear the input field
    setType('')

    // open the modal
    setShowAddTypeModal(true)
  }

  // validate add product form
  const validateForm = field => {
    if (field.length !== 0) {
      return true
    }
    return false
  }

  const handleEditTypeModal = type_id => {
    setTypeID(type_id)
    // get the single category item based on the id
    getOneType(type_id).then(response => {
      // set state of category input
      setType(response.data.type_name)
      //   open modal
      setShowEditTypeModal(true)
    })
  }

  const handleDelete = type_id => {
    //show alert dialog
    Swal.fire({
      text: 'Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it.'
    }).then(result => {
      if (result.isConfirmed) {
        deleteType(type_id).then(response => {
          Swal.fire({
            icon: response.data.status === 1 ? 'success' : 'warning',
            text: response.data.message
          })
        })
      } else {
        Swal.close()
      }
    })
  }

  const handleEditTypeSubmit = (e, type_id) => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    // validate the form
    if (validateForm(type)) {
      // run the function to make the request
      editType(type_id, formJSON).then(response => {
        Swal.fire({
          icon: response.data.status === 1 ? 'success' : 'warning',
          text: response.data.message
        }).then(() => {
          // clear form data
          setShowEditTypeModal(false)
          //   resetStates()
        })
      })
    } else {
      Swal.fire({ title: 'Failed to add category', icon: 'warning' })
    }
  }

  const handleAddTypeSubmit = e => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    console.log(formJSON)

    // add product function
    if (validateForm(type)) {
      addType(formJSON)
        .then(response => {
          // sweet alert
          Swal.fire({
            icon: response.data.status === 1 ? 'success' : 'warning',
            text: response.data.message
          }).then(() => {
            // clear form data
            setShowAddTypeModal(false)
            // resetStates()
          })
        })
        .catch(error => {
          console.log('error')
        })
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Fields should not be left empty'
      }).then(() => {
        // clear form data
      })
    }
  }

  // table pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    // sort the table data
    const sortedData = Array.isArray(types)
      ? types.sort((a, b) => {
          if (a.type_id < b.type_id) {
            return -1
          }
          if (a.type_id > b.type_id) {
            return 1
          }
          return 0
        })
      : []

    return sortedData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, types])

  return (
    <div>
      <AdminRight>
        <p>Manage Types</p>
        {/* menu to choose which product operation to perform */}
        <div className='flex gap-4 mt-8'>
          <button
            onClick={() => handleOpenAddTypeModal()}
            className='border border-black flex items-center justify-center p-4'
          >
            Add Type
          </button>
        </div>

        {/* table to show and manage the products */}
        <Table theads={['Type Name']}>
          {currentTableData.map(type => {
            return (
              <tr key={type.type_id}>
                <td>{type.type_id}</td>
                <td>{type.type_name}</td>

                <td className='flex gap-4'>
                  <MdEdit
                    className='cursor-pointer'
                    onClick={() => handleEditTypeModal(type.type_id)}
                  />

                  <MdDelete
                    className='cursor-pointer'
                    onClick={() => handleDelete(type.type_id)}
                  />
                </td>
              </tr>
            )
          })}
        </Table>

        {/* pagination buttons */}
        {Array.isArray(types) ? (
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={types.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        ) : null}

        {/* add category modal */}
        {showAddTypeModal && (
          <Modal setShow={setShowAddTypeModal} title={'Add Type'}>
            <form onSubmit={handleAddTypeSubmit}>
              <input
                type='text'
                name='type_name'
                className='border border-black p-2 mb-4'
                placeholder='Type name'
                value={type}
                onChange={e => setType(e.target.value)}
              />

              <input className='p-4 bg-black text-white' type='submit' />
            </form>
          </Modal>
        )}

        {/* edit category modal */}
        {showEditTypeModal && (
          <Modal setShow={setShowEditTypeModal} title={'Edit Type'}>
            <form onSubmit={e => handleEditTypeSubmit(e, typeID)}>
              <input
                type='text'
                name='type_name'
                className='border border-black p-2 mb-4'
                placeholder='Type name'
                value={type}
                onChange={e => setType(e.target.value)}
              />

              <input className='p-4 bg-black text-white' type='submit' />
            </form>
          </Modal>
        )}
      </AdminRight>
    </div>
  )
}

export default Types
