import React from 'react'
import './HomeDetails.css'
import { Link } from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'

function HomeDetails() {
  return (
    <div className='home-details-container'>
        <Link>
          <BsHouseDoor />
          View Home 
        </Link>
        
    </div>
  )
}

export default HomeDetails