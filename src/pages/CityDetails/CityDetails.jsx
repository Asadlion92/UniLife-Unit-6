import React from 'react'
import './CityDetails.css'
import { useParams } from 'react-router-dom'

function CityDetails() {

    const {productId} = useParams()
    // WAS ABLE TO GET USE PARAMS TO WORK AND DISPLAY THE PRODUCT ID FOR EACH CITY

  return (
    <div className='city-details-container'>
        CityDetails {productId}
    </div>
  )
}

export default CityDetails