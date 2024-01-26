import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'
import CityDetails from './pages/CityDetails/CityDetails'
import HomeDetails from './pages/HomeDetails/HomeDetails'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

//Static route is for example: path='/allCities'
//Dynamic route is for example: path='/cityDetails/:city_id'
//The ":" is what makes it dynamic

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allCities' element={<SeeAllCities />} />
        <Route path='/cityDetails/:city_id' element={<CityDetails />} />
        <Route path='/homeDetails/:property_id' element={<HomeDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
