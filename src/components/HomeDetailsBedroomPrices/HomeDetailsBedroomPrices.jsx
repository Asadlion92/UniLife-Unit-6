import React, {useState, useEffect} from 'react'
import './HomeDetailsBedroomPrices.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function HomeDetailsBedroomPrices() {

    const {property_id} = useParams()
    const [bedroomPrices, setBedroomPrices] = useState('')

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                console.log(res.data)
                console.log(res.data.bedroom_prices)
                setBedroomPrices(res.data.bedroom_prices)

            })
            .catch(err => console.log(err))
        }, []
    )


  return (
    <div  className='home-details-bedroom-prices-container'>
        <h1>Bedroom Prices</h1>
        <div className="bedroom-prices-container">
            <div className="bedroom-prices">
                <p>Bedroom 1</p>
                <p>${bedroomPrices.bedroom_one} per week</p>
            </div>
            <div className="bedroom-prices">
                <p>Bedroom 2</p>
                <p>${bedroomPrices.bedroom_two} per week</p>
            </div>
            <div className="bedroom-prices">
                <p>Bedroom 3</p>
                <p>${bedroomPrices.bedroom_three} per week</p>
            </div>
            <div className="bedroom-prices">
                <p>Bedroom 4</p>
                <p>${bedroomPrices.bedroom_four} per week</p>
            </div>
            <div className="bedroom-prices">
                <p>Bedroom 5</p>
                <p>${bedroomPrices.bedroom_five} per week</p>
            </div>
        </div>
    </div>
  )
}

export default HomeDetailsBedroomPrices