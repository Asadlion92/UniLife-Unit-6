import React, { useState } from 'react'
import './Header.css'
import {MdOutlineHome} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlEnvolope} from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

function Header() {

  //Creating the Modal

  const [isOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '25px'
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

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

        <button className='contact-us' onClick={() => setIsOpen(true)}>
          <SlEnvolope />
          <p>Contact Us</p>
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
        >
          <div className='modal'>
            <div className='modal-content'>
              <h1>Contact Us</h1>
              <br />
              <p>Feel free to contact us if you have any questions. Looking forward to hear from you.</p>
              <br />
              <form className='modal-form-container'>
                <div className='modal-left-content'>
                  <label><h3>Name</h3></label><br />
                  <input type='text' placeholder='Enter your name' required/><br />
                  <label><h3>Email</h3></label><br />
                  <input type='text' placeholder='Enter your email address' required/><br />
                  <label><h3>Phone Number</h3></label><br />
                  <input type='text' placeholder='Enter your phone number' required/><br />
                </div>
                <div className='modal-right-content'>
                  <label><h3>Message</h3></label><br />
                  <textarea placeholder='Enter your message' required></textarea><br />
                  <input type='submit' />
                </div>
              </form>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Header