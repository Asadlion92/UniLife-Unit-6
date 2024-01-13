import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import students from '../../assets/students-icon.png'

//NOTES from 12/30/23: I need to figure out now how to filter the PropertyCard when the user selects the bedroom count dropdown

function CityDetails() {

    const {city_id} = useParams()
    const [city, setCity] = useState([])
    const [card, setCard] = useState([])

    const [bedroomCount, setBedroomCount] = useState('1')
    const [bathroomCount, setBathroomCount] = useState('1')


    const handleBedroomFilter = (e) => {
      console.log(e.target.value)
      setBedroomCount(e.target.value)
      //Step 3: I stored the bedroomCount from the selected values from the dropdown to state.
    }

    const handleBathroomFilter = (e) => {
      console.log(e.target.value)
      setBathroomCount(e.target.value)
    }

    useEffect(
      ()=>{

        //Steps for getting the POST request to work
        //Step 1: I created a const variable name query which contains an object of data that needs to be used to filter "city_id, bedroom_count, bathroom_count" etc. 
        const query={
          city_id: city_id,
          bedroom_count: bedroomCount, //Step 4: By placing the state "bedroomCount" here, the post request will filter from the selection from the dropdown. 
          bathroom_count: bathroomCount
        }

        //Step 2: I create a post request using axios and query. From the console log, when there is a change in the bedroom_count, the filter will be displayed.

        axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
        .then(res =>{
            console.log("filtering")
            console.log(res.data.response)
            setCard(res.data.response)
            //when I set "setCard" to res.data.response, it filters the cards.
            //The state "card" and "setCard" controls the PropertyCards that is being displayed on the screen. Also, the query and the post request filters the data when changing the bedroom_count info.
        })
        .catch(err => console.log(err))

        axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
        .then(res => {
        
          //store results in state using setCity
          setCity(res.data)

          // setCard(res.data.response)
          // console.log(res.data.response)
        })
        .catch(err => console.log(err))

      }, [bedroomCount, bathroomCount] //Step 5: Since we are using useEffect, bedroomCount is placed as a dependency so when there is a change in bedroomCount, the page will rerender
    )



  return (
    <div className='city-details-container'>
      <Slider
            title="Search Accomodation" 
            subtitle="Whatever you're after, we can help you find the right student accommodation for you."
      />

      <div className='filter-container'>
        <div className='filter-dropdown'>
          <div className='filter-column'>
            <label htmlFor="">Min Bedroom</label>
            <select onChange={handleBedroomFilter}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className='filter-column'>
            <label htmlFor="">Min Bathroom</label>
            <select onChange={handleBathroomFilter}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className='filter-column'>
            <label htmlFor="">Max Price</label>
            <select name="" id="">
              <option value="">TEST</option>
            </select>
          </div>
          <div className='filter-column'>
            <label htmlFor="">Home Type</label>
            <select name="" id="">
              <option value="">TEST</option>
            </select>
          </div>
        </div>
      </div>

      <div className='property-container'>
        <h1>{`${city?.total} homes in ${city?.city_name}`}</h1>
        <div className='property-items-container'>
          {card?.map((item, index) =><PropertyCard key={index} property={item} />)}
        </div>
      </div>
      <div className='city-details-btm'>
        <div className="city-details-btm-content">
          <div className="city-details-btm-content-left">
            <h1>{`Being a student in ${city?.city_name}`}</h1>
            <p>{`${city?.city_name} is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. ${city?.city_name} is the perfect mix of city and town life and has something to offer to anyone who calls it home.`}</p>
            <br />
            <p>{`${city?.city_name} is home to three universities, the University of ${city?.city_name}, ${city?.city_name} Trinity University and ${city?.city_name} Beckett University`}</p>
          </div>
          <div className="city-details-btm-content-right">
            <img src={students} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CityDetails