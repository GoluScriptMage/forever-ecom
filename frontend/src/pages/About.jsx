import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Title text1="About" text2="Us" frontDash={false} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-first lg:order-last flex justify-center lg:justify-end">
            <img
              src={assets.about_img}
              alt="About"
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
            <p className="text-gray-700 mt-4">
              Imagine Stack is a curated e-commerce platform focused on quality,
              simplicity, and value. We design experiences that are clean,
              responsive, and easy to use across devices.
            </p>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              What we do
            </h3>
            <p className="text-gray-700 mt-2">
              We source thoughtful products and present them through a modern
              shopping experience that emphasizes clarity, performance, and
              trust.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-md p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Quality
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Carefully selected products
                </div>
              </div>
              <div className="bg-white rounded-md p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Fast Delivery
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Reliable shipping partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
