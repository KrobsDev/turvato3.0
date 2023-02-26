import React, { useState } from 'react'
import AdminRight from '../../../components/AdminRight'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getOneProduct, updateProduct } from '../../../api/utils/Products'
import { getAllCategories } from '../../../api/utils/Categories'
import { getAllTypes } from '../../../api/utils/Types'
import { formToJSON } from 'axios'
import Swal from 'sweetalert2'

function EditProduct () {
  //   const [product, setProduct] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  //   states for all input fields
  const [pname, setPname] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [keywords, setKeywords] = useState([])
  const [categories, setCategories] = useState([])
  const [types, setTypes] = useState([])

  const [selectedCat, setSelectedCat] = useState(0)
  const [selectedType, setSelectedType] = useState(0)

  useEffect(() => {
    // get a product and set the values to the form inputs
    getOneProduct(id).then(response => {
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
  }, [id])
  // console.log(selectedType)

  // const handleChange = e => {
  //   // set selected type
  //   setSelectedType(e.target.value)
  // }
  // console.log(selectedType)

  // run update function
  function handleSubmit (e) {
    // prevent form from loading the page
    e.preventDefault()

    // read the form data
    const form = e.target

    const formData = new FormData(form)

    const formJSON = formToJSON(formData)

    updateProduct(id, formJSON).then(response => {
      //   sweet alert
      Swal.fire({
        title: 'Product Info',
        text: response.data.message,
        icon: response.data.status === 1 ? 'success' : 'warning'
      }).then(() => {
        // return to product screen
        navigate(-1)
      })
    })
  }

  return (
    <div>
      <AdminRight>
        {/* <Link></Link> */}
        <button onClick={() => navigate(-1)} className='mb-3'>
          Back
        </button>
        {/* <div>EditProduct {id}</div> */}

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
      </AdminRight>
    </div>
  )
}

export default EditProduct
