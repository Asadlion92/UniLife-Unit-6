import React, { useEffect, useState } from 'react'
import './HomeDetails.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import HomeDetailsImg from '../../components/HomeDetailsImg/HomeDetailsImg'
import HomeDetailsContent from '../../components/HomeDetailsContent/HomeDetailsContent'

function HomeDetails() {

    const {property_id} = useParams()
    const [details, setDetails] = useState('')
    //HAVING AN ISSUE USING ARRAYS. WHEN THE PAGE RELOADS, IT CRASHES
    //Solution, the API call was an Object not an array. I created another state to just capture the images array. Also, it might be wise to create a component for images, the information on the right and the bedroom prices 

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                // console.log(res.data)
                //store data in state
                setDetails(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )
        

  return (
    <div className='home-details-container'>
        <Link><h3>Back to Search</h3></Link>

        <div className="home-details-top-section">
            <HomeDetailsImg />
            <HomeDetailsContent />
        </div>
        <div className="home-details-mid-section"></div>
        <div className="home-details-btm-section"></div>
    </div>
  )
}

export default HomeDetails