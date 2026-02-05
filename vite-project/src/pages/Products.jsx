import React, { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    category: 'Electronics'
  })

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading products:', err)
        setLoading(false)
      })
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product])
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.price || !formData.image) {
      alert('Iltimos, barcha maydonlarni to\'ldiring')
      return
    }

    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      category: formData.category,
      description: 'Yangi mahsulot'
    }

    setProducts([...products, newProduct])
    setFormData({ name: '', price: '', image: '', category: 'Electronics' })
    setShowForm(false)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center p-4'>
        <div className='text-center'>
          <p className='text-gray-600'>Mahsulotlar yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8'>
          <div>
            <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-2'>Bizning mahsulotlarimiz</h1>
            <p className='text-sm md:text-base text-gray-600'>Bu yerda ajoyib mahsulotlarni korishingiz mumkin</p>
          </div>
          <div className='flex items-center gap-2 md:gap-4 flex-wrap'>
            {cart.length > 0 && (
              <div className='bg-purple-100 px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2'>
                <span className='text-sm md:text-base font-semibold text-purple-700'>{cart.length} ta mahsulot</span>
              </div>
            )}
            <button
              onClick={() => setShowForm(!showForm)}
              className='bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-600 whitespace-nowrap'
            >
              {showForm ? 'Bekor qilish' : '+ Yangi mahsulot'}
            </button>
          </div>
        </div>

        {showSuccess && (
          <div className='fixed top-4 right-4 bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg z-50 text-sm md:text-base'>
            ✅ Mahsulot savatga qo'shildi!
          </div>
        )}

        {showForm && (
          <div className='bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 mb-6 md:mb-8'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>Yangi mahsulot qo'shish</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-gray-700 font-semibold mb-2 text-sm md:text-base'>Mahsulot nomi</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base'
                  placeholder='Masalan: iPhone 15'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold mb-2 text-sm md:text-base'>Narx ($)</label>
                <input
                  type='number'
                  name='price'
                  value={formData.price}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base'
                  placeholder='Masalan: 999'
                  step='0.01'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold mb-2 text-sm md:text-base'>Rasm URL</label>
                <input
                  type='url'
                  name='image'
                  value={formData.image}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base'
                  placeholder='https://example.com/image.jpg'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold mb-2 text-sm md:text-base'>Kategoriya</label>
                <select
                  name='category'
                  value={formData.category}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base'
                >
                  <option value='Electronics'>Electronics</option>
                  <option value='Computers'>Computers</option>
                  <option value='Audio'>Audio</option>
                  <option value='Fashion'>Fashion</option>
                </select>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  type='submit'
                  className='bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 text-sm md:text-base'
                >
                  Qo'shish
                </button>
                <button
                  type='button'
                  onClick={() => setShowForm(false)}
                  className='bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 text-sm md:text-base'
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200'
            >
              <div className='h-48 md:h-64 bg-gray-100 flex-shrink-0'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=' + product.name
                  }}
                />
              </div>
              
              <div className='p-3 md:p-4 flex flex-col flex-grow'>
                <h3 className='text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2'>{product.name}</h3>
                
                <div className='mt-auto pt-3 md:pt-4'>
                  <span className='text-xl md:text-2xl font-bold text-purple-600'>{formatPrice(product.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
