import React from 'react'
import './TeamInfo.css'
import { CardMember } from '../../subcomponentes'

export function TeamInfo () {
  return (
    <>
      <div className='temainfoContainer'>
        <div className='titleTeamInfo'>
          <h1>Meet the  <span className='titleColor'>team!</span></h1>
        </div>
        <div className='CardContainerTeamInfo'>
          <CardMember />
        </div>
        <div className='btnAdmin'>
          <button>Log in as administrator</button>
        </div>
      </div>
    </>
  )
}
