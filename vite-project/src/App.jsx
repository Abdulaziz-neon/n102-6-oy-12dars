import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './modules/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'

const App = () => {
  return (
    <Router>
      <div className='flex min-h-screen bg-white'>
        <Navbar />
        <main className='flex-1 w-full md:ml-0 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
