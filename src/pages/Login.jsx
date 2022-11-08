import React from 'react'
import PageSection from '../components/PageSection'

function Login () {
  return (
    <div className='h-full w-full overflow-hidden'>
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
          <div className='right w-[450px] h-[500px] absolute right-0 bottom-0 md:top-24 2xl:top-52 my-auto rounded-lg shadow-2xl px-6 z-50 bg-white mt-20'>
            <div className='py-4 h-full  flex flex-col items-center justify-center gap-8'>
              <div className='w-full'>
                {/* sign up with google */}
                <input
                  type='button'
                  className='google border border-dark-blue mb-5'
                  value='Sign in with Google'
                />

                <div className='flex w-full items-center'>
                  <hr className='w-full' />
                  <span className='px-4 font-light'>or</span>
                  <hr className='w-full' />
                </div>

                {/* <h6 className='text-xl text-dark-blue text-center'>
                  Welcome back
                </h6>
                <p className='opacity-60 text-center py-2 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, at.
                </p> */}
              </div>
              <form className='sign flex flex-col w-full gap-4'>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <span className='text-right text-dark-blue'>
                  Forgot password?
                </span>
                <input
                  type='button'
                  className='shadow-lg bg-orange-bg text-white font-bold text-xl'
                  value='Sign in'
                />
                <span className='text-center'>
                  Don't have an account? <span className='text-orange-bg'>Sign up now</span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
