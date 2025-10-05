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
    // Use default of 1 if quantity is undefined or null
    const itemQuantity = Number(item.quantity) || 1
    const itemPrice = Number(item.price) || 0

    // Add to totals with parsed numbers
    totalAmount += itemQuantity * itemPrice
    totalItems += itemQuantity
  })

  // Ensure we return valid numbers (not NaN)
  return {
    totalAmount: isNaN(totalAmount) ? 0 : totalAmount,
    totalItems: isNaN(totalItems) ? 0 : totalItems,
  }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    // Add to cart
    case cartActions.ADD_TO_CART: {
      // Destructure with default values for missing properties
      const {
        _id,
        size = 'default',
        quantity = 1,
        price,
        name,
        image,
      } = action.payload
      // Check for existing item with same ID and size
      const existingItemIndex = state.cart.findIndex(
        item => item._id === _id && item.size === size
      )
      let newCart

      // Check if item with same ID and size exists
      if (existingItemIndex !== -1) {
        // Item with same ID and size exists - update quantity
        newCart = [...state.cart]
        const existingQuantity = newCart[existingItemIndex].quantity || 1
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: existingQuantity + quantity,
          size: size, // Ensure size is set
        }
      } else {
        // Either item doesn't exist or has different size - add as new
        newCart = [
          ...state.cart,
          {
            _id,
            size,
            quantity,
            price: price || 0,
            name: name || 'Product',
            image: image || [],
          },
        ]
      }

      const { totalAmount, totalItems } = calculateCartTotals(newCart)

      return {
        ...state,
        cart: newCart,
        totalItems,
        totalAmount,
      }
    }

    // Remove from Cart
    case cartActions.REMOVE_FROM_CART: {
      const { _id, size = 'default', quantity = 1 } = action.payload

      // Find the item index
      const itemIndex = state.cart.findIndex(
        item => item._id === _id && item.size === size
      )

      // If item not found, return unchanged state
      if (itemIndex === -1) {
        console.log('Item not found in cart, no changes made')
        return state
      }

      let cartCopy = [...state.cart]
      const currentItem = cartCopy[itemIndex]

      // If removing all or more than available, remove the item completely
      if (quantity >= currentItem.quantity) {
        cartCopy = cartCopy.filter((_, index) => index !== itemIndex)
      } else {
        // Otherwise decrease the quantity

        cartCopy[itemIndex] = {
          ...currentItem,
          quantity: currentItem.quantity - quantity,
        }
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

  // If we reach here, no case matched so return unchanged state
  console.log('Unknown action type in cart reducer:', action.type)
  return state
}
