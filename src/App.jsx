import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'
import CityDetails from './pages/CityDetails/CityDetails'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/see-all-cities' element={<SeeAllCities />} />
        <Route path='see-all-cities/cityDetails/:productId' element={<CityDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
