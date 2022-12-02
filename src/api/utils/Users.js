import axios from 'axios'
import * as urls from '../config.js'

/**
 *
 * functions related to the user model
 */

// function to create a new user
export async function createUser (fname, lname, email, password) {
  try {
    const response = await axios.post(urls.URL_USERS + 'addUser.php', {
      user_fname: fname,
      user_lname: lname,
      user_email: email,
      user_password: password
    })
    return response.data['message']
  } catch (error) {
    console.log(error)
    return false
  }
}

// function to get all users
export async function getUsers () {
  await axios.get(urls.URL_USERS + 'getUsers.php').then(response => {
    console.log(response.data)
  })
}

// user login
export async function userLogin (email, password) {
  try {
    const response = await axios.post(urls.URL_USERS + 'login.php', {
      user_email: email,
      user_password: password
    })
    return response.data
  } catch (error) {
    console.log(error)
    return false
  }
}
