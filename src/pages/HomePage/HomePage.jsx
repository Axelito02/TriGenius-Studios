import React from 'react'
import './HomePage.css'
import { Nav, Banner, Carrusel, FeaturedProjects, ContactSection, Footer } from '../../components'

export function HomePage () {
  const slides = [
    // {
    //   member: 'Jhohanson Jovel',
    //   rol: 'Full-stack Developer',
    //   intro: 'Im Jhohanson, I love videogames, programming, design and animation...',
    //   img: './src/images/JhohanNBG.png',
    //   bg: './src/images/fondoEquipo.jpg'
    // },
    // {
    //   member: 'Karol Fuentes',
    //   rol: 'Graphics and UI Designer',
    //   intro: 'Im Karol, a passionate web designer and illustrator who loves creating...',
    //   img: './src/images/KarolNBG.png'
    // },
    // {
    //   member: 'Alexander Rueda',
    //   rol: 'Full-stack Developer',
    //   intro: 'Im Alex, a passionate about videogames, programming and design...',
    //   img: './src/images/AlexNBG.png'
    // }
    './src/images/JhohanNBG.jpg',
    './src/images/KarolNBG.jpg',
    './src/images/AlexNBG.jpg'
  ]

  return (
    <>
      <section>
        <Nav />
        <Banner />
        <div className='w-[100%] m-auto mt-10 '>
          <Carrusel slides={slides} />
        </div>
        <FeaturedProjects />
        <ContactSection />
      </section>
      <Footer />
    </>
  )
}
