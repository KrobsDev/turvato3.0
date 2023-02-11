import axios from 'axios'
import * as urls from '../config.js'

/**
 *
 * functions related to the user model
 */

// function to create a new user
export async function createUser (fname, lname, email, password) {
  const response = await axios
    .post(urls.URL_ADD_USERS, {
      user_fname: fname,
      user_lname: lname,
      user_email: email,
      user_password: password
    })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
  return response
}

// function to get all users
export async function getUsers () {
  await axios.get(urls.URL_GET_USERS).then(response => {
    return response
  })
}

// user login
export async function userLogin (email, password) {
  const response = await axios
    .post(urls.URL_LOGIN, {
      user_email: email,
      user_password: password
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })
  return response
}
