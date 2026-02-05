import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories)
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading data:', err)
        setLoading(false)
      })
  }, [])

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  if (loading) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center p-4'>
        <div className='text-center'>
          <p className='text-gray-600'>Kategoriyalar yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-8 md:mb-12'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4'>
            Kategoriyalarni ko'rish
          </h1>
          <p className='text-sm md:text-lg text-gray-600 px-4'>Mahsulot kategoriyalarimizning keng doirasini o'rganing</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12'>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
              className={`bg-white rounded-lg p-6 md:p-8 shadow-md cursor-pointer border ${
                selectedCategory === category.name
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:shadow-lg'
              }`}
            >
              <h3 className='text-xl md:text-2xl font-bold text-center text-gray-800 mb-2'>{category.name}</h3>
              <p className='text-gray-600 text-center text-xs md:text-sm mb-3 md:mb-4'>{category.description}</p>
              <div className='text-center'>
                <span className='inline-block bg-purple-100 text-purple-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold'>
                  {category.count} ta mahsulot
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className='mt-8 md:mt-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6'>
              <span className='text-purple-600'>{selectedCategory}</span> kategoriyasidagi mahsulotlar
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-200'
                >
                  <div className='h-40 md:h-48 bg-gray-100'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-full h-full object-cover'
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=' + product.name
                      }}
                    />
                  </div>
                  <div className='p-3 md:p-4'>
                    <h3 className='font-bold text-gray-800 mb-1 text-sm md:text-base'>{product.name}</h3>
                    <p className='text-purple-600 font-semibold text-base md:text-lg'>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }).format(product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className='mt-8 md:mt-12 text-center'>
            <div className='bg-blue-500 rounded-lg p-8 md:p-12 text-white'>
              <h2 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4'>Xarid qilishga tayyormisiz?</h2>
              <p className='text-base md:text-xl mb-4 md:mb-6'>Mahsulotlarni ko'rish uchun yuqoridagi kategoriyani bosing</p>
              <Link
                to='/products'
                className='inline-block bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 text-sm md:text-base'
              >
                Barcha mahsulotlarni ko'rish
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Categories
