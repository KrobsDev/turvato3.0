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

// get a single product
export async function getOneProduct (pid) {
  const response = await axios
    .get(urls.URL_GET_PRODUCT + pid)
    .then(response => {
      return response
    })

  return response
}

// get all categories
export async function getAllCategories () {
  const response = await axios.get(urls.URL_GET_CATEGORIES).then(response => {
    return response
  })

  return response
}

// get all types
export async function getAllTypes () {
  const response = await axios.get(urls.URL_GET_TYPES).then(response => {
    return response
  })

  return response
}

// update product
export async function addProduct (dataFromForm) {
  const response = await axios
    .post(urls.URL_ADD_PRODUCT, dataFromForm)
    .then(response => {
      return response
    })
    .catch(error => {
      return 'error.response.data'
    })

  return response
}

// update product
export async function updateProduct (id, dataFromForm) {
  const response = await axios
    .post(urls.URL_UPDATE_PRODUCT + id, dataFromForm)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}
