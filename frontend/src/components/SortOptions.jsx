import React from 'react'

const SortOptions = ({ value, onToggle }) => {
  return (
    <div className="w-full md:w-auto">
      <label htmlFor="sort" className="sr-only">
        Sort products
      </label>
      <div className="inline-flex items-center border border-gray-200 rounded-md px-3 py-2 bg-white">
        <span className="text-sm text-gray-600 mr-3 hidden md:inline">
          Sort by:
        </span>
        <select
          id="sort"
          name="sort"
          value={value}
          onChange={onToggle}
          className="appearance-none bg-transparent text-sm text-gray-700 focus:outline-none"
        >
          <option value="relevant">Relevant</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
        <svg
          className="w-4 h-4 ml-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

export default SortOptions
