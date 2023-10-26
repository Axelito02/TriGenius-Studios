import React from 'react'
import { Nav, Footer, ValueSection, AboutStudio, TeamInfo } from '../../components'

export function AboutUsPage() {
    return (
        <>
            <hr />
            <h1 >Pagina: AboutUsPage</h1>
            <h2>Componentes:</h2>
            <ul>
                <li><Nav /></li>
                <li><AboutStudio /></li>
                <li><ValueSection /></li>
                <li><TeamInfo /></li>
                <li><Footer /></li>
            </ul>
        </>
    )
}
