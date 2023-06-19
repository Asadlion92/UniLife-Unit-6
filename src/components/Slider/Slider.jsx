import React from 'react'
import './Slider.css'
import overlay from '../../assets/cover-img.png'

const banner = {
  backgroundImage: `url(${overlay})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '50vh',
  width: '100%',
  position: 'relative',
  filter: 'grayscale(50%)',
  zIndex: '-1',
  filter: 'blur(3px)'
}

function Slider() {
  return (
    <div className='slider-container'>
      <div style={banner}></div>
      <div className='slider-font'>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search for student accommodation</p>
      </div>
    </div>
  )
}

export default Slider