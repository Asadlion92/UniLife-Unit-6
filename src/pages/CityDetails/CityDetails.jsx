import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'

function CityDetails() {

    const {city_id} = useParams()
    const [city, setCity] = useState([])
    const [card, setCard] = useState([])

    useEffect(
      ()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
        .then(res => {
          console.log(res.data)
          //store results in state using setCity
          setCity(res.data)

          console.log(res.data.response)
          setCard(res.data.response)
        })
        .catch(err => console.log(err))
      }, []
    )



  return (
    <div className='city-details-container'>
      <Slider
            title="Search Accomodation" 
            subtitle="Whatever you're after, we can help you find the right student accommodation for you."
      />
      <h1>{`${city.total} homes in ${city.city_name}`}</h1>
      <div className='property-container'>
      
        {card.map((item, index) =><PropertyCard key={index} property={item} />)}
      </div>
      
    </div>
  )
}

export default CityDetails