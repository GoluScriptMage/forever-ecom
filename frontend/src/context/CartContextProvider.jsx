import { useReducer, createContext, useContext } from 'react'
import { cartInitialState, cartReducer } from './cartReducer'

const CartContext = createContext()

// custom hook to consume CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialState)

  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
