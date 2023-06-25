import React from 'react'
import './MidBanner.css'
import search from '../../assets/search-icon.png'
import compare from '../../assets/compare-icon.png'
import bill from '../../assets/bills-icon.png'
import bestSelection from '../../assets/best-selection-icon.png'
import yourFavorite from '../../assets/favorite-icon.png'
import person from '../../assets/image-icon.png'



function MidBanner() {
  return (
    <div className='mid-banner-container'>
        <div className='mid-banner-top'>
            <h2>Compare all inclusive student homes.</h2>
            <div className='icon-container'>
                <div className='icon'>
                    <img src={search}/>
                    <h3>Search</h3>
                    <p>Find your dream home in the perfect area near your university.</p>
                </div>
                <div className='icon'>
                    <img src={compare}/>
                    <h3>Compare</h3>
                    <p>Compare student accommodation to find the right home for you.</p>
                </div>
                <div className='icon'>
                    <img src={bill}/>
                    <h3>Bills Included</h3>
                    <p>Bills are included in all rent prices. No hidden fees.</p>
                </div>
            </div>
        </div>
        <div className='mid-banner-bottom'>
            <div className="mid-banner-left-content">
                <div className="block">
                    <img src={bestSelection} />
                    <div className='block-content'>
                        <h3>Best Selection</h3>
                        <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                    </div>
                </div>
                <div className="block">
                    <img src={yourFavorite} />
                    <div className='block-content'>
                        <h3>Your Favorite</h3>
                        <p>Shortlist your favourite properties and send enquiries in one click.</p>
                    </div>
                </div>
                <button>Search & Compare</button>
            </div>
            <div className="mid-banner-right-content">
                <img src={person} />
            </div>
        </div>
    </div>
  )
}

export default MidBanner