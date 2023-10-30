import React from 'react'
import './FormLogIn.css'

export function FormLogIn () {
  return (
    <>
      <div className='containerLogIn'>
        <h1><span className='span-title'>Admin,</span> <br />sign in to Access
        </h1>
        <div className='inputsLogIn'>
          <div className='inputNameLI'>
            <input type='text' placeholder='Name' className='inputFormLI' />
          </div>
          <div className='inputEmailLI'>
            <input type='text' placeholder='Email' className='inputFormLI' />
          </div>
        </div>
        <div className='ContainerBtn'>
          <button>Send</button>
        </div>
      </div>
    </>
  )
}
