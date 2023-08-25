import React from 'react'
import './HomeForm.css'
import { Link } from 'react-router-dom'

function HomeForm({city}) {

    const card = {
        backgroundImage: `url(${city.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px',
        width: '400px',
        borderRadius: '24px',
      }

  return (
    <div className='card-item-container'>
        <div style={card}>
            <div className="card-font">
                <Link to={`/cityDetails/${city._id}`}>
                    <h2>{city.name}</h2>
                    <p>{`${city.property_count} properties`}</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeForm