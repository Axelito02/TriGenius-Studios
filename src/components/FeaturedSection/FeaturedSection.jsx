import React from 'react'
import { AddProject, Card, Filter } from '../subcomponentes'

export function FeaturedSection() {
    return (
        <>
            <h2>FeaturedSection</h2>
            <ul>
                <li><Filter /></li>
                <li>
                    <Card />
                </li>
                <li>
                    <AddProject />
                </li>
            </ul>
        </>
    )
}
