import { toast } from 'react-toastify'

function About() {
  const showToastDemo = (type) => {
    switch(type) {
      case 'success':
        toast.success('Success toast! 🎉')
        break
      case 'error':
        toast.error('Error toast! ❌')
        break
      case 'warning':
        toast.warning('Warning toast! ⚠️')
        break
      case 'info':
        toast.info('Info toast! ℹ️')
        break
      default:
        toast('Default toast! 👋')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Imagine Stack
          </h1>
          <p className="text-xl text-gray-600">
            A modern full-stack development setup with all the tools you need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Tech Stack</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                React 18 with modern hooks
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Vite for lightning-fast development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Tailwind CSS v3 for styling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                React Router for navigation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                React Toastify for notifications
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Hot module replacement (HMR)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Responsive design patterns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Modern CSS with utilities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                Client-side routing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                Toast notifications
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">🍞 Toast Notification Demo</h2>
          <p className="text-gray-600 mb-6">Click the buttons below to see different types of toast notifications:</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => showToastDemo('success')}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Success Toast
            </button>
            <button
              onClick={() => showToastDemo('error')}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Error Toast
            </button>
            <button
              onClick={() => showToastDemo('warning')}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Warning Toast
            </button>
            <button
              onClick={() => showToastDemo('info')}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Info Toast
            </button>
            <button
              onClick={() => showToastDemo('default')}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Default Toast
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About