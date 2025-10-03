import { assets } from '../assets/assets'
import React, { useEffect, useRef } from 'react'
import { useCartContext } from '../context/cartContext'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { searchVisible, setSearchVisible, setSearchQuery, searchQuery } =
    useCartContext()
  const location = useLocation().pathname
  const inputRef = useRef(null)

  // focus the input when search becomes visible
  const isCollection = location === '/collection'

  // focus the input when search becomes visible
  useEffect(() => {
    if (!isCollection) return
    if (searchVisible && inputRef.current) {
      // small timeout so transition starts before focus (gives smoother UX)
      const t = setTimeout(() => inputRef.current.focus(), 120)
      return () => clearTimeout(t)
    }
    return undefined
  }, [searchVisible, isCollection])

  // Update SeachQuery in Context using Ref
  const handleInput = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value // get the current value of Input
    setSearchQuery(value) // update the context value
  }

  // Hide searchBar in other routes (after hooks to preserve hook order)
  if (!isCollection) return null

  return (
    // keep mounted; animate open/close with max-height + opacity + translate
    <div
      className={`w-full px-4 sm:px-6 md:px-0 bg-gray-50 overflow-hidden transition-[max-height,opacity,transform] duration-200 ease-out ${
        searchVisible
          ? 'max-h-40 opacity-100 translate-y-0 py-4'
          : 'max-h-0 opacity-0 -translate-y-2 py-0'
      }`}
      aria-hidden={!searchVisible}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="relative">
              {/* left search icon inside input */}
              <img
                src={assets.search_icon}
                alt="search"
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />

              <input
                ref={inputRef}
                value={searchQuery}
                onInput={handleInput}
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* cross icon aligned to the right of input on all devices */}
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setSearchVisible(false)}
            className="flex items-center justify-center p-2 rounded-md hover:bg-gray-50 border border-transparent"
          >
            <img src={assets.cross_icon} alt="clear" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
