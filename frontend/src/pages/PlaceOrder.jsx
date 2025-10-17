import React from 'react'
import Title from '../components/Title'
import { useCartContext } from '../context/CartContextProvider'
import { assets } from '../assets/assets'
import { HandMetal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { cartState } = useCartContext()
  const { cart = [], totalAmount = 0, deliveryFee = 0 } = cartState || {}
  const navigate = useNavigate();

  // Handler for going to my orders page 
  const handlePlaceOrder = () => {
    // Logic fo placing order 

    // navigate to my orders page
    navigate('/my-orders');
  }
  

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Delivery form */}
        <div className="lg:col-span-7">
          <Title text1="Delivery" text2="Information" frontDash={false} />

          <form className="mt-6 bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="First name"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="Last name"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Email"
            />

            <input
              type="text"
              placeholder="Street address"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Street address"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="City"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="State"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Zip Code"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="Zip Code"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                aria-label="Country"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              aria-label="Phone"
            />
          </form>
        </div>

        {/* Right: Payment & order summary */}
        <aside className="lg:col-span-5">
          <Title text1="Payment" text2="Method" frontDash={false} />

          <div className="mt-6 bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* Order summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Order Summary
              </h3>

              <div className="space-y-3">
                {cart.length === 0 &&
                  cart.map(item => (
                    <div
                      key={`${item._id}-${item.size || 'd'}`}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={item.image?.[0]}
                        alt={item.name}
                        className="w-14 h-14 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Size: {item.size || '—'}
                        </div>
                      </div>
                      <div className="text-sm font-semibold">
                        ${item.price} x {item.quantity || 1}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotals</span>
                <span className="font-semibold">
                  ${Number(totalAmount || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>${Number(deliveryFee || 0)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-3">
                <span>Total</span>
                <span>
                  ${Number(totalAmount || 0) + Number(deliveryFee || 0)}
                </span>
              </div>
            </div>

            {/* Payment methods (visual only) */}
            {/* A small in-box title (smaller than the main Title) to visually separate this area
            <div className="pt-2">
              <div className="text-sm text-gray-600 font-medium">Payment</div>
            </div> */}

            <div className="mt-3 p-3 rounded-md border border-gray-100 bg-gradient-to-b from-white to-gray-50 shadow-sm">
              {/* Slightly larger, bold heading for the options to make them stand out */}
              <div className="mb-3 text-base font-semibold text-gray-900">
                Payment options
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    id="stripe"
                    name="payment"
                    value="stripe"
                    defaultChecked
                    className="accent-gray-900"
                  />
                  <img src={assets.stripe_logo} alt="Stripe" className="h-6" />
                </label>

                <label className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    id="razor"
                    name="payment"
                    value="razorpay"
                    className="accent-gray-900"
                  />
                  <img
                    src={assets.razorpay_logo}
                    alt="Razorpay"
                    className="h-6"
                  />
                </label>

                <label className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                    className="accent-gray-900"
                  />
                  <span className="text-sm">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <button onClick={handlePlaceOrder} className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-black transition-all duration-200">
              Place Order
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PlaceOrder
