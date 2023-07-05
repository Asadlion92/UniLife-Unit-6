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
              <p>Testing</p>
              <p>Testing</p>
              <p>Testing</p>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Header