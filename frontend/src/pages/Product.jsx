import { useAppContext } from '../context/AppContext'
import ProductDetails from '../components/ProductDetails'
import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'
import { useEffect, useState } from 'react'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useAppContext()
  const [relatedProducts, setRelatedProducts] = useState([])

  // getting the current Product and realted products
  const currentproduct = products.find(item => item._id === productId) // Need to use parseInt in one of the checks value is number to avodid the bug

  useEffect(() => {
    const relatedProducts = products
      .filter(
        item =>
          item.category === currentproduct.category && item._id !== productId
      )
      .slice(0, 4) // Limiting to only 4 products
    setRelatedProducts(relatedProducts)
  }, [currentproduct, productId, products])

  // console.log(`Current Product: ${JSON.stringify(currentproduct)}`)

  return (
    <div>
      <ProductDetails currency={currency} currentProduct={currentproduct} />
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Title text1="Related" text2="Products" />

        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts &&
              relatedProducts.map((product, key) => (
                <div key={key} className="h-full">
                  <ProductItems product={product} currency={currency} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
