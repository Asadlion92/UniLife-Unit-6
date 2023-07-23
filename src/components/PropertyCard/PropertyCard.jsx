import React from 'react'
import './PropertyCard.css'
import {MdOutlineBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import HomeDetailsBtn from '../HomeDetailsBtn/HomeDetailsBtn'

function PropertyCard({property}) {
  return (
    <div className='property-card-container'>
        <img src={property?.images[0]} />
        <div className="property-card-mid-content">
            <div className="mid-content-left">
                <h2>${property?.rent}</h2>
                <p>including bills</p>
            </div>
            <div className="mid-content-right">
                <div className='bed'>
                    <MdOutlineBed className='bed-icon' />
                    <p>{property?.bedroom_count}</p>
                </div>
                <div className="bathroom">
                    <MdBathtub className='bathroom-icon' />
                    <p>{property?.bathroom_count}</p>
                </div>
            </div>
        </div>
        <div className="property-card-btm-content">
            <div className="btm-content-divider">
                <p>{property?.property_type}</p>
                <p>{property?.furnished}</p>
            </div>
            <div className='location'>
                <FiMapPin />
                <address>{`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}</address>
            </div>
            
            
        </div>
        <HomeDetailsBtn id={property?._id}/>
        

    </div>
  )
}

export default PropertyCard