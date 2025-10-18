import React from 'react'
import Title from '../components/Title.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="w-full max-w-md -translate-y-6 sm:-translate-y-12">
        <div className="flex items-center justify-center mb-3">
          {/* <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18v4H3z" fill="#111827" opacity="0.06" />
              <path d="M6 10h12v10H6z" fill="#111827" opacity="0.06" />
            </svg>
          </div> */}
        </div>

        <Title text1="Login" frontDash={false} />

        <form className="mt-6 bg-white border border-gray-100 rounded-lg shadow-md p-6 space-y-4">
          <input
            type="text"
            placeholder="Username"
            aria-label="Username"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
          />

          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
          />

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-sm text-gray-600 hover:underline"
            >
              Create Account
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-md font-medium hover:bg-black transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
