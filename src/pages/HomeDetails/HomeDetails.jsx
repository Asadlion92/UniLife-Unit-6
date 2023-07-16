import React, { useEffect, useState } from 'react'
import './HomeDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function HomeDetails() {

    const {property_id} = useParams()
    const [details, setDetails] = useState('')
    //HAVING AN ISSUE USING ARRAYS. WHEN THE PAGE RELOADS, IT CRASHES

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                console.log(res.data)
                //store data in state
                setDetails(res.data)
            })
            .catch(err => console.log(err))
        }, []
        )

  return (
    <div className='home-details-container'>
        <div className="home-details-top-section">
            <div className="details-top-section-left-content">
                {/* <img src={details.images[0]} /> */}

            </div>
            <div className="details-top-section-right-content"></div>
        </div>
        <div className="home-details-mid-section"></div>
        <div className="home-details-btm-section"></div>
    </div>
  )
}

export default HomeDetails