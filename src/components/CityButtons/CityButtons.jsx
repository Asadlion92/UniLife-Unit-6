import React from 'react'
import './CityButtons.css'
import { Link } from 'react-router-dom'

function CityButtons({buttons}) {
  return (
    <div>
        <Link to={`/cityDetails/${buttons._id}`}><button className='city-btn'>{buttons.name}</button></Link>
    </div>
  )
}

export default CityButtons