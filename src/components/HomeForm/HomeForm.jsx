import React from 'react'
import './HomeForm.css'

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
                <h2>{city.name}</h2>
                <p>{`${city.property_count} properties`}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeForm