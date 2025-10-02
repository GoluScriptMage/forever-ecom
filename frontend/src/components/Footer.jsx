import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* About */}
          <div className="space-y-4">
            <img src={assets.logo} alt="Logo" className="w-36" />
            <p className="text-sm text-gray-500 max-w-sm">
              We are a team of passionate individuals committed to delivering
              the best products and services to our customers.
            </p>
            {/* <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="facebook">
                <img
                  src={assets.facebook_icon || assets.social_facebook}
                  alt="fb"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="twitter">
                <img
                  src={assets.twitter_icon || assets.social_twitter}
                  alt="tw"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="instagram">
                <img
                  src={assets.instagram_icon || assets.social_instagram}
                  alt="ig"
                  className="w-5 h-5"
                />
              </a>
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <NavLink to="/" className="hover:text-black">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-black">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" className="hover:text-black">
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-black">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                {/* <NavLink to="/faq" className="hover:text-black">
                  FAQ
                </NavLink> */}
              </li>
              <li>
                <p>+1-849-123-4567</p>
              </li>
              <li>contact@forever.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto mt-12 px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
        <hr />
        <p className="text-center self-center mt-8">
          © {new Date().getFullYear()} Imagine Stack — All rights reserved.
        </p>
        {/* <div className="flex gap-4 mt-3 sm:mt-0">
            <NavLink to="/privacy" className="hover:text-black">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="hover:text-black">
              Terms
            </NavLink>
          </div> */}
      </div>
    </footer>
  )
}

export default Footer
