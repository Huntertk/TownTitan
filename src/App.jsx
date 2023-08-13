import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Project from './pages/Project'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="project/:id" element={<Project />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
