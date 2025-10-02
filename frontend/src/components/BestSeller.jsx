import { useCartContext } from '../context/cartContext'
import React from 'react'
import ProductItems from './ProductItems'
import Title from './Title'

const BestSeller = () => {
  const { bestSeller, currency } = useCartContext()
  console.log('BestSeller component bestSeller:', bestSeller)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <Title
          text1="BestSeller"
          text2="COLLECTION"
          description="Discover our top-selling products that our customers love the most."
        />

        {/* Products Grid */}
        <div className="mt-12">
          {bestSeller && bestSeller.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 sm:gap-6 lg:gap-8">
              {' '}
              {bestSeller.map(product => (
                <div key={product._id} className="animate-fade-in">
                  <ProductItems product={product} currency={currency} />
                </div>
              ))}
            </div>
          ) : (
            // Loading skeleton or empty state
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-64 sm:h-72 mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate-fade-in:nth-child(2) {
          animation-delay: 0.2s;
        }
        .animate-fade-in:nth-child(3) {
          animation-delay: 0.3s;
        }
        .animate-fade-in:nth-child(4) {
          animation-delay: 0.4s;
        }
        .animate-fade-in:nth-child(5) {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  )
}

export default BestSeller
