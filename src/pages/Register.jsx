import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as api from '../api/utils/Users'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function SignUp () {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // sweet alert component
  const sweetAlert = withReactContent(Swal)

  const navigate = useNavigate()

  const addNewUser = async () => {
    // validate before submit
    if (validateForm()) {
      await api
        .createUser(fname, lname, email, password)
        .then(function (response) {
          if (
            response === 'User already exists' ||
            response === 'Fields cannot be empty'
          ) {
            sweetAlert
              .fire({
                title: 'Sign up failed',
                // text: 'The email you entered already exists',
                timer: 2000,
                toast: true,
                icon: 'warning',
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
              })
            // return false
          } else {
            sweetAlert
              .fire({
                title: 'Account created successfully',
                timer: 2000,
                icon: 'success',
                showConfirmButton: false
              })
              .then(() => {
                sweetAlert.close()
                navigate('/signin')
              })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  // function to add a new user to the database

  // onChange handler
  const handleInputChange = e => {
    const { id, value } = e.target
    if (id === 'fname') setFname(value)
    if (id === 'lname') setLname(value)
    if (id === 'email') setEmail(value)
    if (id === 'password') setPassword(value)
  }

  // validate input
  const validateInput = (regex, id, value, error) => {
    if (regex.test(value)) {
      // show error message
      document.getElementById(id).style.border = '1px solid green'
      document.getElementById(error).textContent = ''
      return true
    } else {
      document.getElementById(id).style.border = '1px solid red'
      document.getElementById(error).textContent = 'Input is invalid'
      return false
    }
  }

  // validate entire form
  const validateForm = () => {
    if (
      validateInput(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        'fname',
        fname,
        'ferror'
      ) &&
      validateInput(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        'lname',
        lname,
        'lerror'
      ) &&
      validateInput(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'email',
        email,
        'eerror'
      ) &&
      validateInput(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'password',
        password,
        'perror'
      )
    ) {
      return true
    }
  }

  return (
    <div className='h-screen w-full '>
      <div className='h-4/5 w-full slanted_div flex'>
        <div className='content w-3/4 h-full mx-auto flex items-center relative justify-between'>
          <div className='left w-2/5'>
            <p className='pre_title text-white opacity-60'>sign up</p>
            <p className='slogan py-3 text-white font-semibold text-5xl 2xl:text-6xl'>
              Join <span className='text-orange-bg'>Turvato</span>
            </p>
            <p className='leading-7 text-white opacity-70 font-light text-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              modi nesciunt nihil vitae voluptate dolorem quo. Provident aliquid
              nobis sequi?
            </p>
          </div>
          <div className='right w-[450px] h-max absolute right-0 bottom-0 top-10 2xl:top-32 my-auto rounded-lg shadow-2xl px-6 z-50 bg-white mt-20'>
            <div className='py-8 h-full  flex flex-col items-center justify-center gap-8'>
              <div className='w-full'>
                {/* sign up with google */}
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
                <div className='w-full'>
                  <input
                    type='text'
                    id='fname'
                    placeholder='First Name'
                    value={fname}
                    onChange={e => handleInputChange(e)}
                  />
                  <p className='error' id='ferror'></p>
                </div>
                <div className=''>
                  <input
                    type='text'
                    id='lname'
                    placeholder='Last Name'
                    value={lname}
                    onChange={e => handleInputChange(e)}
                  />
                  <p className='error' id='lerror'></p>
                </div>
                <div className=''>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => handleInputChange(e)}
                  />
                  <p className='error' id='eerror'></p>
                </div>
                <div className=''>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    id='password'
                    onChange={e => handleInputChange(e)}
                  />
                  <p className='error' id='perror'></p>
                </div>
                <input
                  type='button'
                  className='shadow-lg cursor-pointer bg-orange-bg text-white font-bold text-xl'
                  value='Sign up'
                  onClick={() => addNewUser()}
                />
                <span className='text-center'>
                  Already have an account?{' '}
                  <span className='text-orange-bg'>
                    <Link to='/signin'>Sign in here</Link>
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

export default SignUp
