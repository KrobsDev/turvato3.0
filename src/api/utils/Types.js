import axios from 'axios'
import * as urls from '../config.js'

export async function addType (formData) {
  const response = await axios
    .post(urls.URL_ADD_TYPE, formData)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * get all available types
 * @returns
 */
export async function getAllTypes () {
  const response = await axios
    .get(urls.URL_GET_TYPES)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * get one type
 * @param {*} tid
 * @returns
 */
export async function getOneType (tid) {
  const response = await axios
    .get(urls.URL_GET_ONE_TYPE + tid)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * update one type
 * @param {*} tid
 * @param {*} formData
 * @returns
 */
export async function editType (tid, formData) {
  const response = await axios
    .post(urls.URL_UPDATE_TYPE + tid, formData)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}

/**
 * delete a type
 * @param {*} tid
 * @returns
 */
export async function deleteType (tid) {
  const response = await axios
    .get(urls.URL_DELETE_TYPE + tid)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response.data
    })

  return response
}
