import React from 'react'
import './Card.css'

export function Card(props) {
  return (
    <div className='Card'>
      <img src={props.url} />
    </div>
  )
}
