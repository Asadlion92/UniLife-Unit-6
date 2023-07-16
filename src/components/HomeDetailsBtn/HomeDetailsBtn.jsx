import React from 'react'
import './HomeDetailsBtn.css'
import { Link } from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'

function HomeDetailsBtn({id}) {
  return (
    <div className='home-details-btn-container'>
        <Link to={`/homeDetails/${id}`}>
          <BsHouseDoor />
          View Home 
        </Link>
    </div>
  )
}

export default HomeDetailsBtn