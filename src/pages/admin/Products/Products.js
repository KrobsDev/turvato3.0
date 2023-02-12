import React, { useState, useEffect, useMemo } from 'react'
import AdminRight from '../../../components/AdminRight'
import { Link } from 'react-router-dom'
import {
  getProducts,
  getAllCategories,
  getAllTypes,
  addProduct
} from '../../../api/utils/Products'
import { MdEdit, MdDelete, MdClose } from 'react-icons/md'
import Pagination from '../../../components/Pagination'
import Modal from '../../../components/Modal'
import { formToJSON } from 'axios'
import Swal from 'sweetalert2'

let PageSize = 8

function Products () {
  // products list
  const [products, setProducts] = useState([])

  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)

  // state to check modal state
  const [showAddProductModal, setShowAddProductModal] = useState(false)

  //   states for all input fields
  const [pname, setPname] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [keywords, setKeywords] = useState([])
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [type, setType] = useState('')
  const [types, setTypes] = useState([])

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
  }, [])

  // sort the table data
  const sortedData = products.sort((a, b) => {
    if (a.product_id < b.product_id) {
      return -1
    }
    if (a.product_id > b.product_id) {
      return 1
    }
    return 0
  })

  const handleSubmit = e => {
    e.preventDefault()

    // get form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    // console.log(formJSON)

    // add product function
    addProduct(formJSON)
      .then(response => {
        // sweet alert
        Swal.fire({
          icon: response.data.status === 1 ? 'success' : 'warning',
          text: response.data.message
        }).then(() => {
          // clear form data
        })
      })
      .catch(error => {
        console.log('error')
      })
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return sortedData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, sortedData])

  return (
    <div>
      {/* content */}
      <AdminRight>
        <p>Products</p>

        {/* menu to choose which product operation to perform */}
        <div className='flex gap-4 mt-8'>
          <button
            onClick={() => setShowAddProductModal(true)}
            className='border border-black flex items-center justify-center p-4'
          >
            Add Products
          </button>
          <button className='border border-black flex items-center justify-center p-4'>
            Add Category
          </button>
          <button className='border border-black flex items-center justify-center p-4'>
            Add Type
          </button>
        </div>

        {/* table to show and manage the products */}
        <div className='prod_table w-full mt-8 '>
          <table className='w-full' id='prod_table_content'>
            <thead>
              <tr className='border border-black py-4 px-8 bg-dark-blue text-white text-left'>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
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
                      <Link to={`edit/${product.product_id}`}>
                        <MdEdit />
                      </Link>
                      <Link>
                        <MdDelete />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* pagination buttons */}
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />

        {/* modal */}
        {showAddProductModal ? (
          <Modal title={'Add Product'} setShow={setShowAddProductModal}>
            {/* add product form */}
            <form method='post' onSubmit={handleSubmit}>
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

                {/* price */}
                <input
                  type='text'
                  name='prod_price'
                  className='border border-black p-2'
                  placeholder='Product Price'
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />

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
        ) : null}
      </AdminRight>
    </div>
  )
}

export default Products
