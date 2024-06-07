import './App.css'
import CounterPage from './page/CounterPage'
import LoginPage from './page/LoginPage'
import PokemonPage from './page/PokemonPage'
import ProductPage from './page/ProductPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () =>{

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CounterPage />} />
      <Route path="/pokemon" element={<PokemonPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product" element={<ProductPage />} />

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
