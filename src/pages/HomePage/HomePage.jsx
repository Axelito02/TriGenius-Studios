import React from 'react'
import { Nav, Banner, Carrusel, FeaturedSection, ContactSection, Footer } from '../../components'

export function HomePage() {
    return (
        <>
            <hr />
            <h1>Pagina: Homepage</h1>
            <h2>Componentes:</h2>
            <ul>
                <li><Nav /></li>
                <li><Banner /></li>
                <li><Carrusel /></li>
                <li><FeaturedSection /></li>
                <li><ContactSection /></li>
                <li><Footer /></li>
            </ul>
        </>
    )
}
