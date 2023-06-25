import React from 'react'
import './Slider.css'
import cover from '../../assets/cover-img.png'

const banner = {
  backgroundImage: `url(${cover})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '300px',
  width: '100%',
}

function Slider() {
  return (
    <div style={banner}>
      <div className='slider-font'>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search for student accommodation</p>
      </div>
    </div>
  )
}

export default Slider