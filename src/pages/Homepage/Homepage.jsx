import React from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import HomepageForm from '../../components/HomepageForm/HomepageForm'

function Homepage() {
  return (
    <div className='homepage-container'>
      <Slider />
      <HomepageForm />
    </div>
  )
}

export default Homepage