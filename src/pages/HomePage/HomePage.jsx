import React from 'react'
import './HomePage.css'
import { Nav, Banner, Carrusel, FeaturedProjects, FeaturedSection, ContactSection, Footer } from '../../components'

export function HomePage () {
  const slides = [
    {
      member: 'Jhohanson Jovel',
      rol: 'Full-stack Developer',
      intro: 'Im Jhohanson, I love videogames, programming, design and animation...',
      img: './src/images/JhohanNBG.png'
    },
    {
      member: 'Karol Fuentes',
      rol: 'Graphics and UI Designer',
      intro: 'Im Karol, a passionate web designer and illustrator who loves creating...',
      img: './src/images/KarolNBG.png'
    },
    {
      member: 'Alexander Rueda',
      rol: 'Full-stack Developer',
      intro: 'Im Alex, a passionate about videogames, programming and design...',
      img: './src/images/AlexNBG.png'
    }
    // './src/images/JhohanNBG.png',
    // './src/images/KarolNBG.png',
    // './src/images/AlexNBG.png'
  ]

  return (
    <>
      <section>
        <Nav />
        <Banner />
        <div className='w-[35%] m-auto mt-10'>
          <Carrusel slides={slides} />
        </div>
        <FeaturedProjects />
        <FeaturedSection />
        <ContactSection />
      </section>
      <Footer />
    </>
  )
}
