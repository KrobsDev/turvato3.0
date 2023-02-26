import React, { useState, useEffect, useMemo } from 'react'
import AdminRight from '../../../components/AdminRight'
import { Link, useSearchParams } from 'react-router-dom'
import {
  getProducts,
  addProduct,
  deleteProduct,
  addCategory,
  getOneProduct,
  updateProduct
} from '../../../api/utils/Products'
import { getAllCategories } from '../../../api/utils/Categories'
import { getAllTypes } from '../../../api/utils/Types'
import { MdEdit, MdDelete, MdClose } from 'react-icons/md'
import Pagination from '../../../components/Pagination'
import Modal from '../../../components/Modal'
import { formToJSON } from 'axios'
import Swal from 'sweetalert2'
import Table from '../../../components/Table'

let PageSize = 8

function Products () {
  // products list
  const [products, setProducts] = useState([])

  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)

  // state to check modal state
  const [showAddProductModal, setShowAddProductModal] = useState(false)
  const [showEditProductModal, setShowEditProductModal] = useState(false)

  //   states for all input fields
  const [pname, setPname] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [keywords, setKeywords] = useState([])
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [type, setType] = useState('')
  const [types, setTypes] = useState([])
  // product id for editing
  const [prodID, setProdID] = useState(0)

  const [selectedCat, setSelectedCat] = useState(0)
  const [selectedType, setSelectedType] = useState(0)

  //   let shouldShow = useRef(true)
  //   call fetch function in useEffect
  useEffect(() => {
    getProducts().then(function (response) {
      setProducts(response.data)
    })

    // get the list of all categories
    getAllCategories().then(response => {
      setCategories(response.data)
    })

    // get the list of all types
    getAllTypes().then(response => {
      setTypes(response.data)
    })
    // console.log(products)
  }, [products])

  // validate add product form
  const validateAddProductForm = () => {
    if (
      (pname || description || category || price || type || keywords).length !==
      0
    ) {
      return true
    }
    return false
  }

  // function to handle request to add product
  const handleAddProduct = e => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    console.log(formJSON)

    // add product function
    if (validateAddProductForm()) {
      addProduct(formJSON)
        .then(response => {
          // sweet alert
          Swal.fire({
            icon: response.data.status === 1 ? 'success' : 'warning',
            text: response.data.message
          }).then(() => {
            // clear form data
            setShowAddProductModal(false)
            resetStates()
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

  // clear all states
  const resetStates = () => {
    // clear all states
    setPname('')
    setDescription('')
    setPrice('')
    setKeywords('')
    setCategory('')
    setType('')
  }

  const handleDelete = pid => {
    //
    Swal.fire({
      text: 'Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it.'
    }).then(result => {
      if (result.isConfirmed) {
        deleteProduct(pid).then(response => {
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

  // table pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    // sort the table data
    const sortedData = Array.isArray(products)
      ? products.sort((a, b) => {
          if (a.product_id < b.product_id) {
            return -1
          }
          if (a.product_id > b.product_id) {
            return 1
          }
          return 0
        })
      : []

    return sortedData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, products])

  const handleOpenAddModal = prod_id => {
    // clear the inputs
    resetStates()
    setShowAddProductModal(true)
  }

  const handleOpenEditModal = prod_id => {
    // set the product id
    setProdID(prod_id)
    // open the modal
    setShowEditProductModal(true)
    // get the details of the product and populate the form
    getOneProduct(prod_id).then(response => {
      setPname(response.data.product_name)
      setDescription(response.data.product_desc)
      setSelectedCat(response.data.product_cat)
      setSelectedType(response.data.product_type)
      setPrice(response.data.product_price)
      setKeywords(response.data.product_keywords)
    })
    // get the list of all categories
    getAllCategories().then(response => {
      setCategories(response.data)
    })
    // get the list of all types
    getAllTypes().then(response => {
      setTypes(response.data)
    })
  }

  function handleEditProduct (e, prod_id) {
    // prevent form from loading the page
    e.preventDefault()

    // read the form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    updateProduct(prod_id, formJSON).then(response => {
      //   sweet alert
      Swal.fire({
        title: 'Product Info',
        text: response.data.message,
        icon: response.data.status === 1 ? 'success' : 'warning'
      }).then(() => {
        if (response.data.status === 1) {
          setShowEditProductModal(false)
        }
      })
    })
  }

  return (
    <div>
      {/* content */}
      <AdminRight>
        <p>Products</p>

        {/* menu to choose which product operation to perform */}
        <div className='flex gap-4 mt-8'>
          <button
            onClick={() => handleOpenAddModal()}
            className='border border-black flex items-center justify-center p-4'
          >
            Add Product
          </button>
        </div>

        {/* table to show and manage the products */}
        <Table theads={['Image', 'Name', 'Category', 'Price', 'Type']}>
          {currentTableData.map(product => {
            return (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.product_image}</td>
                <td>{product.product_name}</td>
                <td>{product.product_cat}</td>
                <td>{product.product_price}</td>
                <td>{product.product_type}</td>
                <td className='flex gap-4'>
                  {/* <Link to={`edit/${product.product_id}`}> */}
                  <MdEdit
                    onClick={() => handleOpenEditModal(product.product_id)}
                  />
                  {/* </Link> */}
                  <MdDelete onClick={() => handleDelete(product.product_id)} />
                </td>
              </tr>
            )
          })}
        </Table>

        {/* pagination buttons */}
        {Array.isArray(products) ? (
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={products.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        ) : null}

        {/* add product modal */}
        {showAddProductModal && (
          <Modal title={'Add Product'} setShow={setShowAddProductModal}>
            {/* add product form */}
            <form onSubmit={handleAddProduct}>
              {/* product name */}
              <div className='flex flex-col gap-4 w-96'>
                <div className='formfield'>
                  <input
                    type='text'
                    className='border border-black p-2'
                    placeholder='Product Name'
                    name='prod_name'
                    value={pname}
                    onChange={e => setPname(e.target.value)}
                  />
                </div>

                {/* description */}
                <textarea
                  name='prod_desc'
                  id=''
                  cols='30'
                  rows='5'
                  className='resize-none px-2 border border-black'
                  placeholder='Description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>

                {/* category */}
                <select
                  name='prod_cat'
                  id=''
                  className='p-3'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option value='' disabled>
                    Choose category
                  </option>

                  {/* available options */}
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.cat_id}>
                        {category.cat_name}
                      </option>
                    )
                  })}
                </select>

                {/* type */}
                <select
                  name='prod_type'
                  id=''
                  className='p-3'
                  value={type}
                  onChange={e => setType(e.target.value)}
                >
                  <option value='' disabled>
                    Choose type
                  </option>
                  {types.map((p_type, index) => {
                    return (
                      <option key={index} value={p_type.type_id}>
                        {p_type.type_name}
                      </option>
                    )
                  })}
                </select>

                {/* price  --- conditionally render the price input field */}
                {type === '1' ? (
                  <input
                    type='text'
                    name='prod_price'
                    className='border border-black p-2'
                    placeholder='Product Price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                ) : null}

                {/* keywords */}
                <textarea
                  id=''
                  name='prod_keywords'
                  cols='30'
                  rows='5'
                  className='resize-none px-2 border border-black'
                  placeholder='Keywords'
                  value={keywords}
                  onChange={e => {
                    setKeywords(e.target.value)
                  }}
                ></textarea>

                <input className='p-4 bg-black text-white' type='submit' />
              </div>
            </form>
          </Modal>
        )}

        {/* edit product modal */}
        {showEditProductModal && (
          <Modal title={'Edit Product'} setShow={setShowEditProductModal}>
            {/* add product form */}
            <form method='post' onSubmit={e => handleEditProduct(e, prodID)}>
              {/* product name */}
              <div className='flex flex-col gap-4 w-96'>
                <div className='formfield'>
                  <input
                    type='text'
                    className='border border-black p-2'
                    placeholder='Product Name'
                    name='prod_name'
                    value={pname}
                    onChange={e => setPname(e.target.value)}
                  />
                </div>

                {/* description */}
                <textarea
                  name='prod_desc'
                  id=''
                  cols='30'
                  rows='10'
                  className='resize-none px-2 border border-black'
                  placeholder='Description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>

                {/* category */}
                <select
                  name='prod_cat'
                  id=''
                  className='p-3'
                  value={selectedCat}
                  onChange={e => setSelectedCat(e.target.value)}
                >
                  <option value='' disabled>
                    Choose category
                  </option>

                  {/* available options */}
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.cat_id}>
                        {category.cat_name}
                      </option>
                    )
                  })}
                </select>

                {/* type */}
                <select
                  name='prod_type'
                  id=''
                  className='p-3'
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                >
                  <option value='' disabled>
                    Choose type
                  </option>
                  {types.map((p_type, index) => {
                    return (
                      <option key={index} value={p_type.type_id}>
                        {p_type.type_name}
                      </option>
                    )
                  })}
                </select>

                {/* price */}
                {selectedType == 1 && (
                  <input
                    type='text'
                    name='prod_price'
                    className='border border-black p-2'
                    placeholder='Product Price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                )}

                {/* keywords */}
                <textarea
                  id=''
                  name='prod_keywords'
                  cols='30'
                  rows='5'
                  className='resize-none px-2 border border-black'
                  placeholder='Keywords'
                  value={keywords}
                  onChange={e => {
                    setKeywords(e.target.value)
                  }}
                ></textarea>

                <input className='p-4 bg-black text-white' type='submit' />
              </div>
            </form>
          </Modal>
        )}
      </AdminRight>
    </div>
  )
}

export default Products
