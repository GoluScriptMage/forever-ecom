import { useCartContext } from '../context/cartContext'
import React, { useRef, useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import Title from './Title'

const LatestCollection = () => {
  const { products, currency } = useCartContext()
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <Title 
          text1="LATEST" 
          text2="COLLECTION" 
          description="Discover our newest arrivals featuring the latest trends and premium quality pieces"
        />
        
        {/* Products Grid */}
        <div className="mt-12">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {products.slice(0, 10).map((product, index) => (
                <div 
                  key={product.id} 
                  className={`${hasAnimated ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{
                    animationDelay: hasAnimated ? `${index * 0.1}s` : '0s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <ProductItems 
                    product={product}
                    currency={currency}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Loading skeleton or empty state
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {[...Array(10)].map((_, index) => (
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
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
            VIEW ALL COLLECTION
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-in:nth-child(2) { animation-delay: 0.2s; }
        .animate-fade-in:nth-child(3) { animation-delay: 0.3s; }
        .animate-fade-in:nth-child(4) { animation-delay: 0.4s; }
        .animate-fade-in:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </section>
  )
}

export default LatestCollection