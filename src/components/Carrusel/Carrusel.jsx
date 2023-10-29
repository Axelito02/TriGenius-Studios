import React from 'react'
import './Carrusel.css'

export function Carrusel () {
  return (
    <>
      <button className='btn-left'><img src='./src/images/Expand_left.png' alt='left' /></button>
      <button className='btn-right'><img src='./src/images/Expand_right.png' alt='right' /></button>
      <section className='jhohan'>
        <div className='littleInfo'>
          <h1>Jhohanson Jovel</h1>
          <h2>Developer</h2>
          <p>I'm Jhohanson, I love videogames, programming, design and animation...</p>
        </div>
        <img className='carrusel-Img' src='./src/images/JhohanNBG.png' alt='Jhohanson Jovel' />
      </section>
      <img className='equipoBG' src='./src/images/fondoEquipo.jpg' alt='fondo' />

    </>
  )
}
