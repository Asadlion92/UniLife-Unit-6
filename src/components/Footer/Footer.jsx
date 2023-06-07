import React from 'react'
import './Footer.css'
import {RiCopyrightLine} from 'react-icons/ri'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-left-content">
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookie Policies</p>
        </div>
        <div className="footer-right-content">
            <p>2023</p>
            <div className='copyright'>
              <RiCopyrightLine />
              <p>UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer