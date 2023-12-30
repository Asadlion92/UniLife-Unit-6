import React, {useEffect, useState} from 'react'
import './FilterAccomodations.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function FilterAccomodations({properties, setProperties, cityId}) {

    // NEW CODE STARTS HERE
    const [queryState, setQueryState] = useState('');

    const bedroomCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const bathroomCount = [1, 2, 3]
    const maxPrice = [1000, 1500, 2000, 2500, 3000]
    const homeType = ["Detached", "Semi-Detached", "Apartment"]

    // const filterAllProperties = (bedroom, bathroom, price) => {
    //     const query = {
    //         city_id: cityId,
    //         bedroom_count: bedroom,
    //         bathroom_count: bathroom,
    //         rent: price
    //     }

    //     axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
    //     .then(res=>{
    //         console.log(res.data.response)
    //         setProperties(res.data.response)
    //     })
    //     .catch(err=>console.log(err))
    // }


    const filterBedroom = (bedroom)=>{ 
        const query={
          city_id: cityId,
          bedroom_count:bedroom,
      }
      
      axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
        .then(res=>{
            console.log(res.data.response)
            setProperties(res.data.response)
        })
        .catch(err=>console.log(err))
      
      setQueryState(query)
    }



    const filterBathroom = (bathroom)=>{ 
    setQueryState({...queryState, bathroom_count: bathroom})
    }
      
    const filterRent = (rent)=>{ 
    setQueryState({...queryState, rent: rent})
    }
      
    const filterHomeType = (homeType)=>{ 
    setQueryState({...queryState, property_type: homeType})
    }

    useEffect(()=>{

        axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{"query": queryState})
        .then(res=>{
            console.log(res.data)
            if(res.data.status === 200){// NEED TO FIGURE OUT WHAT THIS IS
                setProperties(res.data.response)
              } 
        })
        .catch(err=>console.log(err))

    }, [queryState])



    const handleSearch = (e) =>{
        //This stops the defualt form action from refreshing page
        e.preventDefault();
        
      }


    // NEW CODE ENDS HERE
  
  return (
    <div className='filter-accomodations-container'>
        <form onSubmit={handleSearch}>

            <div className='filter'>
                <label>Min Bedroom</label>
                <select defaultValue={'DEFAULT'} onChange={(e)=>filterBedroom(e.target.value)}>
                    <option>Min Bedroom</option> {/* look into what 'selected' means */}
                    {bedroomCount.map((item)=><option key={item}>{item}</option>)}
                </select>
            </div>

            <div className='filter'>
                <label>Min Bathroom</label>
                <select defaultValue={'DEFAULT'} onChange={(e)=>filterBathroom(e.target.value)}>
                    <option disabled>Min Bathroom</option>
                    {bathroomCount.map((item)=><option key={item}>{item}</option>)}
                </select>
            </div>

            <div className='filter'>
                <label>Max Price</label>
                <select defaultValue={'DEFAULT'} onChange={(e)=>filterRent(e.target.value)}>
                    <option disabled>Max Price</option>
                    {maxPrice.map((item)=><option key={item}>{item}</option>)}
                </select>
            </div>

            <div className='filter'>
                <label>Home Type</label>
                <select defaultValue={'DEFAULT'} onChange={(e)=>filterHomeType(e.target.value)}>
                    <option disabled>Home Type</option>
                    {homeType.map((item)=><option key={item}>{item}</option>)}
                </select>
            </div>

        </form>
    </div>
  )
}

export default FilterAccomodations