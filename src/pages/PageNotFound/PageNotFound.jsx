import React from 'react'
import './PageNotFound.css'

export function PageNotFound () {
  return (
    <>
      <h1 className='text-center font-extrabold text-4xl sm:text-left' id='title'>So sorry!</h1>
      <h2>The page you are looking for cannot be found</h2>
      <p>Possible reasons:</p>
      <ul>
        <li>The address may have been typed incorrectly.</li>
        <li>It may be a broken or outdated link.</li>
      </ul>
      <img src='./src/images/Illustration404.png' alt='Page not found' />
    </>
  )
}
