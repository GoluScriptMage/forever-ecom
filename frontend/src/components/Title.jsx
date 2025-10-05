import React from 'react'

const Title = ({ text1, text2, description, frontDash='true' }) => {
  return (
    <div className="text-center py-2">
      <div className="inline-flex gap-2 items-center mb-3">
        {frontDash && <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>}
        <p className="text-gray-700 text-2xl sm:text-4xl font-light">
          {text1}
          <span className="text-gray-700 font-medium"> {text2}</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      {description && (
        <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default Title
