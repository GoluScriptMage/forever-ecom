import { Navigate, useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { useCartContext } from '../context/CartContextProvider'
import { cartActions } from '../context/cartReducer'
import React from 'react'
import { toast } from 'react-hot-toast'

const Cart = () => {
  const { cartState, dispatchCart } = useCartContext()
  const { cart } = cartState;
  const navigate = useNavigate();

  // Implement checkout logic
  const handleCheckout = () => {
    // Check if cart value is greater than zero
    if(cartState.totalAmount <= 0) {
      return toast.error('Your cart is empty. Please add items to proceed to checkout.')
    } 

    // proceed to address filling page
    navigate('/place-order');
    
  }

  console.log('Cart component rendered with:', cart)

  return (
    <>
      <hr />
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Title text1="Your" text2="Cart" frontDash={false} />
        <hr />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-6">
            {cart.length === 0 && (
              <div className="flex justify-center items-center h-40">
                <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
              </div>
            )}

            {cart.map(item => (
              <div
                key={item._id}
                className="flex gap-4 items-start border rounded-lg p-4"
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 sm:w-20 rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-lg font-bold mt-2">${item.price}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      aria-label="Decrease"
                      onClick={() =>
                        dispatchCart({
                          type: cartActions.REMOVE_FROM_CART,
                          payload: {
                            _id: item._id,
                            size: item.size,
                            quantity: 1,
                          },
                        })
                      }
                      className="w-8 h-8 flex items-center justify-center rounded border"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="w-16 text-center border rounded px-2 py-1"
                    />

                    <button
                      aria-label="Increase"
                      onClick={() =>
                        dispatchCart({
                          type: cartActions.ADD_TO_CART,
                          payload: { ...item, quantity: 1 },
                        })
                      }
                      className="w-8 h-8 flex items-center justify-center rounded bg-gray-900 text-white"
                    >
                      +
                    </button>

                    <button
                      aria-label="Remove item"
                      onClick={() =>
                        dispatchCart({
                          type: cartActions.REMOVE_FROM_CART,
                          payload: {
                            _id: item._id,
                            size: item.size,
                            quantity: item.quantity,
                          },
                        })
                      }
                      className="ml-4 text-sm text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}

          {cart.length > 0 && (
            <div className="lg:col-span-1 border rounded-lg p-4 h-fit">
              <Title text1="Cart" text2="Totals" frontDash={false} />
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotals</span>
                  <span className="font-semibold">
                    ${cartState.totalAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>${cartState.deliveryFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-3">
                  <span>Total</span>
                  <span>${cartState.totalAmount + cartState.deliveryFee}</span>
                </div>
                <button onClick={handleCheckout} className="w-full mt-4 bg-gray-900 text-white px-5 py-3 rounded-md font-medium hover:bg-black transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
