import React from 'react'
import './Footer.css'
import {RiCopyrightLine} from 'react-icons/ri'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <div>
      <div className='footer-top'>
        <div className="footer-top-left-content">
          <form>
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type='email' placeholder='Your email'/>
          </form>
        </div>
        <div className="footer-top-right-content">
          <div className="footer-top-right-content-container">
            <h2>Let's Socialize</h2>
            <div className='social-media'>
              <BsFacebook className='social-media-icon' />
              <p>Facebook</p>
            </div>
            <div className='social-media'>
              <AiFillTwitterCircle className='social-media-icon' />
              <p>Twitter</p>
            </div>
            <div className='social-media'>
              <AiFillInstagram className='social-media-icon' />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className="footer-bottom-left-content">
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookie Policies</p>
        </div>
        <div className="footer-bottom-right-content">
            <p>2023</p>
            <div className='copyright'>
              <RiCopyrightLine />
              <p>UniLife</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer