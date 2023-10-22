import React from 'react'
import { Form } from '../../components/subcomponentes'
import { Visitors } from '../../components'

export function LoginPage() {
    return (
        <>
            <hr />
            <h1>Pagina: LoginPage</h1>
            <h2>Componentes:</h2>
            <ul>
                <li><Visitors /></li>
                <li><Form /></li>
            </ul>
        </>
    )
}
