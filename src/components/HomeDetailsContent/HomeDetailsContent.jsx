import React, {useState, useEffect} from 'react'
import './HomeDetailsContent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {MdOutlineBed} from 'react-icons/md'
import {MdOutlineBathtub} from 'react-icons/md'

function HomeDetailsContent() {

    const {property_id} = useParams()
    const [info, setInfo] = useState('')
    const [address, setAddress] = useState('')

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                console.log(res.data)
                setInfo(res.data)
                setAddress(res.data.address)

            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='home-details-content-container'>
        <h1>{`${address.street}, ${address.city}, ${address.postcode}`}</h1>
        <div className="home-details-content-info">
            <div className="home-details-content-info-top-row">
                <div className="content">
                    <h3>Bedrooms</h3>
                    <div className="content-items">
                        <MdOutlineBed className='bed-icon' /*className bed-icon is pulling from PropertyCard css */ />
                        <div className="bedroom-count-num">
                            {info.bedroom_count}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3>Bathrooms</h3>
                    <div className="content-items">
                        <MdOutlineBathtub className='bathroom-icon' /*className bathroom-icon is pulling from PropertyCard css */ />
                        <div className="bathroom-count-num">
                            {info.bathroom_count}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3>Property Type</h3>
                    <p>{info.property_type}</p>
                </div>
            </div>
            <div className="home-details-content-info-bottom-row">
                <div className="content">
                    <h3>Price</h3>
                    <p>${info.rent}</p>
                </div>
                <div className="content">
                    <h3>Furnished type</h3>
                    <p>{info.furnished}</p>
                </div>
                <div className="content">
                    <h3>Available from</h3>
                    <p>{info.availability}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDetailsContent