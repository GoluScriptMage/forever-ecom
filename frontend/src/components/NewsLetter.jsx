import React from 'react'

const NewsLetter = () => {
  return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl auto mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Subscribe now & get 20% off</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-500">Join our newsletter to stay updated on the latest offers and promotions.</p>

        <form className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto min-w-[260px] px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
  )
}

export default NewsLetter