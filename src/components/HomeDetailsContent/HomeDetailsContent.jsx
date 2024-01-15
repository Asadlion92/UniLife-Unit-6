import React, {useState, useEffect} from 'react'
import './HomeDetailsContent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {MdOutlineBed} from 'react-icons/md'
import {MdOutlineBathtub} from 'react-icons/md'
import Modal from 'react-modal'

function HomeDetailsContent() {

    const {property_id} = useParams()
    const [info, setInfo] = useState('')
    const [address, setAddress] = useState('')

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                setInfo(res.data)
                setAddress(res.data.address)

            })
            .catch(err => console.log(err))
        }, []
    )

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
  
  Modal.setAppElement('#root');

  return (
    <div className='home-details-content-container'>
        <div className="home-details-container-top-block">
            <h1>{`${address.street}, ${address.city}, ${address.postcode}`}</h1>
            <hr />
            <div className="home-details-column-container">
                <div className="home-details-column">
                    <div className="top-block">
                        <h3>Bedrooms</h3>
                        <div className="content-items">
                            <MdOutlineBed className='bed-icon' /*className bed-icon is pulling from PropertyCard css */ />
                            <div className="bedroom-count-num">
                                {info.bedroom_count}
                            </div>
                        </div>
                    </div>
                    <div className="btm-block">
                            <h3>Price</h3>
                            <div className="content-items">
                                <div className="price-num">
                                    <p>${info.rent}</p>
                                </div>
                            </div> 
                    </div>
                </div>

                <div className="home-details-column">
                    <div className="top-block">
                        <h3>Bathrooms</h3>
                        <div className="content-items">
                            <MdOutlineBathtub className='bathroom-icon' /*className bathroom-icon is pulling from PropertyCard css */ />
                            <div className="bathroom-count-num">
                                {info.bathroom_count}
                            </div>
                        </div>
                    </div>
                    <div className="btm-block">
                            <h3>Furnished Type</h3>
                            <div className="content-items">
                                <div>
                                    <p className='furnished-content'>{info.furnished}</p>
                                </div>
                            </div> 
                    </div>
                </div>

                <div className="home-details-column">
                    <div className="top-block">
                        <h3>Property Type</h3>
                        <div className="content-items">
                            <div>
                                <p className='property-type-content'>{info.property_type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="btm-block">
                            <h3>Available from</h3>
                            <div className="content-items">
                                <div>
                                    <p className='availability-content'>{info.availability}</p>
                                </div>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className='home-details-container-btm-block'>
            <button onClick={() => setIsOpen(true)}>Book Viewing</button>
            <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Booking Modal"
            >
                <div className='modal'>
                    <div className='modal-content'>
                        <h1>Book a Viewing</h1>
                        <br />
                        <h3>{`${address.street}, ${address.city}, ${address.postcode}`}</h3>
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

export default HomeDetailsContent