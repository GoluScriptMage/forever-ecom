import React from 'react'
// useCartContext intentionally omitted for this dummy view
import Title from '../components/Title.jsx'
import { products } from '../assets/assets'

const Orders = () => {
  // cartState is not used here; this page uses dummyOrders for visual layout
  // const cart = cartState.cart || []

  // Dummy orders derived from products for visual/testing purposes
  const dummyOrders = products.slice(0, 4).map((p, i) => ({
    _id: p._id + '-order-' + i,
    name: p.name,
    image: p.image?.[0],
    price: p.price,
    quantity: 1,
    size: p.sizes?.[0] || 'M',
    date: Date.now() - i * 86400000 * 3, // spaced dates
    payment: 'COD',
    status: i === 2 ? 'Delivered' : 'Order Placed',
  }))

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <Title text1="My" text2="Orders" frontDash={false} />

      <div className="mt-6 space-y-6">
        {/* Original cart-based mapping is commented out while using dummy data above */}
        {/*
        {cart.map((order, index) => ( ... ))}
        */}

  {dummyOrders.map(order => (
          <div
            key={order._id}
            className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Left: image + details */}
                <div className="flex items-start sm:items-center gap-4 sm:flex-1">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {order.name}
                    </h4>
                    <div className="mt-2 text-sm text-gray-700">
                      <span className="font-semibold mr-3">${order.price}</span>
                      <span className="mr-3">Quantity: {order.quantity}</span>
                      <span>Size: {order.size}</span>
                    </div>

                    <div className="mt-3 text-sm text-gray-500">
                      <div>Date: {new Date(order.date).toDateString()}</div>
                      <div className="mt-1">Payment: {order.payment}</div>
                    </div>
                  </div>
                </div>

                {/* Right: status + action */}
                <div className="flex items-center sm:flex-col sm:items-end gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-500' : 'bg-green-500'
                      }`}
                    />
                    <span className="text-sm text-gray-700">{order.status}</span>
                  </div>

                  <button className="border border-gray-200 text-sm px-4 py-2 rounded-md hover:bg-gray-50">
                    Track Order
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
