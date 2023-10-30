import React from 'react'
import { FormLogIn } from '../../subcomponentes'
import { Visitors } from '../../components'
import './LoginPage.css'

export function LoginPage () {
  return (
    <>
      <div className='flex'>
        <img className='logo-logIn' src='./src/images/LogoTextBlack.png' alt='logo TriGenius' />
        <div className='grid grid-cols-2 gap-8 py-[120px] px-40'>
          <Visitors />
          <FormLogIn />
        </div>
      </div>
    </>
  )
}
