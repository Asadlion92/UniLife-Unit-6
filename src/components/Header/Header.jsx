import React from 'react'
import './Header.css'
import {MdOutlineHome} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlEnvolope} from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <Link to='/' className='left-content'>
          <MdOutlineHome className='house' />
          <h3>UniLife</h3>
      </Link>
      <div className="right-content">
        <div className="shortlist">
          <AiOutlineHeart />
          <p>Shortlist</p>
        </div>
        <div className="contact-us">
          <SlEnvolope />
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Header