import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as api from '../api/utils/Users'

function Login () {
  // reference to the use context hook created in the context file
  const { setAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // navigator
  const navigate = useNavigate()

  // sweet alert
  const sweetAlert = withReactContent(Swal)

  // handle input field change
  const handleInputChange = e => {
    const { id, value } = e.target
    if (id === 'email') setEmail(value)
    if (id === 'password') setPassword(value)
  }

  // validate input
  const validateInput = (regex, id, value, error, msg) => {
    if (regex.test(value)) {
      // show error message
      document.getElementById(id).style.border = '1px solid green'
      document.getElementById(error).textContent = ''
      return true
    } else {
      document.getElementById(id).style.border = '1px solid red'
      document.getElementById(error).textContent = msg
      return false
    }
  }

  // validate form on submit
  const validateForm = () => {
    if (
      validateInput(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'email',
        email,
        'eerror',
        'Email is invalid'
      ) &&
      validateInput(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'password',
        password,
        'perror',
        'Enter a valid password'
      )
    ) {
      return true
    } else {
      return false
    }
  }

  // login function
  const login = async () => {
    if (validateForm())
      await api
        .userLogin(email, password)
        .then(function (response) {
          if (
            response.status === 200 &&
            response.data.message === 'Login successful'
          ) {
            // fire sweet alert success alert
            sweetAlert
              .fire({
                title: 'Login successful',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
                // check user role and navigate accordingly
                if (response.data.user['user_role'] === 1) {
                  // navigate to admin
                  navigate('/admin/')
                } else {
                  // navigate to regular user
                  navigate('/')
                }
              })
          } else if (response.data.message === 'Login failed') {
            // fire sweet alert failed alert
            sweetAlert
              .fire({
                title: 'Login failed',
                text: 'Invalid username or password',
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
              })
          } else if (response.data.message === 'User not found') {
            // fire sweet alert failed alert
            sweetAlert
              .fire({
                title: 'User not found',
                text: 'The credentials you entered do not exist',
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
              })
          } else {
            sweetAlert
              .fire({
                title: 'User not found',
                text: 'The credentials you entered do not exist',
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
              })
          }
        })
        .catch(function (error) {
          // fire sweet alert for server error
          sweetAlert
            .fire({
              title: 'Server Error',
              text: "Sorry we couldn't process the request at this time",
              icon: 'warning',
              timer: 2000,
              showConfirmButton: false
            })
            .then(() => {
              sweetAlert.close()
            })
        })
  }

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='h-4/5 w-full slanted_div flex'>
        <div className='content w-3/4 h-full mx-auto flex items-center relative justify-between'>
          <div className='left w-2/5'>
            <p className='pre_title text-white opacity-60'>sign in</p>
            <p className='slogan py-3 text-white font-semibold text-5xl 2xl:text-6xl'>
              Log into <span className='text-orange-bg'>Turvato</span>
            </p>
            <p className='leading-7 text-white opacity-70 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              modi nesciunt nihil vitae voluptate dolorem quo. Provident aliquid
              nobis sequi?
            </p>
          </div>
          <div className='right w-[450px] relative h-max right-0 bottom-0 md:top-24 2xl:top-52 my-auto rounded-lg shadow-2xl px-6 z-50 bg-white mt-20'>
            <div className='' id='custom-target'></div>
            <div className='py-4 h-full  flex flex-col items-center justify-center gap-8'>
              <div className='w-full'>
                {/* sign up with google */}
                {/* <div id='custom-target'></div> */}
                {/* <input
                  type='button'
                  className='google border border-dark-blue mb-5'
                  value='Sign in with Google'
                />

                <div className='flex w-full items-center'>
                  <hr className='w-full' />
                  <span className='px-4 font-light'>or</span>
                  <hr className='w-full' />
                </div> */}
              </div>
              <form className='sign flex flex-col w-full gap-4'>
                <input
                  type='email'
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={e => handleInputChange(e)}
                />
                <p className='error' id='eerror'></p>
                <input
                  type='password'
                  placeholder='Password'
                  id='password'
                  value={password}
                  onChange={e => handleInputChange(e)}
                />
                <p className='error' id='perror'></p>
                <span className='text-right text-dark-blue'>
                  Forgot password?
                </span>
                <input
                  type='button'
                  className='shadow-lg cursor-pointer bg-orange-bg text-white font-bold text-xl'
                  value='Sign in'
                  onClick={() => login()}
                />
                <span className='text-center'>
                  Don't have an account?{' '}
                  <span className='text-orange-bg'>
                    <Link to='/signup'>Sign up now</Link>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute w-full bottom-10'>
        <p className='w-3/4 mx-auto opacity-75'>
          {' '}
          &#169;2022 Turvato Inc. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Login
