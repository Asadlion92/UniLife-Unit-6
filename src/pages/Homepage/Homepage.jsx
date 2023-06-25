import React, {useState, useEffect} from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import HomeForm from '../../components/HomeForm/HomeForm'
import MidBanner from '../../components/MidBanner/MidBanner'

function Homepage() {

  //Second, Store the results in state
  const [cities, setCities] = useState([])

  //First, Create an API call to retrieve the top cities using axios
  useEffect(
    ()=>{
      console.log("form is working")
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res=>{
        console.log(res.data.response)
        //store results in state using setCities
        setCities(res.data.response.slice(0,9)) //slice is used to get the top 9 cities from the list
      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className='homepage-container'>
      <Slider />
      <h2>Student accommodations in our top cities</h2>
      <div className='card-container'>
        {cities.map((item, index)=><HomeForm key={index} city={item} />)}
      </div>
      <div className='btn-container'>
        <button>See All Cities</button>
      </div>
      <MidBanner />


    </div>
  )
}

export default Homepage