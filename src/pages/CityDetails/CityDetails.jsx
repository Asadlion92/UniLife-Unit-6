import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import students from '../../assets/students-icon.png'


function CityDetails() {

    const {city_id} = useParams()
    const [city, setCity] = useState([])
    const [card, setCard] = useState([])

    const [bedroomCount, setBedroomCount] = useState([])
    const [bathroomCount, setBathroomCount] = useState([])
    const [maxPrice, setMaxPrice] = useState([])
    const [homeType, setHomeType] = useState([])

    useEffect(
      ()=>{
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
        .then(res => {

          setBedroomCount(res.data.response)
          setBathroomCount(res.data.response)
          
          setHomeType(res.data.response) 
          // console.log(res.data.response[0].bedroom_prices)

          
          //store results in state using setCity
          setCity(res.data)

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

      <div className='filter-box'>
        <form className='filter-container'>
          <div className='filter-column'>
            <label>Min Bedroom</label>
            <select>
              {bedroomCount.sort((a,b) => a.bedroom_count > b.bedroom_count ? 1 : -1)//used sort to place data in order
              .map((item, index) => <option key={index}>{item.bedroom_count}</option>)}
            </select>
          </div>

          <div className='filter-column'>
            <label>Min Bathroom</label>
            <select>
              {bathroomCount.map((item, index) => <option key={index}>{item.bathroom_count}</option>)}
            </select>
          </div>

          <div className='filter-column'>
            <label>Max Price</label>
            <select>
              <option value="">Testing 1</option>
            </select>
          </div>

          <div className='filter-column'>
            <label>Home Type</label>
            <select>
              {homeType.map((item, index) => <option key={index}>{item.property_type}</option>)}
            </select>
          </div>
    
        </form>
      </div>

      <div className='property-container'>
        <h1>{`${city?.total} homes in ${city?.city_name}`}</h1>
        <div className='property-items-container'>
          {card?.map((item, index) =><PropertyCard key={index} property={item} />)}
        </div>
      </div>
      <div className='city-details-btm'>
        <div className="city-details-btm-content">
          <div className="city-details-btm-content-left">
            <h1>{`Being a student in ${city?.city_name}`}</h1>
            <p>{`${city?.city_name} is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. ${city?.city_name} is the perfect mix of city and town life and has something to offer to anyone who calls it home.`}</p>
            <br />
            <p>{`${city?.city_name} is home to three universities, the University of ${city?.city_name}, ${city?.city_name} Trinity University and ${city?.city_name} Beckett University`}</p>
          </div>
          <div className="city-details-btm-content-right">
            <img src={students} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CityDetails