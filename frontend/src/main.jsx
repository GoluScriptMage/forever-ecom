import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext'
import CartContextProvider from './context/CartContextProvider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AppContextProvider>
  </BrowserRouter>
)
