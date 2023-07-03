import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/see-all-cities' element={<SeeAllCities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
