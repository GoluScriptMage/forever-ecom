import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify'
import PlaceOrder from './pages/PlaceOrder'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
      <Navbar />
      <ToastContainer />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/my-orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
