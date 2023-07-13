import React from 'react'
import './PropertyCard.css'
import {MdOutlineBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import HomeDetails from '../HomeDetails/HomeDetails'

function PropertyCard({property}) {
  return (
    <div className='property-card-container'>
        <img src={property.images[0]} />
        <div className="property-card-mid-content">
            <div className="mid-content-left">
                <h3>${property.rent}</h3>
                <p>including bills</p>
            </div>
            <div className="mid-content-right">
                <MdOutlineBed />
                <p>{property.bedroom_count}</p>
                <MdBathtub />
                <p>{property.bathroom_count}</p>
            </div>
            <div className="property-card-btm-content">
                <div className="btm-content-divider">
                    <p>{property.property_type}</p>
                    <p>{property.furnished}</p>
                </div>

                <address>{`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}</address>
                <FiMapPin />
            </div>
            <HomeDetails />
        </div>

    </div>
  )
}

export default PropertyCard