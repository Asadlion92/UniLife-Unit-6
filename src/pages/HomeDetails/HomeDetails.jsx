import React, { useEffect, useState } from 'react'
import './HomeDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import HomeDetailsImg from '../../components/HomeDetailsImg/HomeDetailsImg'
import HomeDetailsContent from '../../components/HomeDetailsContent/HomeDetailsContent'
import HomeDetailsDescription from '../../components/HomeDetailsDescription/HomeDetailsDescription'
import HomeDetailsKeyFeatures from '../../components/HomeDetailsKeyFeatures/HomeDetailsKeyFeatures'
import HomeDetailsBedroomPrices from '../../components/HomeDetailsBedroomPrices/HomeDetailsBedroomPrices'

function HomeDetails() {

    const {property_id} = useParams()

    const [backButton, setBackButton] = useState('')
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(`/cityDetails/${backButton}`)
    }

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                //I was able to pull the original ID from the data, stored it into state and used useNavigate to navigate back to the previous page
                setBackButton(res.data.city_id._id)

            })
            .catch(err => console.log(err))
        }, []
    )

        

  return (
    <div className='home-details-container'>
        <button className='back-btn' onClick={handleBackButton}>Back to Search</button>

        <div className="home-details-top-section">
            <HomeDetailsImg />
            <HomeDetailsContent />
        </div>
        <div className="home-details-mid-section">
            <HomeDetailsDescription />
            <HomeDetailsKeyFeatures />
        </div>
        <div className="home-details-btm-section">
            <HomeDetailsBedroomPrices />
        </div>
    </div>
  )
}

export default HomeDetails