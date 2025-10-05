import { assets } from '../assets/assets'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItems = ({ product, currency }) => {
  // console.log(`Rendering ProductItems for product: ${JSON.stringify(product)}`);
  return (
    <NavLink
      to={`/product/${product._id}`}
      className="group cursor-pointer block transition-transform duration-300 hover:scale-105 h-full"
    >
      {/* Card wrapper to keep consistent height */}
      <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-gray-200 transition-shadow flex flex-col">
        {/* Product Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          <img
            src={product.image[0]}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-800 text-sm sm:text-base font-medium line-clamp-2 hover:text-black transition-colors mb-2">
              {product.name}
            </p>
            <p className="text-gray-900 font-bold text-lg">
              {currency}
              {product.price}
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star"
                  className="w-3 h-3"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">(4.0)</span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductItems
