import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home'},
    { path: '/products', label: 'Products'},
    { path: '/categories', label: 'Categories' },
  ]

  return (
    <>
     
      <button
        onClick={() => setIsOpen(!isOpen)}
        
        className={`fixed top-4 left-4 z-50 md:hidden  bg-gray-700 text-white w-10 h-10 rounded-lg shadow-lg flex items-center justify-center`}
      >
        {isOpen ? '✕' : '☰'} 
      </button>
     

     
      <nav className={`
        fixed md:static top-0 left-0 h-[100%] w-[250px] bg-cyan-950 border-r border-gray-200 shadow-md flex flex-col z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className='p-4 md:p-6 border-b border-gray-200'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-600'>
            ShopHub
          </h1>
          <p className='text-xs md:text-sm text-white mt-1'>Sizning xarid manzilingiz</p>
        </div>
        
        <div className='flex-1 p-4 space-y-2 overflow-y-auto'>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm md:text-base ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : 'text-white hover:bg-gray-100 hover:text-black'
                }`}
              >
                <span className='font-medium'>{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className='p-4 border-t border-gray-200'>
          <div className='bg-gray-50 rounded-lg p-3 md:p-4'>
            <p className='text-xs md:text-sm text-gray-600 font-medium'>Xush kelibsiz!</p>
            <p className='text-xs text-gray-500 mt-1'>Xarid qilishdan zavqlaning</p>
          </div>
        </div>
      </nav>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
        />
      )}
    </>
  )
}

export default Navbar
