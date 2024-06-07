import './App.css'
import CounterPage from './page/CounterPage'
import LoginPage from './page/LoginPage'
import ProductPage from './page/ProductPage'
import CartPage from './page/CartPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () =>{

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CounterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
