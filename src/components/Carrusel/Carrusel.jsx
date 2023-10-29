import React, { useState } from 'react'
import './Carrusel.css'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

export function Carrusel ({ slides }) {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.lenght - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === slides.lenght - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition ease-out duration-400'
        style={{
          transform: `translateX(-${current * 100}%`
        }}
      >
        {slides.map((s, index) => {
          return (
            <img key={index} src={s} />
          )
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between item-center flex text-black px-10 text-3xl'>
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  )
}

// import { Carousel, Typography, IconButton } from '@material-tailwind/react'

// export function Carrusel () {
//   return (
//     <Carousel
//       className='rounded-xl'
//       prevArrow={({ handlePrev }) => (
//         <IconButton
//           variant='text'
//           color='white'
//           size='lg'
//           onClick={handlePrev}
//           className='!absolute top-2/4 left-4 -translate-y-2/4'
//         >
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={2}
//             stroke='currentColor'
//             className='h-6 w-6'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
//             />
//           </svg>
//         </IconButton>
//       )}
//       nextArrow={({ handleNext }) => (
//         <IconButton
//           variant='text'
//           color='white'
//           size='lg'
//           onClick={handleNext}
//           className='!absolute top-2/4 !right-4 -translate-y-2/4'
//         >
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={2}
//             stroke='currentColor'
//             className='h-6 w-6'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
//             />
//           </svg>
//         </IconButton>
//       )}
//     >
//       <div className='relative h-full w-full'>
//         <img className='h-full w-full object-cover' src='./src/images/JhohanNBG.png' alt='image 1' />
//         <div className='absolute inset-0 grid h-full w-full place-items-center'>
//           <div className='w-3/4 text-center md:w-2/4'>
//             <Typography
//               variant='h1'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Jhohanson Jovel
//             </Typography>
//             <Typography
//               variant='h2'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Full-stack Developer
//             </Typography>
//             <Typography
//               variant='paragraph'
//               color='white'
//               className='mb-12 opacity-80'
//             >
//               I'm Jhohanson, I love videogames, programming, design and animation...
//             </Typography>
//           </div>
//         </div>
//       </div>

//       <div className='relative h-full w-full'>
//         <img className='h-full w-full object-cover' src='./src/images/KarolNBG.png' alt='image 2' />
//         <div className='absolute inset-0 grid h-full w-full place-items-center'>
//           <div className='w-3/4 text-center md:w-2/4'>
//             <Typography
//               variant='h1'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Karol Fuentes
//             </Typography>
//             <Typography
//               variant='h2'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Graphics and UI Designer
//             </Typography>
//             <Typography
//               variant='paragraph'
//               color='white'
//               className='mb-12 opacity-80'
//             >
//               I'm Karol, a passionate web designer and illustrator who loves creating...
//             </Typography>
//           </div>
//         </div>
//       </div>

//       <div className='relative h-full w-full'>
//         <img className='h-full w-full object-cover' src='./src/images/AlexNBG.png' alt='image 3' />
//         <div className='absolute inset-0 grid h-full w-full place-items-center'>
//           <div className='w-3/4 text-center md:w-2/4'>
//             <Typography
//               variant='h1'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Alexander Rueda
//             </Typography>
//             <Typography
//               variant='h2'
//               color='white'
//               className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//             >
//               Full-stack Developer
//             </Typography>
//             <Typography
//               variant='paragraph'
//               color='white'
//               className='mb-12 opacity-80'
//             >
//               I'm Alex, a passionate about videogames, programming and design...
//             </Typography>
//           </div>
//         </div>

//       </div>

//     </Carousel>

//   )
// }
