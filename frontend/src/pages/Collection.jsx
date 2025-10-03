import Title from '../components/Title'
import Filters from '../components/Filters'
import React, { useEffect, useState } from 'react'
import SortOptions from '../components/SortOptions'
import { useCartContext } from '../context/cartContext'
import Product from './Product'
import ProductItems from '../components/ProductItems'

const Collection = () => {
  const [sort, setSort] = useState('relevant')
  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
  })
  const [filteredProducts, setFilteredProducts] = useState([]); // For Final Filtered Products ready to display
  const { products, currency, searchQuery } = useCartContext();

  // To save the checkbox changes in State
  const toggleFilter = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      return { ...prev, [filterType]: newValues }
    })
  }
  
  // To apply the filters when needed (e.g.. on button click)
  useEffect(() => {
    // Create a copy of products to filter
    let filteredProducts = [...products];

    // Apply filters on Search Query first
    if (searchQuery) {
      console.log(`Filtering by search query: ${searchQuery}`);
      filteredProducts = filteredProducts.filter(pr => pr.name.toLowerCase().split(' ').some(word => word.startsWith(searchQuery.trim().toLowerCase())));
    }

    // Then check if the filters are applied and filter Categories and subCategory
    if (filters.category.length > 0) {
      // console.log(`Filtering by category: ${JSON.stringify(filters.category)}`)
      filteredProducts = filteredProducts.filter(pr =>
        filters.category.includes(pr.category)
      )
    }
    if (filters.subCategory.length > 0) {
      // console.log(
      //   `Filtering by subCategory: ${JSON.stringify(filters.subCategory)}`
      // )
      filteredProducts = filteredProducts.filter(pr =>
        filters.subCategory.includes(pr.subCategory)
      )
    }
    setFilteredProducts(filteredProducts)
    // console.log(`Filtered Products: ${JSON.stringify(filteredProducts)}`)
  }, [filters, products, searchQuery])

  // To apply Sorting whenever Sort Stat changes
  useEffect(() => {
    console.log(`Sorting products by: ${sort}`);
    switch (sort) {
      case 'low-high': {
        setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        break
      }
      case 'high-low': {
        setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
        break
      }
      default: {
        setFilteredProducts(prev => [...prev])
        break
      }
    }
  }, [sort])


  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar on md+, full-width stacked on mobile */}
        <aside className="md:col-span-3">
          <Filters onToggle={toggleFilter} />
        </aside>

        {/* Main content */}
        <main className="md:col-span-9">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <Title text1="All" text2="Collections" />
            <div className="order-first sm:order-last">
              <SortOptions
                value={sort}
                onToggle={e => setSort(e.target.value)}
              />
            </div>
          </div>

          {/* Products grid placeholder - wiring data later */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product items will go here */}
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map(product => {
                // console.log(`Rendering product: ${JSON.stringify(product)}`);
                return (
                  <ProductItems
                    product={product}
                    key={product._id}
                    currency={currency}
                  />
                )
              })
            ) : (
              <p className="text-gray-500">
                No products found matching the selected filters.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Collection
