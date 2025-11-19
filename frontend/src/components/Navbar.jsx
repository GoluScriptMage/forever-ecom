import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext.jsx'
import { useCartContext } from '../context/CartContextProvider.jsx'


const Navbar = () => {
  const [visible, setVisible] = useState(false)
  // NOTE: Consider adding search functionality
  const showSearchIcon = useLocation().pathname === '/collection' ? true : false; 
  const navigate = useNavigate();

  const { setSearchVisible, searchVisible } = useAppContext()
  const { totalItems } = useCartContext().cartState

  console.log(`Total Items in Cart: ${totalItems}`)

  return (
    // logo
    <nav className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right side icons */}
      <div className="flex items-center gap-6">
        {showSearchIcon && (
          <img src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
          onClick={() => setSearchVisible(!searchVisible)}
        />)}

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to="/orders" className="cursor-pointer hover:text-black">
                Orders
              </Link>
              <Link onClick={() => setTimeout(() => navigate('/login'), 600)} className="l-0 cursor-pointer hover:text-black">Logout</Link>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {totalItems || 0}
          </p>
        </Link>

        <div>
          <img
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 ease-in-out shadow-2xl ${
            visible ? 'w-full' : 'w-0'
          } overflow-hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img src={assets.logo} alt="Logo" className="w-24" />
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
              >
                <img src={assets.cross_icon} alt="Close" className="w-4 h-4" />
                <span className="text-sm font-medium">Close</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 py-8">
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-black bg-gray-50 border-r-4 border-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/collection"
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-black bg-gray-50 border-r-4 border-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`
                    }
                  >
                    COLLECTION
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-black bg-gray-50 border-r-4 border-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`
                    }
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setVisible(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-lg font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-black bg-gray-50 border-r-4 border-black'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`
                    }
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>

              {/* Mobile Menu Actions */}
              <div className="mt-12 px-6 space-y-4">
                <div className="border-t border-gray-100 pt-6">
                  <Link
                    to="/cart"
                    onClick={() => setVisible(false)}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={assets.cart_icon}
                      className="w-5 h-5"
                      alt="Cart"
                    />
                    <span className="font-medium">Shopping Cart</span>
                    <span className="ml-auto bg-black text-white text-xs px-2 py-1 rounded-full">
                      10
                    </span>
                  </Link>
                </div>

                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setVisible(false)}
                    className="block w-full p-4 text-center bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setVisible(false)}
                    className="block w-full p-4 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    My Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {visible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={() => setVisible(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
