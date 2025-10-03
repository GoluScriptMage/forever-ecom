import { products } from '../assets/assets'
import { Children, createContext, useContext, useState } from 'react'

const cartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(cartContext)

const CartContextProvider = ({ children }) => {
  // const productList = products.slice(0, 10)
  const bestSeller = products.filter((item) => item.bestseller === true);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(true);

  const values = {
    currency: '$',
    deliveryFee: 10,
    products: products,
    bestSeller: bestSeller?.slice(0, 5),
    searchQuery,
    setSearchQuery,
    searchVisible,
    setSearchVisible,
  }

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>
}

export default CartContextProvider
