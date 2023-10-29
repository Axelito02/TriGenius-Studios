import React from 'react'
import './index.css'
import { AboutUsPage, HomePage, LoginPage, ProjectsDetailsPage, ProjectsEditPage, ProjectsPage } from './pages'

function App () {
  return (
    <>
      <HomePage />
      <ProjectsPage />
      <AboutUsPage />
      <LoginPage />
      <ProjectsEditPage />
      <ProjectsDetailsPage />
    </>
  )
}

export default App
