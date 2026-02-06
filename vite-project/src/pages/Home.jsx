import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='bg-gray-50 py-12 md:py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800'>
              ShopHub'ga xush kelibsiz
            </h1>
            <p className='text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4'>
              Raqobatbardosh narxlarda ajoyib mahsulotlarni toping. Sizga kerak bo'lgan hamma narsa uchun bitta manzil.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4'>
              <Link
                to='/products'
                className='px-6 md:px-8 py-3 md:py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 text-sm md:text-base'
              >
                Mahsulotlarni ko'rish
              </Link>
              <Link
                to='/categories'
                className='px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-lg font-semibold border-2 border-purple-500 hover:bg-purple-50 text-sm md:text-base'
              >
                Kategoriyalarni ko'rish
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16'>
        <h2 className='text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800'>Nima uchun bizni tanlash kerak?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
          <div className='bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200'>
            <h3 className='text-lg md:text-xl font-bold mb-2 text-gray-800'>Tez yetkazib berish</h3>
            <p className='text-sm md:text-base text-gray-600'>Buyurtmalaringizni tez yetkazib beramiz</p>
          </div>
          <div className='bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200'>
            <h3 className='text-lg md:text-xl font-bold mb-2 text-gray-800'>Yuqori sifat</h3>
            <p className='text-sm md:text-base text-gray-600'>Faqat siz uchun eng yaxshi mahsulotlar</p>
          </div>
          <div className='bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200'>
            <h3 className='text-lg md:text-xl font-bold mb-2 text-gray-800'>Eng yaxshi narxlar</h3>
            <p className='text-sm md:text-base text-gray-600'>Raqobatbardosh narxlar kafolatlanadi</p>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Home
