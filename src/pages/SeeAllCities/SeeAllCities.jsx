import React, {useState, useEffect} from 'react'
import './SeeAllCities.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import CityButtons from '../../components/CityButtons/CityButtons'


function SeeAllCities() {

    const [cities, setCities] = useState([])

    useEffect(
        ()=>{
          axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
          .then(res=>{
            // console.log(res.data.response)
            //store results in state using setCities
            setCities(res.data.response)
          })
          .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='see-all-cities-container'>
        <Slider
            title="Student Accomodation" 
            subtitle="UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you."
        />
        <h2>Search by City</h2>
        <div className='city-btn-container'>
          {cities.map((item, index)=>
            <CityButtons key={index} buttons={item} />
          )} 
        </div>
    </div>
  )
}

export default SeeAllCities