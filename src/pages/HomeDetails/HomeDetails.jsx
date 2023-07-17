import React, { useEffect, useState } from 'react'
import './HomeDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function HomeDetails() {

    const {property_id} = useParams()
    const [details, setDetails] = useState('')
    const [images, setImages] = useState([])
    //HAVING AN ISSUE USING ARRAYS. WHEN THE PAGE RELOADS, IT CRASHES
    //Solution, the API call was an Object not an array. I created another state to just capture the images array. Also, it might be wise to create a component for images, the information on the right and the bedroom prices 

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                console.log(res.data.images)
                //store data in state
                setDetails(res.data)
                setImages(res.data.images)
            })
            .catch(err => console.log(err))
        }, []
    )
        

  return (
    <div className='home-details-container'>
        <div className="home-details-top-section">
            <div className="details-top-section-left-content">
                <img src={images[0]} />
                <img src={images[1]} />
                <img src={images[2]} />
                <img src={images[3]} />

            </div>
            <div className="details-top-section-right-content"></div>
        </div>
        <div className="home-details-mid-section"></div>
        <div className="home-details-btm-section"></div>
    </div>
  )
}

export default HomeDetails