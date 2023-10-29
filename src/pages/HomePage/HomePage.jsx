import React from 'react'
import './HomePage.css'
import { Nav, Banner, Carrusel, FeaturedSection, ContactSection, Footer } from '../../components'

export function HomePage () {
  const slides = [
    './src/images/JhohanNBG.png',
    './src/images/KarolNBG.png',
    './src/images/AlexNBG.png'
  ]

  return (
    <>
      <section>
        <Nav />
        <Banner />
        <div className='w-[35%] m-auto mt-10'>
          <Carrusel slides={slides} />
        </div>
        <FeaturedSection />
        <ContactSection />
      </section>
      <Footer />
    </>
  )
}
