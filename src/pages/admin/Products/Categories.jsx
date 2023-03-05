import React, { useState, useEffect, useMemo } from 'react'
import AdminRight from '../../../components/AdminRight'
import {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getOneCategory
} from '../../../api/utils/Categories'
import { formToJSON } from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import Pagination from '../../../components/Pagination'
import Modal from '../../../components/Modal'
import Table from '../../../components/Table'

let PageSize = 8

function Categories () {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [showAddCatModal, setShowAddCatModal] = useState(false)
  const [showEditCatModal, setShowEditCatModal] = useState(false)
  const [catID, setCatID] = useState(0)

  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)

  //   load data
  useEffect(() => {
    // get all categories (call to endpoint)
    getAllCategories().then(response => {
      setCategories(response.data)
    })

    // console.log(catID)
  }, [catID, categories])

  // add category function
  const handleAddCategory = e => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    // validate the form
    if (category.length != 0) {
      // run the function to make the request
      addCategory(formJSON).then(response => {
        // console.log(response.data)
        Swal.fire({
          icon: response.data.status === 1 ? 'success' : 'warning',
          text: response.data.message
        }).then(() => {
          // clear form data
          setShowAddCatModal(false)
        })
      })
    } else {
      Swal.fire({ title: 'Failed to add category', icon: 'warning' })
    }
  }

  // open add modal function
  const handleOpenAddCatModal = () => {
    // clear the input field
    setCategory('')

    // open the modal
    setShowAddCatModal(true)
  }

  // table pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    // sort the table data
    const sortedData = Array.isArray(categories)
      ? categories.sort((a, b) => {
          if (a.cat_id < b.cat_id) {
            return -1
          }
          if (a.cat_id > b.cat_id) {
            return 1
          }
          return 0
        })
      : []

    return sortedData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, categories])

  const handleDelete = cat_id => {
    //show alert dialog
    Swal.fire({
      text: 'Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it.'
    }).then(result => {
      if (result.isConfirmed) {
        deleteCategory(cat_id).then(response => {
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

  //   edit category modal function
  const handleEditCategoryModal = cat_id => {
    setCatID(cat_id)
    // get the single category item based on the id
    getOneCategory(cat_id).then(response => {
      // set state of category input
      setCategory(response.data.cat_name)
      //   open modal
      setShowEditCatModal(true)
    })
    // console.log(catID)
  }

  //   edit category modal submit function
  const handleEditCategorySubmit = (e, cat_id) => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    // console.log(cat_id)
    // console.log(formJSON)
    // validate the form
    if (category.length != 0) {
      // run the function to make the request
      editCategory(cat_id, formJSON).then(response => {
        Swal.fire({
          icon: response.data.status === 1 ? 'success' : 'warning',
          text: response.data.message
        }).then(() => {
          // clear form data
          setShowEditCatModal(false)
          //   resetStates()
        })
      })
    } else {
      Swal.fire({ title: 'Failed to add category', icon: 'warning' })
    }
  }

  return (
    <div>
      {/* content */}
      <AdminRight>
        <p>Manage Categories</p>

        {/* menu to choose which product operation to perform */}
        <div className='flex gap-4 mt-8'>
          <button
            onClick={() => handleOpenAddCatModal()}
            className='border border-black flex items-center justify-center p-4'
          >
            Add Category
          </button>
          {/* <button className='border border-black flex items-center justify-center p-4'>
            Add Type
          </button> */}
        </div>

        {/* table to show and manage the products */}
        <Table theads={['Category Name']}>
          {currentTableData.map(cat => {
            return (
              <tr key={cat.cat_id}>
                <td>{cat.cat_id}</td>
                <td>{cat.cat_name}</td>

                <td className='flex gap-4'>
                  <MdEdit
                    className='cursor-pointer'
                    onClick={() => handleEditCategoryModal(cat.cat_id)}
                  />

                  <MdDelete
                    className='cursor-pointer'
                    onClick={() => handleDelete(cat.cat_id)}
                  />
                </td>
              </tr>
            )
          })}
        </Table>

        {/* pagination buttons */}
        {Array.isArray(categories) ? (
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={categories.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        ) : null}

        {/* add category modal */}
        {showAddCatModal && (
          <Modal setShow={setShowAddCatModal} title={'Add Category'}>
            <form onSubmit={handleAddCategory}>
              <input
                type='text'
                name='cat_name'
                className='border border-black p-2 mb-4'
                placeholder='Product Category'
                value={category}
                onChange={e => setCategory(e.target.value)}
              />

              <input className='p-4 bg-black text-white' type='submit' />
            </form>
          </Modal>
        )}

        {/* edit category modal */}
        {showEditCatModal && (
          <Modal setShow={setShowEditCatModal} title={'Edit Category'}>
            <form onSubmit={e => handleEditCategorySubmit(e, catID)}>
              <input
                type='text'
                name='cat_name'
                className='border border-black p-2 mb-4'
                placeholder='Product Category'
                value={category}
                onChange={e => setCategory(e.target.value)}
              />

              <input className='p-4 bg-black text-white' type='submit' />
            </form>
          </Modal>
        )}
      </AdminRight>
    </div>
  )
}

export default Categories
