import React from 'react'
import './HomePage.css'
import { Nav, Banner, Carrusel, FeaturedSection, ContactSection, Footer } from '../../components'

export function HomePage () {
  return (
    <>
      <section>
        <Nav />
        <Banner />
        <Carrusel />
        <FeaturedSection />
        <ContactSection />
        <Footer />
      </section>
    </>
  )
}
