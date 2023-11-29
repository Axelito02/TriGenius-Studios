import React from 'react'
import './Profile.css'

export function Profile () {
  return (
    <>
      <div className='container'>
        <div className='username'>
          <p>Alex Rueda</p>
        </div>
        <div className='userAvatar'>
          <img src='./src/images/AlexCircle.png' alt='userAvatar' />
        </div>
      </div>
    </>
  )
}
