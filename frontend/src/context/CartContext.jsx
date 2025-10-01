import { products } from '../assets/assets'
import { Children, createContext, useContext } from 'react'

const cartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(cartContext)

const CartContextProvider = ({ children }) => {
  const productList = products.slice(0, 10)
  const bestSeller = products.filter((item) => item.bestseller === true);
  console.log(`CartContextProvider products:`, productList)

  // You can add more state and functions here as needed

  const values = {
    currency: '$',
    deliveryFee: 10,
    products: productList,
    bestSeller: bestSeller?.slice(0, 5),
  }

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>
}

export default CartContextProvider
