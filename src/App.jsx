import React from 'react'
import './index.css'
import { AboutUsPage, HomePage, LoginPage, ProjectsDetailsPage, ProjectsEditPage, ProjectsPage } from './pages';

function App() {
    return (
        <>
        <h1 className='bg-slate-950'>hola</h1>
            <HomePage />
            <ProjectsPage />
            <AboutUsPage />
            <LoginPage />
            <ProjectsEditPage />
            <ProjectsDetailsPage />
        </>
    )
}

export default App;