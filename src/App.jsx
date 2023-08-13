import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
