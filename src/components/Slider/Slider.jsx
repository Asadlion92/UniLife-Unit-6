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

function Slider({title, subtitle}) {
  return (
    <div style={banner}>
      <div className='slider-font'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Slider