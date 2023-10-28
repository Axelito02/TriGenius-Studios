import React from 'react'
import './Nav.css'
import { Profile } from '../../subcomponentes'

export function Nav() {
    return (
          <>
            <nav className='containerNav'>
                <div className='Logo'>
                    <img src="./src/images/TrigeniusLogo.png" alt="Trigenius Logo" />
                </div>
                <div className='hyperlinks'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
                <div className='userProfile'>
                    <Profile />
                </div>
            </nav>
        </>
    )
}
