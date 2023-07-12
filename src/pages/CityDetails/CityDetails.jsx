import React from 'react'
import './CityDetails.css'
import { useParams } from 'react-router-dom'

function CityDetails() {

    const {productId} = useParams()
    // WAS ABLE TO GET USE PARAMS TO WORK AND DISPLAY THE PRODUCT ID FOR EACH CITY

    //NEED TO MAKE AN API CALL TO VIEW DETAILS FOR A PARTICULAR CITY (NOTES FROM 07/11/23)

  return (
    <div className='city-details-container'>
        CityDetails {productId}
        
    </div>
  )
}

export default CityDetails