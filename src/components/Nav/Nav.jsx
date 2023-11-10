import { Profile, Hyperlinks } from '../../subcomponentes'
import React from 'react'
import './Nav.css'

export function Nav () {
  return (
    <>
      <nav className='containerNav'>
        <div className='Logo'>
          <a href='/'>
            <img src='./src/images/logotipoB.png' alt='Trigenius Logo' />
          </a>
        </div>
        <Hyperlinks />
        <div className='userProfile'>
          <Profile />
        </div>
      </nav>
    </>
  )
}
