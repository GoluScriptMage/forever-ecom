import { products } from '../assets/assets'
import { Children, createContext, useContext, useState } from 'react'

const AppContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  // const productList = products.slice(0, 10)
  const bestSeller = products.filter(item => item.bestseller === true)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)

  const values = {
    currency: '$',
    products: products,
    bestSeller: bestSeller?.slice(0, 5),
    searchQuery,
    setSearchQuery,
    searchVisible,
    setSearchVisible,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppContextProvider
