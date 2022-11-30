import axios from 'axios'
import * as urls from '../config.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

/**
 *
 * functions related to the user model
 */

// sweet alert component
const sweetAlert = withReactContent(Swal)

// function to create a new user
/**
 * These parameters are my post variables
 * the function has been defined in a way that
 * it takes the post varibles and passes them
 * through the axios post request
 * @param {*} fname
 * @param {*} lname
 * @param {*} email
 * @param {*} password
 */
export async function createUser (fname, lname, email, password) {
  /**
   * this is where the post request is happening. I have added the url
   * of the api as the first parameter in the axios post method: axios.post(url, data)
   * The data option is expanded to allow me to parse the data from the frontend into
   * an acceptable format for the api to work
   *
   *
   * The .then function is just what happens after the request has been made. In my case
   * I am just showing an alert box
   * */
  await axios
    .post(urls.URL_USERS + 'addUser.php', {
      user_fname: fname,
      user_lname: lname,
      user_email: email,
      user_password: password
    })
    .then(function (response) {
      if (
        response.data['message'] === 'User already exists' ||
        response.data['message'] === 'Fields cannot be empty'
      ) {
        sweetAlert
          .fire({
            title: 'Sign up failed',
            text: 'The email you entered already exists',
            timer: 2000,
            toast: true,
            backdrop: true,
            icon: 'warning',
            showConfirmButton: false
          })
          .then(() => {
            return sweetAlert.close()
          })
      } else {
        sweetAlert
          .fire({
            title: 'Account created successfully',
            timer: 2000,
            icon: 'success',
            showConfirmButton: false
          })
          .then(() => {
            return sweetAlert.close()
          })
      }
      // console.log(response.data)
    })
}

// function to get all users
/**
 * This is an axios get request denoted by axios.get(url)
 * It takes your api endpoint(in your case your api url) and returns the response
 *
 */
export async function getUsers () {
  await axios.get(urls.URL_USERS + 'getUsers.php').then(response => {
    console.log(response.data)
  })
}
