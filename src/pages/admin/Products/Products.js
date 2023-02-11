import React, { useState, useEffect, useMemo } from 'react'
import AdminRight from '../../../components/AdminRight'
import { Link } from 'react-router-dom'
import { getProducts } from '../../../api/utils/Products'
import { MdEdit, MdDelete } from 'react-icons/md'
import Pagination from '../../../components/Pagination'

let PageSize = 8

function Products () {
  // products list
  const [products, setProducts] = useState([])

  // pagination page state
  const [currentPage, setCurrentPage] = useState(1)

  //   let shouldShow = useRef(true)
  //   call fetch function in useEffect
  useEffect(() => {
    getProducts().then(function (response) {
      setProducts(response.data)
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
        <div className='flex mt-8'>
          <Link className='border border-black flex items-center justify-center p-4'>
            Add Products
          </Link>
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

        {/*  */}
      </AdminRight>
    </div>
  )
}

export default Products
