// import { useAppContext } from '../context/AppContext'
import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useCartContext } from '../context/CartContextProvider'
import { cartActions } from '../context/cartReducer'

const ProductDetails = ({ currency, currentProduct }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [size, setSize] = useState('')
  const { dispatchCart } = useCartContext()

  // When the current product changes (e.g., user clicked a related product),
  // reset local UI state and scroll to the top so the new product is visible from the top.
  useEffect(() => {
    setImageIndex(0)
    setSize('')
    // console.log(`Window is: ${typeof window}`) It returns object

    // If not undefined do this
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [currentProduct?._id])

  if (!currentProduct) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-gray-500">Loading product...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Images column */}
        <div className="lg:col-span-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Thumbnails - below main image on small, vertical at side on md+ */}
            <div className="flex md:flex-col gap-3 order-last md:order-first md:justify-center">
              {currentProduct.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border ${
                    imageIndex === index ? 'border-gray-800' : 'border-gray-200'
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="order-first md:order-none flex-1 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
              <img
                src={currentProduct.image[imageIndex]}
                alt="selected product"
                className="max-h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Details column */}
        <div className="lg:col-span-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
            {currentProduct.name}
          </h1>

          {/* Rating row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
              <img src={assets.star_dull_icon} alt="star" className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-600">(4.0)</span>
          </div>

          <div className="text-2xl font-bold text-gray-900 mb-4">
            {currency}
            {currentProduct.price}
          </div>

          <p className="text-sm text-gray-700 mb-6">
            {currentProduct.description}
          </p>

          {/* Size selector */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Select Size
            </h4>
            <div className="flex flex-wrap gap-3">
              {currentProduct.sizes.map((s, index) => (
                <button
                  key={index}
                  onClick={() => setSize(s)}
                  className={`px-3 py-2 rounded-md border ${
                    size === s
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 text-gray-700'
                  } text-sm`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
            <button
              onClick={() =>
                dispatchCart({
                  type: cartActions.ADD_TO_CART,
                  payload: { ...currentProduct },
                })
              }
              className="w-full sm:w-auto bg-gray-900 text-white px-5 py-3 rounded-md font-medium hover:bg-black transition"
            >
              Add to Cart
            </button>
            {/* <button className="w-full sm:w-auto mt-3 sm:mt-0 border border-gray-200 px-5 py-3 rounded-md text-sm">Add to Wishlist</button> */}
          </div>

          {/* Policies */}
          <hr className="border-gray-100 my-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600 mb-6">
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">100% Original</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">
                Cash on Delivery
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Fast Delivery</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">15 Days Return</span>
            </div>
          </div>

          {/* Description / Reviews short */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex gap-6 mb-4">
              <button className="text-sm font-medium text-gray-900">
                Description
              </button>
              <button className="text-sm text-gray-600">Reviews(122)</button>
            </div>
            <p className="text-sm text-gray-700">
              Discover curated products, secure checkout, fast shipping, easy
              returns, authentic quality, responsive customer support, helpful
              reviews, and personalized recommendations for a seamless online
              shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
