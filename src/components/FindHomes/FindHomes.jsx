import React, {useEffect, useState} from 'react'
import './FindHomes.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function FindHomes() {

    //Cities dropdown info for form
    const [dropdown, setDropdown] = useState([])

    //Query Select
    const [query, setQuery] = useState([])

    useEffect(
        ()=>{
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res=>{
            //store results in state using setDropdown
            setDropdown(res.data.response)
        })
        .catch(err => console.log(err))
        }, []
    )

  //Function to handle selecting a city
  const handleSelectedCity = (e) => {
    // console.log(e.target.value)

    axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
    .then(res=>{
      //Stored e.target.value into state
      setQuery(e.target.value)
    }).catch(err => console.log(err))

  }

  const handleSearch = (e) =>{
    //This stops the defualt form action from refreshing page
    e.preventDefault();
    
  }

  return (
    <div className='form-container'>

        <form onSubmit={handleSearch}>
          <select onChange={handleSelectedCity}>
              <option value="">Search by City</option>
              {dropdown.map((item, index)=><option value={item._id} key={index}>{item.name}</option>)}
              {/*I have the ID from the drop down. I need to store it probably in a state and use the button to display it*/}
          </select>
          <Link to={`/cityDetails/${query}`}><button>Find Homes</button></Link>
        </form>

    </div>
  )
}

export default FindHomes