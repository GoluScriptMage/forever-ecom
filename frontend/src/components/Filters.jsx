import React, { useState } from 'react'

const Checkbox = ({ id, label, type, fn }) => (
  <label htmlFor={id} className="flex items-center gap-3">
    <input
      id={id}
      type="checkbox"
      onChange={() => fn(type, id)}
      className="w-4 h-4 rounded-sm border-gray-300 text-gray-800 focus:ring-2 focus:ring-offset-0 focus:ring-gray-300"
    />
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </label>
)

const Filters = ({ onToggle }) => {
  const [open, setOpen] = useState(false)

  return (
    <aside className="bg-white rounded-md border p-4 md:p-6 w-full">
      {/* Header: Filters + mobile toggle */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">Filters</h3>

        {/* toggle only visible on small screens */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(s => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-50 focus:outline-none"
          aria-label={open ? 'Collapse filters' : 'Expand filters'}
        >
          <svg
            className={`w-5 h-5 transform transition-transform ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Content: collapsed on small screens, always visible on md+ */}
      <div className={`${open ? 'block' : 'hidden'} md:block mt-4`}>
        <div className="flex flex-col gap-6">
          {/* Categories */}
          <hr />
          <section>
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Categories
            </h4>
            <div className="flex flex-col gap-3">
              <Checkbox fn={onToggle} type="category" id="Men" label="MEN" />
              <Checkbox fn={onToggle} type="category" id="Women" label="WOMEN" />
              <Checkbox fn={onToggle} type="category" id="Kids" label="KIDS" />
            </div>
          </section>
          <hr />

          {/* Type */}
          <section>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Type</h4>
            <div className="flex flex-col gap-3">
              <Checkbox fn={onToggle} type="subCategory" id="Topwear" label="TopWear" />
              <Checkbox fn={onToggle} type="subCategory" id="Bottomwear" label="BottomWear" />
              <Checkbox fn={onToggle} type="subCategory" id="Winterwear" label="WinterWear" />
            </div>
          </section>
        </div>
      </div>
    </aside>
  )
}

export default Filters
