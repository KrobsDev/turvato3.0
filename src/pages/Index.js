import React, { useState, useEffect } from 'react'
import leaf from '../assets/images/leaf_big_bg.svg'
import { SearchBox } from '../styled_components/SearchBox'
import arrow from '../assets/images/icons/arrow_forward.svg'
import { BsArrowRight } from 'react-icons/bs'
import Product from '../components/Product'
import Footer from '../components/Footer'
import { getProducts } from '../api/utils/Products'
import { all } from 'axios'

function Index () {
  // state to hold products
  const [products, setProducts] = useState([])

  // get and display all products
  const displayProducts = async () => {
    // destructure data into array from api endpoint
    const { data } = await getProducts()
    // store data in variable
    const allProducts = data
    // setstate
    setProducts(allProducts)
    //
    console.log(allProducts)
  }

  useEffect(() => {
    displayProducts()
  }, [])

  return (
    <div className='w-full h-full'>
      {/* hero */}
      <div className='w-full h-[80vh] border border-black relative'>
        {/* absolute positioned svg as background */}

        {/* absolute positioned background with leaf */}
        <div className='absolute w-full h-full bg_gradient'>
          <img
            src={leaf}
            className='w-full h-full object-cover opacity-5'
            alt=''
          />
        </div>

        {/* absolute positioned background with content */}
        <div className='absolute w-full h-full flex flex-col gap-8 items-center justify-center px-[10%]'>
          <div className='text-4xl text-white w-3/4 text-center font-medium'>
            Design your <span className='g_text'>vision</span>, build your{' '}
            <br></br> future with us
          </div>

          {/* search box */}
          <div className='w-2/4 relative'>
            <SearchBox
              placeholder='Search for themes...'
              className='w-full px-16 flex items-center'
            >
              <input
                type='text'
                className=' bg-transparent w-full p-4 placeholder:text-white placeholder:text-sm placeholder:font-light outline-none'
                placeholder='Search for themes...'
              />

              <button className='absolute w-7 h-7 right-5'>
                <img src={arrow} alt='' />
              </button>
            </SearchBox>
          </div>

          {/* trending links */}
          <div className='flex text-white items-center font-light text-sm'>
            <span className='mr-8'>Trending: </span>

            <div className='flex gap-4 '>
              <span>Social media</span>
              <span>UI/UX</span>
              <span>Mobile app</span>
              <span>Admin</span>
              <span>Dashboard</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>

      {/* featured templates section */}
      <section className='w-full h-max px-[10%] py-24'>
        <div className='flex items-center justify-between pb-4'>
          <p className='text-xl '>Featured Templates</p>

          {/* supposed to be a link */}
          <div className='flex items-center font-light text-sm gap-2'>
            <p className='hidden md:block'>Browse more</p>
            <BsArrowRight className='text-orange-bg ' size={24} />
          </div>
        </div>

        {/* product grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
          {products.map((element, index) => {
            return (
              <Product
                key={index}
                image={leaf}
                cat={element.product_cat}
                title={element.product_name}
                pricing={element.product_price}
                downloads='87,000'
              />
            )
          })}
        </div>
      </section>

      {/* Mobile App UI kits */}
      <section className='w-full px-[10%] py-24 bg-light-blue'>
        <div className='flex items-center justify-between pb-4'>
          <p className='text-xl '>Mobile App UI Kits</p>

          {/* supposed to be a link */}
          <div className='flex items-center font-light text-sm gap-2'>
            <p className=''>Browse more</p>
            <BsArrowRight className='text-orange-bg ' size={24} />
          </div>
        </div>

        {/* product grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
          {products.map((product, index) => {
            return product.product_cat_id === 2 ? (
              <Product
                key={index}
                image={leaf}
                cat={product.product_cat}
                title={product.product_name}
                pricing={product.product_price}
                downloads='87,000'
              />
            ) : (
              ''
            )
          })}
        </div>
      </section>

      {/* Premium Website Templates */}
      <section className='w-full px-[10%] py-24 '>
        <div className='flex items-center justify-between pb-4'>
          <p className='text-xl '>Premium Templates</p>

          {/* supposed to be a link */}
          <div className='flex items-center font-light text-sm gap-2'>
            <p className=''>Browse more</p>
            <BsArrowRight className='text-orange-bg ' size={24} />
          </div>
        </div>

        {/* product grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
          {products.map((product, index) => {
            // showing premium templates
            return product.product_type_id === 2 ? (
              <Product
                key={index}
                image={leaf}
                cat={product.product_cat}
                title={product.product_name}
                pricing={product.product_price}
                downloads='87,000'
              />
            ) : (
              ''
            )
          })}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Index
