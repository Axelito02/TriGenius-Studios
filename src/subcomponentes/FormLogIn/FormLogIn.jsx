import React from 'react'
import './FormLogIn.css'

export function FormLogIn () {
  return (
    <>
      <div className='containerLogIn'>
        <h1 className='text-3xl sm:text-4xl mt-5 sm:mt-0 font-bold'><span className='span-title'>Admin,</span> <br />Sign in to Access
        </h1>
        <div className='inputsLogIn'>
          <div className='inputEmailLI'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='ej. admin@email.com' className='inputFormLI' id='email' />
          </div>
          <div className='inputPasswordLI'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Password' className='inputFormLI' id='password' />
            <label className='remind-text' htmlFor='password'>Forgot your password? <a className='remind-hplink' href='#'>remind me</a></label>
          </div>
        </div>
        <div className='ContainerBtn font-semibold'>
          <button>Sign in</button>
        </div>
      </div>
    </>
  )
}
