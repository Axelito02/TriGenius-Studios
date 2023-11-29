import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { AboutUsPage, HomePage, LoginPage, ProjectsPage, PageNotFound, ContacPage } from './pages'

function AppRouter () {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />

      <Route
        path='/about'
        element={<AboutUsPage />}
      />

      <Route
        path='/projects'
        element={<ProjectsPage />}
      />

      <Route
        path='/contact'
        element={<ContacPage />}
      />

      <Route
        path='/login'
        element={<LoginPage />}
      />

      <Route
        path='/*'
        element={<PageNotFound />}
      />
    </Routes>

  )
}

export default AppRouter