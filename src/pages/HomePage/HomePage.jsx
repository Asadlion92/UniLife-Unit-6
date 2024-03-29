import React, {useState, useEffect} from 'react'
import './HomePage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import HomeForm from '../../components/HomeForm/HomeForm'
import MidBanner from '../../components/MidBanner/MidBanner'
import { Link } from 'react-router-dom'
import FindHomes from '../../components/FindHomes/FindHomes'

function HomePage() {

  //Second, Store the results in state
  const [cities, setCities] = useState([])

  //First, Create an API call to retrieve the top cities using axios
  useEffect(
    ()=>{
      // console.log("form is working")
      axios.get(`https://unilife-server.herokuapp.com/cities?limit=9`)
      .then(res=>{
        // console.log(res.data.response)
        //store results in state using setCities
        setCities(res.data.response)
      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className='homepage-container'>
      <div className='grid'>
        <Slider className='slider'
          title="Find student homes with bills included" 
          subtitle="A simple and faster way to search for student accommodation"
          />

        <FindHomes />
      </div>


      <h2>Student accommodations in our top cities</h2>
      <div className='card-container'>
        {cities?.map((item, index)=><HomeForm key={index} city={item} />)}
      </div>
      <div className='btn-container'>
        <Link to='/allCities'><button>See All Cities</button></Link>
      </div>
      <MidBanner />


    </div>
  )
}

export default HomePage