import axios from 'axios'
import * as urls from '../config.js'

// functions for the product api

// function to add a new product

// function to update a product

// function to get a single product

// function to get all products
export async function getProducts () {
  const response = await axios.get(urls.URL_GET_PRODUCTS).then(response => {
    // console.log(response.data.length)
    if (response.data.length === 0) {
      return []
    } else {
      // console.log(response.data)
      return response
    }
  })
  //   .then(response => console.log(response.data))

  return response
}
