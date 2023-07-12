import React, {useEffect, useState} from 'react'
import './FindHomes.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function FindHomes() {

    //Cities dropdown info for form
    const [dropdown, setDropdown] = useState([])

    useEffect(
        ()=>{
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res=>{
            console.log(res.data.response)
            //store results in state using setDropdown
            setDropdown(res.data.response)
        })
        .catch(err => console.log(err))
        }, []
    )

  //Function to handle selecting a city
  const handleSelectedCity = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='form-container'>

        <form>
          <select onChange={handleSelectedCity}>
              <option value="">Search by City</option>
              {dropdown.map((item, index)=><option value={item.name} key={index}>{item.name}</option>)}
          </select>
          <button>Find Homes</button>
        </form>

    </div>
  )
}

export default FindHomes