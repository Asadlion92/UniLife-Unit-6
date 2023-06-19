import React, {useEffect, useState} from 'react'
import './HomepageForm.css'
import axios from 'axios'

function Form() {
  //Second, Store the results in state
  const [cities, setCities] = useState([])

  //First, Create an API call to retrieve the top cities using axios
  useEffect(
    ()=>{
      console.log("form is working")
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res=>{
        console.log(res.data.response)
        //store results in state using setCities
        setCities(res.data.response)
      })
      .catch(err => console.log(err))
    }, []
  )



  return (
    <div className='form-container'>
      <h2>Student accommodations in our top cities</h2>
      {cities.map((item, index)=><p key={index}>{item.name}</p>)}
    </div>
  )
}

export default Form