export const cartInitialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  deliveryFee: 10,
}

export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

const calculateCartTotals = cart => {
  let totalAmount = 0
  let totalItems = 0

  cart.forEach(item => {
    totalAmount += item.quantity * item.price
    totalItems += item.quantity
  })
  return { totalAmount, totalItems }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    // Add to cart
    case cartActions.ADD_TO_CART: {
      const { _id, size, quantity, price, name, image } = action.payload
      let cartCopy = [...state.cart]

      const itemExist = cartCopy.find(item => item._id === _id)

      // Check if item already exist in cart
      if (itemExist) {
        // if size same
        if (itemExist.size === size) {
          itemExist.quantity += quantity
        } else {
          // If size is different
          cartCopy.push({ _id, size, quantity, price, name, image })
        }
      } else {
        // If item doesn't exist
        cartCopy.push({ _id, size, quantity, price, name, image })
      }

      const { totalAmount, totalItems } = calculateCartTotals(cartCopy)

      console.log(`Cart Copy: ${JSON.stringify(cartCopy)}`);

      return {
        ...state,
        cart: cartCopy,
        totalItems,
        totalAmount,
      }
    }

    // Remove from Cart
    case cartActions.REMOVE_FROM_CART: {
      const { id, size, quantity } = action.payload
      let cartCopy = [...state.cart]

      // getting the current item with same id and size
      const currentItemExist = cartCopy.find(
        item => item.id === id && item.size === size
      )

      // Check if the item quantity is 1 then remove it from cart
      if (currentItemExist.quantity === 1 && quantity === 1) {
        cartCopy = cartCopy.filter(item => item.id !== id && item.size !== size)
      }

      // If payload quantity is more than 1 then decrease the qunatity by paylaod quantity
      if (quantity > 1 && currentItemExist.quantity >= quantity) {
        currentItemExist.quantity -= quantity
      }
      const { totalAmount, totalItems } = calculateCartTotals(cartCopy)

      return {
        ...state,
        cart: cartCopy,
        totalItems,
        totalAmount,
      }
    }

    // Clear cart or Remove all
    case cartActions.CLEAR_CART: {
      return {
        ...cartInitialState,
      }
    }
  }
  // Default Cart
  return state
}
