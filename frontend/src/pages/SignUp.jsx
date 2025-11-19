import React from 'react'
import Title from '../components/Title.jsx'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="w-full max-w-md -translate-y-6 sm:-translate-y-12">
        <div className="flex items-center justify-center mb-3">
          {/* Small emblem to give an e‑commerce feel (keeps blending with background) */}
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

        <Title text1="Sign Up" frontDash={false} />

        <form className="mt-6 bg-white border border-gray-100 rounded-lg shadow-md p-6 space-y-4">
          <input
            type="text"
            placeholder="Username"
            aria-label="Username"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
          />

          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
          />

          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
          />

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="border border-gray-200 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition"
            >
              Already have an account? Log in
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="flex-1 h-px bg-gray-200" aria-hidden="true" />
              <span>or continue with</span>
              <span className="flex-1 h-px bg-gray-200" aria-hidden="true" />
            </div>

            <a
              href="http://localhost:3001/auth/google"
              className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-md px-4 py-3 font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M23.3 12.3c0-.8-.1-1.6-.4-2.3H12v4.4h6.3c-.3 1.7-1.4 3.1-3 4l4.8 3.7c2.8-2.6 4.4-6.3 4.4-9.8"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.2 0 5.9-1.1 7.9-3l-4.8-3.7c-1.3.9-2.9 1.5-4.7 1.5-3.6 0-6.7-2.4-7.8-5.7H.8v3.6c2 3.9 6.1 6.3 11.2 6.3"
                />
                <path
                  fill="#FBBC05"
                  d="M4.2 13.3c-.2-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3V5.1H.8c-1.2 2.2-1.2 4.6 0 6.7l3.4-1.4"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.8c1.8 0 3.4.6 4.6 1.7l3.5-3.5C17.9 1 15.2 0 12 0 6.9 0 2.8 2.4.8 5.9l3.4 3.1c1.1-3.3 4.2-5.7 7.8-5.7"
                />
              </svg>
              <span>Continue with Google</span>
            </a>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-md font-medium hover:bg-black transition"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
