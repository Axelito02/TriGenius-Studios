import React from 'react'
import { Form } from '../../subcomponentes'
import { Visitors } from '../../components'

export function LoginPage () {
  return (
    <>
      <img src='./src/images/LogoTextBlack.png' alt='logo TriGenius' />
      <div className='grid grid-cols-2 gap-8 py-10 px-40'>
        <Visitors />
        <Form />
      </div>
    </>
  )
}
