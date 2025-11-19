import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Title text1="Contact" text2="Us" frontDash={false} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Get in touch
            </h3>
            <p className="text-gray-600 mt-2">
              Have a question? We'd love to help.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              />

              <textarea
                placeholder="How can we help?"
                className="w-full border rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              />

              <button className="bg-gray-900 text-white px-4 py-3 rounded-md w-full hover:bg-black transition">
                Send Message
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-600">
              <div>Phone: +1 (555) 123-4567</div>
              <div className="mt-1">Email: support@example.com</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={assets.contact_img}
              alt="Contact"
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
