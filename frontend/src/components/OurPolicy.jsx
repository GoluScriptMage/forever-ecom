import React from 'react'
import { assets } from '../assets/assets.js'

const policies = [
  {
    id: 'exchange',
    img: assets.exchange_icon,
    title: 'Easy Exchange Policy',
    desc: 'Hassle-free exchanges within the specified period.',
  },
  {
    id: 'return',
    img: assets.quality_icon,
    title: '7 Days Easy Return',
    desc: 'Returns accepted within 7 days for eligible items.',
  },
  {
    id: 'support',
    img: assets.support_img,
    title: '24/7 Customer Support',
    desc: 'We are here to assist you anytime via chat or email.',
  },
]

const OurPolicy = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {policies.map(policy => (
            <div
              key={policy.id}
              className="flex items-start gap-4 p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200 bg-gray-50"
              role="article"
              aria-labelledby={`policy-${policy.id}-title`}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-white">
                <img
                  src={policy.img}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <h3
                  id={`policy-${policy.id}-title`}
                  className="text-gray-800 font-semibold text-sm sm:text-base"
                >
                  {policy.title}
                </h3>
                <p className="mt-1 text-gray-500 text-xs sm:text-sm max-w-xs">
                  {policy.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
