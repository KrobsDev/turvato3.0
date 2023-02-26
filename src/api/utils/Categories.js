import axios from 'axios'
import * as urls from '../config.js'

/**
 * add category
 * @param {*} formData
 * @returns
 */
export async function addCategory (formData) {
  const response = axios
    .post(urls.URL_ADD_CAT, formData)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * update one category
 * @param {*} cid
 * @param {*} formData
 * @returns
 */
export async function editCategory (cid, formData) {
  const response = await axios
    .post(urls.URL_EDIT_CATEGORY + cid, formData)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * get all categories
 * @returns
 */
export async function getAllCategories () {
  const response = await axios.get(urls.URL_GET_CATEGORIES).then(response => {
    return response
  })

  return response
}

/**
 * get one category
 * @param {*} cid
 * @returns
 */
export async function getOneCategory (cid) {
  const response = await axios
    .get(urls.URL_GET_ONE_CATEGORY + cid)
    .then(response => {
      return response
    })

  return response
}

/**
 * delete a category
 * @param {*} id
 * @returns
 */
export async function deleteCategory (id) {
  const response = await axios
    .get(urls.URL_DELETE_CAT + id)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}
