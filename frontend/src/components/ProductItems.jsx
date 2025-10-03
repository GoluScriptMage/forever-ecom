import { assets } from '../assets/assets'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItems = ({product, currency}) => {
  
  // console.log(`Rendering ProductItems for product: ${JSON.stringify(product)}`);
  return (
    <NavLink
      to={`/product/${product._id}`}
      className="group cursor-pointer block transition-transform duration-300 hover:scale-105"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-3">
        <img
          src={product.image[0]}
          alt={product.title}
          className="w-full h-64 sm:h-72 object-cover transition-all duration-500 group-hover:scale-110"
          //   onError={(e) => {
          //     e.target.src = assets.placeholder || '/placeholder.png'
          //     e.target.className = 'w-full h-64 sm:h-72 object-cover bg-gray-100 flex items-center justify-center text-gray-400'
          //   }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

        {/* Quick View Button (appears on hover) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center space-y-1">
        <p className="text-gray-800 text-sm sm:text-base font-medium line-clamp-2 hover:text-black transition-colors">
          {product.name}
        </p>
        <p className="text-gray-900 font-bold text-lg">
          {currency}
          {product.price}
        </p>

        {/* Star Rating */}
        <div className="flex justify-center items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              alt="star"
              className="w-3 h-3"
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductItems
