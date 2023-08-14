import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Project from './pages/Project'
import ServicesPage from './pages/ServicesPage'
import ServicesPageDetails from './pages/ServicesPageDetails'
import AboutPage from './pages/AboutPage'
import BlogDetails from './pages/BlogDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="blog/:id" element={<BlogDetails />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="services" element={<ServicesPage />}/>
        <Route path="services/:id" element={<ServicesPageDetails />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="project/:id" element={<Project />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
