import React from 'react'
import './HomeDetailsKeyFeatures.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

function HomeDetailsKeyFeatures() {
  return (
    <div className='home-details-key-features-container'>
        <h1>Key Features</h1>
        <ul>
            <li><BsFillCheckCircleFill className='checkmark' /> Great Size Period Property</li>
            <li><BsFillCheckCircleFill className='checkmark' /> Four / Five Bedrooms</li>
            <li><BsFillCheckCircleFill className='checkmark' /> Two Reception Rooms</li>
            <li><BsFillCheckCircleFill className='checkmark' /> OpenPlan Dining Kitchen</li>
            <li><BsFillCheckCircleFill className='checkmark' /> Two Bath/Shower Rooms & Two WC's</li>
        </ul>
    </div>
  )
}

export default HomeDetailsKeyFeatures